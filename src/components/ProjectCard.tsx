import Link from "next/link";
import {
  visibilityLabels,
  type Project,
} from "@/content/projects";
import type { ProjectSurfaceInk } from "@/content/project-surfaces";
import { ContentImage } from "./ContentImage";
import { RangeLine } from "./RangeLine";
import { TechnologyBadge } from "./TechnologyBadge";

type ProjectCardProps = {
  project: Project;
  index: number;
  featured?: boolean;
  surfaceLevel: number;
  surfaceInk: ProjectSurfaceInk;
  surfaceMode?: "token" | "mix";
  surfaceMixPercent?: number;
};

export function ProjectCard({
  project,
  index,
  featured = false,
  surfaceLevel,
  surfaceInk,
  surfaceMode = "token",
  surfaceMixPercent = 0,
}: ProjectCardProps) {
  const curated = project.homepageTechnologies;
  const isCurated = (label: string) => !curated || curated.includes(label);

  const coreItems = project.technologies.filter(isCurated);
  const deploymentItems = (project.deployment ?? []).filter(isCurated);
  const integrationItems = (project.integrations ?? []).filter(isCurated);

  const hasSecondaryStack =
    deploymentItems.length > 0 || integrationItems.length > 0;

  const mixStyle =
    surfaceMode === "mix"
      ? ({
          "--project-surface-mix": `${surfaceMixPercent}%`,
        } as React.CSSProperties)
      : undefined;

  return (
    <article
      className={`project-card${featured ? " project-card--featured" : ""}`}
      data-surface={surfaceMode === "token" ? surfaceLevel : undefined}
      data-surface-mode={surfaceMode}
      data-ink={surfaceInk}
      style={mixStyle}
    >
      <div className="project-card__topline">
        <p>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {project.eyebrow}
        </p>
        <p>{visibilityLabels[project.visibility]}</p>
      </div>

      <div className="project-card__body">
        <div>
          <h3>
            <Link href={`/work/${project.slug}`}>{project.title}</Link>
          </h3>
          <p className="project-card__summary">{project.summary}</p>
        </div>

        <dl className="project-card__facts">
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
        </dl>
      </div>

      {project.coverImage ? (
        <ContentImage
          asset={project.coverImage}
          className="project-card__media"
          sizes="(max-width: 960px) 100vw, 82rem"
        />
      ) : null}

      <RangeLine active={project.range} compact />

      <div className="project-card__footer">
        <div className="project-card__stack">
          <ul aria-label={`${project.title} core stack`}>
            {coreItems.map((technology) => (
              <li key={technology}>
                <TechnologyBadge name={technology} />
              </li>
            ))}
          </ul>

          {deploymentItems.length > 0 ? (
            <ul
              className="project-card__stack-row project-card__stack-row--secondary"
              aria-label={`${project.title} deployment and services`}
            >
              {deploymentItems.map((item) => (
                <li key={item}>
                  <TechnologyBadge name={item} secondary />
                </li>
              ))}
            </ul>
          ) : null}

          {integrationItems.length > 0 ? (
            <ul
              className="project-card__stack-row project-card__stack-row--secondary"
              aria-label={`${project.title} security and integrations`}
            >
              {integrationItems.map((item) => (
                <li key={item}>
                  <TechnologyBadge name={item} secondary />
                </li>
              ))}
            </ul>
          ) : null}

          {hasSecondaryStack ? (
            <p className="sr-only">
              Managed deployment services and security integrations are listed
              in quieter styling alongside the core application stack.
            </p>
          ) : null}
        </div>

        <div className="project-card__actions">
          {project.liveUrl ? (
            <a
              className="project-card__live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live (opens in a new tab)`}
            >
              <span>Visit live website</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}

          <Link className="text-link" href={`/work/${project.slug}`}>
            Read case study <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
