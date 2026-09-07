import { profile } from "@/content/profile";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; error: string };

// Brand palette pulled from the site tokens (globals.css).
const brand = {
  ink: "#1b1817",
  muted: "#7a716c",
  page: "#f7f5f3",
  card: "#ffffff",
  border: "#dad2cc",
  red: "#c71616",
  redBright: "#e5120e",
  slate: "#8f8783",
  quoteBg: "#f6efec",
} as const;

/** Escapes user-supplied text for safe interpolation into the HTML email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strips characters that could break an email header display name. */
function headerSafeName(value: string): string {
  return value.replace(/["\r\n]+/g, " ").trim();
}

function buildHtml(data: ContactMessage): string {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const message = escapeHtml(data.message).replace(/\n/g, "<br />");

  const sans = "Arial,Helvetica,sans-serif";
  const mono = "'Courier New',Courier,monospace";
  // Dark tokens match the site's dark theme (globals.css). Used only inside
  // prefers-color-scheme / Outlook.com dark selectors — light stays inline.
  const dark = {
    page: "#111111",
    card: "#191919",
    border: "#332f2d",
    ink: "#f4f1ef",
    muted: "#8f8783",
    red: "#f5453b",
  } as const;

  // Header is a full-bleed PNG (black + red/white mark). Raster images are not
  // inverted by Gmail/Apple Mail dark mode, so this band stays fixed while the
  // rest of the message adapts. Asset is 1120×188 → 560×94 at 1x; logo left
  // inset matches the 32px body text padding below.
  const headerImg =
    `<img src="https://umrndem.com/email-header.png" width="560" height="94" ` +
    `alt="U/N — ${escapeHtml(profile.name)}" ` +
    `style="display:block;width:100%;max-width:560px;height:auto;border:0;outline:none;" />`;

  return `<!doctype html>
<html>
  <head>
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />
    <style>
      :root { color-scheme: light dark; supported-color-schemes: light dark; }
      @media (prefers-color-scheme: dark) {
        .email-body, .email-shell { background-color: ${dark.page} !important; }
        .email-card { background-color: ${dark.card} !important; border-color: ${dark.border} !important; }
        .email-title, .email-text { color: ${dark.ink} !important; }
        .email-label { color: ${dark.muted} !important; }
        .email-link { color: ${dark.red} !important; }
      }
      /* Outlook.com / Outlook app dark mode */
      [data-ogsc] .email-body, [data-ogsc] .email-shell { background-color: ${dark.page} !important; }
      [data-ogsc] .email-card { background-color: ${dark.card} !important; border-color: ${dark.border} !important; }
      [data-ogsc] .email-title, [data-ogsc] .email-text { color: ${dark.ink} !important; }
      [data-ogsc] .email-label { color: ${dark.muted} !important; }
      [data-ogsc] .email-link { color: ${dark.red} !important; }
    </style>
  </head>
  <body class="email-body" style="margin:0;padding:0;background:${brand.page};">
    <table role="presentation" class="email-shell" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.page};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" class="email-card" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:${brand.card};border:1px solid ${brand.border};">
            <tr>
              <td bgcolor="${brand.ink}" style="padding:0;background-color:${brand.ink};font-size:0;line-height:0;">
                ${headerImg}
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px 6px;">
                <h1 class="email-title" style="margin:0;font-family:${sans};font-size:21px;line-height:1.25;color:${brand.ink};font-weight:700;letter-spacing:-0.01em;">
                  ${name} reached out via your portfolio
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 30px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr><td class="email-label" style="font-family:${mono};font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:${brand.muted};padding:0 0 5px;">From</td></tr>
                  <tr><td class="email-text" style="font-family:${sans};font-size:14px;color:${brand.ink};line-height:1.55;padding:0 0 16px;font-weight:700;">${name}</td></tr>
                  <tr><td class="email-label" style="font-family:${mono};font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:${brand.muted};padding:0 0 5px;">Email</td></tr>
                  <tr>
                    <td style="font-family:${sans};font-size:14px;line-height:1.55;padding:0 0 16px;">
                      <a class="email-link" href="mailto:${email}" style="color:${brand.red};text-decoration:none;font-weight:700;">${email}</a>
                    </td>
                  </tr>
                  <tr><td class="email-label" style="font-family:${mono};font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:${brand.muted};padding:0 0 5px;">Message</td></tr>
                  <tr>
                    <td style="padding:0 0 8px;">
                      <div class="email-text" style="font-family:${sans};font-size:14px;color:${brand.ink};line-height:1.55;border-left:4px solid ${brand.redBright};padding:2px 0 2px 16px;">
                        ${message}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/**
 * Delivers a contact submission via Resend's HTTP API.
 *
 * Runs on the Cloudflare Workers runtime (plain fetch, no Node SDK). Secrets
 * come from the Worker environment — never from NEXT_PUBLIC_* vars.
 */
export async function sendContactEmail(
  env: CloudflareEnv,
  data: ContactMessage,
): Promise<SendResult> {
  const apiKey = env.RESEND_API_KEY;

  if (!apiKey) {
    return { ok: false, error: "not-configured" };
  }

  const to = env.CONTACT_INBOX?.trim() || profile.email;
  const fromAddress = env.CONTACT_FROM?.trim() || "noreply@umrndem.com";
  const from = `${headerSafeName(data.name)} <${fromAddress}>`;

  const subject = `New portfolio message from ${data.name}`;
  const text = [
    `New contact message from ${profile.name}'s portfolio.`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    data.message,
    "",
    "— Sent from the contact form at umrndem.com",
  ].join("\n");

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        cc: data.email,
        subject,
        html: buildHtml(data),
        text,
        reply_to: data.email,
      }),
    });
  } catch {
    return { ok: false, error: "network" };
  }

  if (!response.ok) {
    return { ok: false, error: `provider-${response.status}` };
  }

  return { ok: true };
}
