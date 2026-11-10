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
    stage: "Live public website · under development",
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
      "I built the public website and publishing tools, including content models, media uploads, forms, and responsive layouts.",
    limitation:
      "I do not show private source, internal content, confidential records, unverified business impact, or production scale.",
    liveUrl: "https://eastern-testing.com",
    sections: [
      {
        title: "Publishing and discovery",
        body:
          "I translated stakeholder requirements into a website for visitors and a CMS for the people maintaining its content.",
      },
      {
        title: "Content and administration",
        body:
          "I separated CMS collections from public routes and reusable components. The system handles media, documents, forms, and editorial relationships.",
      },
      {
        title: "Interaction",
        body:
          "I added entrance animations, pinned scroll sequences, and selected 3D elements to the public pages.",
      },
      {
        title: "My role",
        body:
          "I gathered requirements, planned the architecture, directed AI-assisted implementation, tested the system, and reviewed changes. I continue to expand and maintain the website.",
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
      "I built workflows with role-based access, database-backed sessions, audit trails, and private attachments.",
    limitation:
      "I do not claim production scale, quantified impact, automated-test coverage, employee data, or security-sensitive implementation. I also do not publish live deployment URLs.",
    sections: [
      {
        title: "Operational workflows",
        body:
          "I worked on reporting, medical-record, and job-planning workflows, each with its own access rules, states, and audit history.",
      },
      {
        title: "Access and records",
        body:
          "I separated reporting, medical, organization, jobs, and administration features. Workflow changes and their audit events are saved together, with role-based access controlling who can act on each record.",
      },
      {
        title: "Ongoing development",
        body:
          "I expanded the reporting core with job planning, progress updates, employee profiles, and an administrative activity log.",
      },
    ],
  },
  {
    slug: "dua-ac",
    title: "Dua Education",
    eyebrow: "Education · Multilingual web",
    summary:
      "A multilingual education website connecting course discovery, registration, and a bookstore for children, parents, and families.",
    context: "Dua Education · Public website",
    period: "October — November 2026",
    stage: "Live public website",
    display: "supporting",
    visibility: "private-case-study",
    range: ["product", "people"],
    technologies: ["Next.js", "React", "TypeScript"],
    proof:
      "I developed course pages, registration forms, and a bookstore with English, Urdu, and Arabic interfaces.",
    limitation:
      "I keep source code and private records out of this case study. I do not claim sole authorship, enrollment or sales figures, or measured educational outcomes.",
    liveUrl: "https://dua.ac.pk",
    sections: [
      {
        title: "Learning and discovery",
        body:
          "I developed a website for Dua Education that brings its educational approach, course information, and registration into one place for children, parents, and families.",
      },
      {
        title: "Across languages",
        body:
          "I built English, Urdu, and Arabic interfaces with shared translations, a language switcher, and right-to-left layouts. Structured course content feeds both the listing and detail pages.",
      },
      {
        title: "From courses to books",
        body:
          "I connected course discovery with registration forms and a bookstore for browsing books, adding them to a cart, and checking out.",
      },
    ],
  },
  {
    slug: "snakinesis",
    title: "Snakinesis",
    eyebrow: "Computer vision",
    summary:
      "A hands-free Snake game controlled by deliberate head movement through an ordinary webcam.",
    context: "With Shifa Zeeshan",
    period: "May 2026",
    stage: "Public release available",
    display: "supporting",
    visibility: "public",
    range: ["data", "product", "people"],
    technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Pillow"],
    homepageTechnologies: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    proof:
      "The game combines calibration, smoothed head tracking, gesture controls, and keyboard input. Releases and tests are available in the repository.",
    limitation:
      "I still need confirmation of the exact contribution split with Shifa Zeeshan; I do not claim sole authorship.",
    repositoryUrl: "https://github.com/umrndem/snakinesis",
    sections: [
      {
        title: "Gesture control",
        body:
          "Early eye-gaze control was too jittery for reliable play. We switched to deliberate head movements, with calibration, thresholds, and a return to neutral before each new command.",
      },
      {
        title: "The control loop",
        body:
          "OpenCV captures frames, MediaPipe provides face landmarks, and the controller turns smoothed movement into one-shot directions. Keyboard controls provide a fallback.",
      },
      {
        title: "Testing and releases",
        body:
          "The repository includes tests for face loss, direction selection, gesture gating, timing, and game behavior, alongside tagged releases.",
      },
    ],
  },
  {
    slug: "rideflow",
    title: "RideFlow",
    eyebrow: "Relational systems",
    summary:
      "A multi-role ride-hailing simulation with Express APIs, MySQL business rules, and rider, driver, and admin surfaces.",
    context: "With Muhammad Rafay Mir Khattak",
    period: "May 2026",
    stage: "Public prototype · not currently active",
    display: "supporting",
    visibility: "public",
    range: ["data", "databases", "product", "people"],
    technologies: ["Express", "JavaScript", "MySQL"],
    deployment: ["Railway", "Aiven"],
    homepageTechnologies: ["Express", "JavaScript", "MySQL", "Railway"],
    infrastructureNote:
      "Previously hosted on Railway with Aiven-managed MySQL. The demo is currently offline; local setup is available in the repository.",
    proof:
      "The simulation connects Express routes and MySQL business rules with separate interfaces for riders, drivers, and administrators.",
    limitation:
      "The hosted demo is not currently active. The exact contribution split with Muhammad Rafay Mir Khattak remains unresolved; I do not claim production-scale or commercial impact.",
    repositoryUrl: "https://github.com/umrndem/rideflow",
    sections: [
      {
        title: "The domain",
        body:
          "The database connects riders, drivers, wallets, payments, ratings, complaints, and payouts.",
      },
      {
        title: "The stack",
        body:
          "An Express API sits in front of MySQL business rules, with JavaScript pages for riders, drivers, and administrators.",
      },
      {
        title: "Deployment",
        body:
          "I previously deployed the project on Railway with Aiven-managed MySQL. The hosted demo is currently offline.",
      },
      {
        title: "Running it locally",
        body:
          "The repository includes schema, business-logic, and bootstrap SQL. The database-init script prepares a fresh MySQL database with an admin account and location graph for a new Express instance.",
      },
    ],
  },
  {
    slug: "datapulse",
    title: "DataPulse",
    eyebrow: "Analytics",
    summary:
      "A Streamlit dashboard for data preparation, KPIs, visualization, exports, and forecasting.",
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
      "I organized the dashboard into pages, services, and pipeline steps, with configurable column mappings and tests for KPI calculations.",
    limitation:
      "I have not verified forecast quality, model comparison, data provenance, or role enforcement. Whether the deployed app remains live is still unresolved.",
    repositoryUrl: "https://github.com/umrndem/DataPulse",
    sections: [
      {
        title: "The workflow",
        body:
          "I connected data ingestion, transformation, KPIs, charts, exports, targets, and forecasting in a Streamlit dashboard.",
      },
      {
        title: "Data preparation",
        body:
          "I used Pandas for transformation and configurable column mappings to handle the input data. Pages, services, and pipeline steps are kept separate.",
      },
      {
        title: "Testing and forecasting",
        body:
          "The repository includes a known-data KPI test. Forecast accuracy still needs evaluation against a baseline and a reproducible dataset.",
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
    stage: "Completed project",
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
        title: "Processes and threads",
        body:
          "I built a dispatcher that prepares IPC resources and launches ingester, processor, and reporter processes. The processor uses a bounded producer-consumer queue and worker threads before publishing shared-memory output.",
      },
      {
        title: "Coordination",
        body:
          "I used FIFOs, shared memory, and named semaphores to coordinate the processes, with signal handling and cleanup for shutdown.",
      },
      {
        title: "Aggregation",
        body:
          "I summarize tick records by symbol, calculating volume, count, high, low, and volume-weighted average price.",
      },
    ],
  },
];

export const visibilityLabels: Record<ProjectVisibility, string> = {
  public: "Public project",
  "private-case-study": "Private repository",
  confidential: "Confidential / not published",
};

// Hidden and confidential entries remain editable without generating public routes.
export const projects = allProjects.filter(
  (project) =>
    project.display !== "hidden" && project.visibility !== "confidential",
);
