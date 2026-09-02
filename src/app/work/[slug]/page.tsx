import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentImage } from "@/components/ContentImage";
import { RangeLine } from "@/components/RangeLine";
import { SiteFooter } from "@/components/SiteFooter";
import { TechnologyBadge } from "@/components/TechnologyBadge";
import {
  projects,
  visibilityLabels,
} from "@/content/projects";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

// Only publication-safe slugs generated below are valid project routes.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `/work/${project.slug}`,
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main id="main-content" tabIndex={-1}>
      <article className="case-study">
        <header className="case-study__hero">
          <div className="case-study__breadcrumb">
            <Link href="/#work">Selected work</Link>
            <span aria-hidden="true">/</span>
            <span>{project.title}</span>
          </div>

          <div className="case-study__title">
            <p className="kicker">{project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>

          <dl className="case-study__meta">
            <div>
              <dt>Context</dt>
              <dd>{project.context}</dd>
            </div>
            <div>
              <dt>Period</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.stage}</dd>
            </div>
            <div>
              <dt>Visibility</dt>
              <dd>{visibilityLabels[project.visibility]}</dd>
            </div>
          </dl>

          <RangeLine active={project.range} />
        </header>

        <aside className="case-study__boundary" aria-labelledby="boundary-title">
          <p className="kicker" id="boundary-title">
            Evidence boundary
          </p>
          <div>
            <p>
              <strong>Supported:</strong> {project.proof}
            </p>
            <p>
              <strong>Not overstated:</strong> {project.limitation}
            </p>
          </div>
        </aside>

        {project.gallery?.length ? (
          <section
            className="case-study__gallery"
            aria-label={`${project.title} project media`}
          >
            {project.gallery.map((asset) => (
              <ContentImage
                asset={asset}
                className="case-study__media"
                key={asset.src}
                sizes="(max-width: 960px) 100vw, 42rem"
              />
            ))}
          </section>
        ) : null}

        <div className="case-study__content">
          <nav aria-label="Case study sections">
            <p className="kicker">On this page</p>
            <ol>
              {project.sections.map((section, index) => (
                <li key={section.title}>
                  <a href={`#section-${index + 1}`}>{section.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="case-study__sections">
            {project.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <p className="case-study__section-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}

            <section className="case-study__tools" id="technical-notes">
              <h2>Technical notes</h2>

              <div className="case-study__stack-groups">
                <div className="case-study__stack-group">
                  <h3 className="case-study__stack-label">Core stack</h3>
                  <ul aria-label={`${project.title} core stack`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>
                        <TechnologyBadge name={technology} vertical />
                      </li>
                    ))}
                  </ul>
                </div>

                {project.deployment && project.deployment.length > 0 ? (
                  <div className="case-study__stack-group case-study__stack-group--secondary">
                    <h3 className="case-study__stack-label">
                      Deployment &amp; services
                    </h3>
                    <ul aria-label={`${project.title} deployment and services`}>
                      {project.deployment.map((item) => (
                        <li key={item}>
                          <TechnologyBadge name={item} vertical secondary />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {project.integrations && project.integrations.length > 0 ? (
                  <div className="case-study__stack-group case-study__stack-group--secondary">
                    <h3 className="case-study__stack-label">
                      Security &amp; integrations
                    </h3>
                    <ul
                      aria-label={`${project.title} security and integrations`}
                    >
                      {project.integrations.map((item) => (
                        <li key={item}>
                          <TechnologyBadge name={item} vertical secondary />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              {project.infrastructureNote ? (
                <p className="case-study__infrastructure">
                  {project.infrastructureNote}
                </p>
              ) : null}

              {project.liveUrl ? (
                <a className="button-link" href={project.liveUrl}>
                  View live preview <span aria-hidden="true">↗</span>
                </a>
              ) : null}

              {project.repositoryUrl ? (
                <a className="button-link" href={project.repositoryUrl}>
                  View public repository <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="case-study__private-note">
                  The repository is private. Approved public artifacts will be added
                  here after redaction and review.
                </p>
              )}
            </section>
          </div>
        </div>

        <footer className="case-study__next">
          <p className="kicker">Next project</p>
          <Link href={`/work/${nextProject.slug}`}>
            <span>{nextProject.title}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </footer>
      </article>
      <SiteFooter />
    </main>
  );
}
