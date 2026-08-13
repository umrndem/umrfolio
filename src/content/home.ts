export const homeContent = {
  hero: {
    kicker: "Islamabad · Data Science · Software systems",
    title: "I turn complexity into clarity.",
    introduction:
      "a Data Science student with a strong C++ foundation. I work across data, databases, and product software.",
    primaryAction: "See selected work",
    currentLabel: "Currently",
    current:
      "Software Development Apprentice at Eastern Testing Services, expanding and maintaining Sentinel and the ETS Website.",
    portraitPlaceholder: {
      title: "Portrait in review",
      note: "Approved photograph needed before launch.",
    },
  },
  range: {
    kicker: "Technical range",
    title: "My work moves between systems, data, and the people using them.",
    description:
      "My projects range from C++ systems and relational databases to analytics, computer vision, and end-to-end web applications.",
  },
  work: {
    index: "01",
    title: "Selected work",
    note: "A selection of projects that show how I approach different kinds of technical problems.",
  },
  experience: {
    heading: {
      index: "02",
      title: "Experience",
      note: "Roles, internships, and the work I took ownership of along the way.",
    },
    entries: [
      {
        period: "Aug 2026 — Present",
        duration: "Ongoing",
        organization: "Eastern Testing Services",
        role: "Software Development Apprentice",
        summary:
          "Continuing the work I began during my internship by expanding and maintaining Sentinel and the ETS Website.",
        responsibilities: [
          "Extend and refine internal and public-facing software systems.",
          "Maintain existing workflows, content structures, permissions, and interfaces.",
          "Work with stakeholders as requirements and operational needs evolve.",
          "Review, test, document, and refine AI-assisted implementation.",
        ],
      },
      {
        period: "Jun — Aug 2026",
        duration: "Eight weeks",
        organization: "Eastern Testing Services",
        role: "IT Intern",
        summary:
          "Worked with management and operational stakeholders to gather requirements and build internal and public-facing software systems.",
        responsibilities: [
          "Translated stakeholder needs into software workflows.",
          "Structured content, data models, permissions, and interfaces.",
          "Replaced fragmented manual work with more centralized systems.",
          "Reviewed, tested, documented, and refined AI-assisted implementation.",
        ],
      },
    ],
  },
  approach: {
    heading: {
      index: "03",
      title: "How I build",
      note: undefined,
    },
    steps: [
      {
        key: "A",
        title: "Frame the real problem",
        body:
          "I write the ambiguity down, ask questions, identify constraints, and begin implementation early enough to learn from the real system.",
      },
      {
        key: "B",
        title: "Structure the system",
        body:
          "I look into unfamiliar tools, talk through architecture and tradeoffs, and break the work into clear pieces another person or agent can understand.",
      },
      {
        key: "C",
        title: "Direct and verify",
        body:
          "I coordinate implementation, inspect the result, run the checks, and iterate until the behavior is reliable.",
      },
    ],
    boundaryLabel: "AI-assisted development",
    boundary:
      "I use AI throughout development for research, implementation, debugging, and review. My responsibility is to define the problem, make the architectural decisions, test the result, and understand what ships.",
  },
  about: {
    heading: {
      index: "04",
      title: "Background",
      note: "My strongest foundations are in mathematics, C++, systems, and relational data. I\u2019m now building deeper practical experience in machine learning.",
    },
    paragraphs: [
      "Mathematics and computing brought me to Data Science. The work I have now is broader: C++ and operating systems, relational data, applied computer vision, analytics, and end-to-end web applications.",
      "I’m looking for environments with meaningful technical exposure where I can become much stronger in software, data systems, machine learning, and AI.",
    ],
    strongCoursework:
      "Data Structures, Operating Systems, Probability & Statistics, Calculus, Linear Algebra",
  },
  footer: {
    kicker: "Contact / 05",
    headline: ["Have a problem you think", "I could help solve?"],
    action: "Write to me",
    availability:
      "I’m open to technical opportunities where I can solve real problems, learn quickly, and contribute useful work.",
    form: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "What are you working on, and how might I help?",
      submitLabel: "Send message",
      submittingLabel: "Sending…",
      successTitle: "Message sent",
      successBody:
        "Thanks — your message is on its way and a copy has been sent to your inbox. I’ll get back to you soon.",
      errorTitle: "Could not send",
      errorBody:
        "Something went wrong on the form endpoint. You can still reach me directly by email.",
      directEmailLabel: "Or email directly",
      honeypotLabel: "Company",
    },
  },
} as const;
