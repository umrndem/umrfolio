import type {
  Project,
  ProjectVisibility,
  RangePoint,
} from "./types";

export type { Project, RangePoint } from "./types";

export const rangePoints = [
  "systems programming",
  "data",
  "databases",
  "product",
  "people",
] satisfies readonly RangePoint[];

export const allProjects: readonly Project[] = [
  {
    slug: "ets-website",
    title: "ETS Website",
    eyebrow: "Professional work",
    summary:
      "A structured public website and CMS system designed around the people who publish, maintain, and find organizational information.",
    context: "Eastern Testing Services · Internship → apprenticeship",
    period: "June 2026 — Present",
    stage: "Under development · partially deployed",
    display: "featured",
    visibility: "private-case-study",
    range: ["data", "databases", "product", "people"],
    technologies: ["Next.js", "React", "Payload CMS", "PostgreSQL"],
    deployment: ["Railway"],
    integrations: ["Turnstile"],
    homepageTechnologies: [
      "Next.js",
      "React",
      "Payload CMS",
      "PostgreSQL",
      "Railway",
    ],
    infrastructureNote:
      "I run this on Railway with Railway-managed PostgreSQL and private S3-compatible object storage for uploads, with Cloudflare Turnstile protecting public form submissions.",
    proof:
      "I can show repository evidence across content models, public routes, media, forms, admin surfaces, and responsive refinement.",
    limitation:
      "I do not show private source, internal content, confidential records, or unverified business impact. I also do not claim live deployment URLs or production scale.",
    sections: [
      {
        title: "The problem",
        body:
          "I needed to give public information and internal publishing a clearer structure than a collection of disconnected pages. That meant translating stakeholder requirements into a system that could serve visitors and the people maintaining content.",
      },
      {
        title: "The system",
        body:
          "I separated structured CMS collections from public routes and reusable content components. The work covers media and document handling, forms, editorial relationships, and an administration surface.",
      },
      {
        title: "Interaction layer",
        body:
          "I also built scroll-driven choreography into the public experience: one-shot entrance reveals, pinned section sequences, and selective heavier 3D moments where the narrative needs them. I describe that work only at technique level here—no client screens, internal content, or production URLs.",
      },
      {
        title: "My responsibility",
        body:
          "I gathered requirements through relevant stakeholders, shaped the architecture and constraints, directed AI-assisted implementation, tested the working system, reviewed changes, and iterated on weak behavior. I do not claim that I manually wrote every line.",
      },
      {
        title: "What I can show",
        body:
          "I keep this case study deliberately abstract until approved screenshots and diagrams are prepared. I can discuss the project name, technology choices, architecture at a safe level, anonymized workflows, and high-level interaction techniques; I cannot show private source or operational data.",
      },
    ],
  },
  {
    slug: "sentinel",
    title: "Sentinel",
    eyebrow: "Professional work",
    summary:
      "An internal management information system covering HSEQ reporting, employee medical records, and operations job tracking with role-based access, audit trails, and transactional workflows.",
    context: "Eastern Testing Services · Internship → apprenticeship",
    period: "July 2026 — Present",
    stage: "Deployed internally · under active development",
    display: "featured",
    visibility: "private-case-study",
    range: ["data", "databases", "product", "people"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Zod"],
    deployment: ["Railway"],
    integrations: ["Turnstile"],
    homepageTechnologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Zod"],
    infrastructureNote:
      "I run this on Railway with Railway-managed PostgreSQL and private S3-compatible object storage that is served only through an authenticated in-app proxy, with Cloudflare Turnstile protecting sign-in.",
    proof:
      "I can show repository evidence for explicit domain boundaries, edge-gated routes with server-side authorization, database-backed sessions, transactional workflow actions with per-record audit timelines, an administrative activity log, and private media delivery.",
    limitation:
      "I do not claim production scale, quantified impact, automated-test coverage, employee data, or security-sensitive implementation. I also do not publish live deployment URLs.",
    sections: [
      {
        title: "The problem",
        body:
          "I was working with operational reporting, medical-record, and job-planning workflows that need different access boundaries, clear states, and an audit trail. The challenge was not a dashboard; it was preserving rules while keeping the system usable.",
      },
      {
        title: "The system",
        body:
          "I separated feature boundaries for reporting, medical, organization, jobs, and administration concerns. Role-derived authority and transactional mutations keep workflow changes and their audit events together, and system administration is split from HSEQ authority with its own activity log.",
      },
      {
        title: "How it grew",
        body:
          "After the reporting core, I digitized paper job-planning sheets into a jobs module with lifecycle stages, authored progress updates, and a per-job audit timeline; added self-service employee profiles over an imported historical archive; and hardened sessions, sign-in, and outsider-facing surfaces.",
      },
      {
        title: "The tradeoff",
        body:
          "My strongest engineering evidence sits in backend and domain behavior, while the safest public presentation has to stay abstract. On this page I prefer a sanitized flow description over realistic fake company screens.",
      },
      {
        title: "Known gap",
        body:
          "Committed automated tests are still not present in the repository. I leave that gap visible instead of disguising it with a polished case-study surface.",
      },
    ],
  },
  {
    slug: "snakinesis",
    title: "Snakinesis",
    eyebrow: "Computer vision",
    summary:
      "A hands-free Snake game controlled by deliberate head movement through an ordinary webcam.",
    context: "Public project · collaborator credited",
    period: "May 2026",
    stage: "Public release available",
    display: "supporting",
    visibility: "public",
    range: ["data", "product", "people"],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pillow"],
    homepageTechnologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    proof:
      "I can point to calibration, smoothed face-center ratios, neutral re-arm behavior, fallback controls, release tags, and focused tests in the public repository.",
    limitation:
      "I still need confirmation of the exact contribution split with Shifa Zeeshan; I do not claim sole authorship.",
    repositoryUrl: "https://github.com/umrndem/snakinesis",
    sections: [
      {
        title: "The interaction problem",
        body:
          "I found early eye-gaze control too jittery for reliable play. The useful shift for me was treating control as a deliberate gesture system with calibration, thresholds, and a return to neutral before another command.",
      },
      {
        title: "The control loop",
        body:
          "I use OpenCV to capture frames, MediaPipe for face landmarks, and a controller that converts smoothed relative movement into one-shot directions. I keep keyboard input available as an accessible fallback.",
      },
      {
        title: "Evidence",
        body:
          "In the repository I included tests around face-loss prompts, direction selection, gesture gating, timing, and game behavior, plus tagged releases from the initial version through later fixes.",
      },
      {
        title: "Before final copy",
        body:
          "I still need a safe demo video and a confirmed collaborator contribution split. Until then I present the control decision—not merely the retro game surface.",
      },
    ],
  },
  {
    slug: "rideflow",
    title: "RideFlow",
    eyebrow: "Relational systems",
    summary:
      "A multi-role ride-hailing simulation with Express APIs, MySQL business rules, and rider, driver, and admin surfaces.",
    context: "Public project · collaborative academic context",
    period: "May 2026",
    stage: "Public prototype · not currently active",
    display: "supporting",
    visibility: "public",
    range: ["data", "databases", "product", "people"],
    technologies: ["Express", "JavaScript", "MySQL"],
    deployment: ["Railway", "Aiven"],
    homepageTechnologies: ["Express", "JavaScript", "MySQL", "Railway"],
    infrastructureNote:
      "I previously deployed this through Railway with an Aiven-managed MySQL database. The hosted demo is not currently active; the repository still supports initializing a fresh database and bringing up a new instance.",
    proof:
      "I can show Express routes, MySQL schema and database-side logic, and role-oriented frontend surfaces for a ride-hailing simulation in the public repository.",
    limitation:
      "The hosted demo is not currently active. I still need confirmation of the contribution split with collaborators; I do not claim production-scale or commercial impact.",
    repositoryUrl: "https://github.com/umrndem/rideflow",
    sections: [
      {
        title: "The domain",
        body:
          "I modeled riders, drivers, wallets, payments, ratings, complaints, and payouts as a connected relational system rather than a static mock UI.",
      },
      {
        title: "The stack",
        body:
          "I put an Express API in front of MySQL business rules, with vanilla JavaScript pages for role-specific workflows for riders, drivers, and administrators.",
      },
      {
        title: "Deployment practice",
        body:
          "I previously deployed the project through Railway with an Aiven-managed MySQL database. That is useful evidence that I can connect an application to hosted infrastructure; it is not a claim of production operations expertise.",
      },
      {
        title: "Current status",
        body:
          "The hosted demo is not currently active. I can still use the repository as a fresh start: schema, business-logic, and bootstrap SQL—or the bundled database-init script—stand up a clean MySQL database with the admin account and location graph, after which I can run a new local or hosted Express instance against that database.",
      },
    ],
  },
  {
    slug: "datapulse",
    title: "DataPulse",
    eyebrow: "Analytics",
    summary:
      "An end-to-end Streamlit analytics dashboard spanning ingestion, transformation, business KPIs, visualization, export, and a forecasting path.",
    context: "Public project",
    period: "May 2026",
    stage: "Public prototype",
    display: "supporting",
    visibility: "public",
    range: ["data", "databases", "product", "people"],
    technologies: ["Python", "Pandas", "Streamlit", "Plotly", "Prophet"],
    deployment: ["Streamlit Community Cloud", "Supabase"],
    homepageTechnologies: ["Python", "Pandas", "Streamlit", "Plotly", "Prophet"],
    infrastructureNote:
      "I deployed this through Streamlit Community Cloud with Supabase-backed services.",
    proof:
      "I can show public source that separates pages, services, pipeline steps, configuration, and tests, including a direct KPI test.",
    limitation:
      "I have not verified forecast quality, model comparison, data provenance, or role enforcement. Whether the deployed app remains live is still unresolved.",
    repositoryUrl: "https://github.com/umrndem/DataPulse",
    sections: [
      {
        title: "The product shape",
        body:
          "I treat DataPulse as evidence of an analytics workflow more than as an ML claim: configured ingestion, transformation, KPIs, charts, export, targets, and forecasting connected in one application.",
      },
      {
        title: "What I can show",
        body:
          "I have concrete repository support for Pandas-based transformation, configurable column mappings, service boundaries, visual reporting, and a small known-data KPI test.",
      },
      {
        title: "What I do not claim",
        body:
          "I have not verified forecast evaluation, model comparison, a messy external dataset study, or production usage. I therefore call this analytics with forecasting—not AI research.",
      },
      {
        title: "Next proof",
        body:
          "I would strengthen this as a data-science case study with a reproducible public-safe dataset, runtime validation, baseline comparison, and explicit error metrics.",
      },
    ],
  },
  {
    slug: "financial-tick-pipeline",
    title: "Financial Tick Data Pipeline",
    eyebrow: "C++ and operating systems",
    summary:
      "A compact Linux pipeline that coordinates processes, IPC, worker threads, and aggregation to turn tick CSV records into per-symbol summaries.",
    context: "Public technical project",
    period: "May 2026",
    stage: "Completed academic project",
    display: "supporting",
    visibility: "public",
    range: ["systems programming", "data"],
    technologies: ["C++17", "POSIX IPC", "pthreads", "CMake"],
    homepageTechnologies: ["C++17", "POSIX IPC", "pthreads"],
    proof:
      "I implemented fork/exec orchestration, FIFO and shared memory, named semaphores, a bounded queue, worker threads, signal handling, cleanup, and VWAP aggregation.",
    limitation:
      "I have not verified course context, benchmarks, large-data behavior, or automated tests.",
    repositoryUrl: "https://github.com/umrndem/financial-tick-data-pipeline",
    sections: [
      {
        title: "The topology",
        body:
          "I built a dispatcher that prepares IPC resources and launches ingester, processor, and reporter processes. The processor combines a bounded producer-consumer queue with worker threads before publishing shared-memory output.",
      },
      {
        title: "Why it matters",
        body:
          "The project is small, but it gives me concrete evidence that my strongest language is grounded in processes, memory, concurrency primitives, cleanup, and data aggregation—not only syntax exercises.",
      },
      {
        title: "Aggregation",
        body:
          "I summarize records per symbol with volume, count, high, low, and volume-weighted average price. This is systems-oriented data processing, not machine learning.",
      },
      {
        title: "Known limits",
        body:
          "With one observed commit and no documented benchmark, I do not claim production or performance results. The next useful step for me is a reproducible run and an honest throughput experiment.",
      },
    ],
  },
];

export const visibilityLabels: Record<ProjectVisibility, string> = {
  public: "Public project",
  "private-case-study": "Private repository · confidential details omitted",
  confidential: "Confidential / not published",
};

// Hidden and confidential entries remain editable without generating public routes.
export const projects = allProjects.filter(
  (project) =>
    project.display !== "hidden" && project.visibility !== "confidential",
);
