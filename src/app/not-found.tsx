import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-page" id="main-content" tabIndex={-1}>
      <p className="kicker">404 / Not found</p>
      <h1>Page not found.</h1>
      <p>
        The link may be outdated or the page may have moved.
      </p>
      <Link className="button-link" href="/#work">
        Return to selected work <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
