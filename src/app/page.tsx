import { ProfilePortrait } from "@/components/ProfilePortrait";
import { ProjectCard } from "@/components/ProjectCard";
import { RangeLine } from "@/components/RangeLine";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";
import { TypingHeadline } from "@/components/TypingHeadline";
import { homeContent } from "@/content/home";
import { sectionIds } from "@/content/navigation";
import { profile, socialLinks } from "@/content/profile";
import { getProjectSurfaceAssignment } from "@/content/project-surfaces";
import { projects } from "@/content/projects";
import {
  getSiteUrl,
  siteSettings,
} from "@/content/site-settings";
import { buildPersonStructuredData } from "@/lib/structured-data";

export default function Home() {
  const structuredData = buildPersonStructuredData({
    profile,
    socialLinks,
    siteUrl: getSiteUrl(),
    description: siteSettings.description,
  });

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData value={structuredData} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="kicker">{homeContent.hero.kicker}</p>
          <TypingHeadline id="hero-title" text={homeContent.hero.title} />
          <p className="hero__intro">
            I’m {profile.shortName}, {homeContent.hero.introduction}
          </p>
          <div className="hero__actions">
            <a className="button-link" href={`#${sectionIds.work}`}>
              {homeContent.hero.primaryAction} <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href={`mailto:${profile.email}`}>
              {profile.email} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <ProfilePortrait
          asset={profile.portrait}
          name={profile.name}
          location={profile.location}
          placeholder={homeContent.hero.portraitPlaceholder}
        />
      </section>

      <section className="current-section" aria-label={homeContent.hero.currentLabel}>
        <div className="current-section__inner">
          <p>{homeContent.hero.currentLabel}</p>
          <p>{homeContent.hero.current}</p>
        </div>
      </section>

      <section className="range-section" aria-labelledby="range-title">
        <Reveal className="range-section__intro">
          <div>
            <p className="kicker">{homeContent.range.kicker}</p>
            <h2 id="range-title">{homeContent.range.title}</h2>
          </div>
        </Reveal>
        <Reveal className="range-section__copy" delayMs={80}>
          <p>{homeContent.range.description}</p>
        </Reveal>
        <RangeLine />
      </section>

      <section
        className="work-section"
        id={sectionIds.work}
        aria-labelledby="work-title"
      >
        <Reveal>
          <SectionHeading
            index={homeContent.work.index}
            title={homeContent.work.title}
            note={homeContent.work.note}
          />
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => {
            const surface = getProjectSurfaceAssignment(index, projects.length);

            return (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
                featured={project.display === "featured"}
                surfaceLevel={surface.level}
                surfaceInk={surface.ink}
                surfaceMode={surface.mode}
                surfaceMixPercent={surface.mixPercent}
              />
            );
          })}
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <Reveal>
          <SectionHeading
            index={homeContent.experience.heading.index}
            title={homeContent.experience.heading.title}
            note={homeContent.experience.heading.note}
          />
        </Reveal>
        {homeContent.experience.entries.map((entry) => (
          <article className="experience-entry" key={entry.role}>
            <div className="experience-entry__when">
              <p>{entry.period}</p>
              <p>{entry.duration}</p>
            </div>
            <div className="experience-entry__role">
              <p>{entry.organization}</p>
              <h3>{entry.role}</h3>
              <p>{entry.summary}</p>
            </div>
            <ul>
              {entry.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section
        className="approach-section"
        id={sectionIds.approach}
        aria-labelledby="approach-title"
      >
        <Reveal>
          <SectionHeading
            index={homeContent.approach.heading.index}
            title={homeContent.approach.heading.title}
            note={homeContent.approach.heading.note}
          />
        </Reveal>
        <div className="approach-grid">
          {homeContent.approach.steps.map((step, index) => (
            <Reveal as="article" delayMs={index * 70} key={step.key}>
              <p className="approach-grid__number">{step.key}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Reveal>
          ))}
          <Reveal
            as="article"
            className="approach-grid__statement"
            delayMs={homeContent.approach.steps.length * 70}
          >
            <p className="kicker">{homeContent.approach.boundaryLabel}</p>
            <blockquote>{homeContent.approach.boundary}</blockquote>
          </Reveal>
        </div>
      </section>

      <section
        className="about-section"
        id={sectionIds.about}
        aria-labelledby="about-title"
      >
        <Reveal>
          <SectionHeading
            index={homeContent.about.heading.index}
            title={homeContent.about.heading.title}
            note={homeContent.about.heading.note}
          />
        </Reveal>
        <div className="about-grid">
          <div className="about-grid__lead">
            {homeContent.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <dl>
            <div>
              <dt>Education</dt>
              <dd>{profile.degree}</dd>
            </div>
            <div>
              <dt>Graduation</dt>
              <dd>{profile.graduation}</dd>
            </div>
            <div>
              <dt>CGPA</dt>
              <dd>{profile.cgpa}</dd>
            </div>
            <div>
              <dt>Strong coursework</dt>
              <dd>{homeContent.about.strongCoursework}</dd>
            </div>
          </dl>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
