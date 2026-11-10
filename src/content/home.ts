export const homeContent = {
  hero: {
    kicker: "Islamabad · Data Science · Software systems",
    title: "I build software and data systems.",
    introduction:
      "a Data Science student with a strong C++ foundation. I work across data, databases, and product software.",
    primaryAction: "See selected work",
    currentLabel: "Currently",
    current:
      "A full-time Data Science student, Software Development Apprentice at Eastern Testing Services, and volunteer Research Assistant at Data Insight Lab.",
    portraitPlaceholder: {
      title: "Umar",
      note: "Software & data systems",
    },
  },
  range: {
    kicker: "Technical range",
    title: "From C++ systems to web applications.",
    description:
      "My projects range from C++ systems and relational databases to analytics, computer vision, and end-to-end web applications.",
  },
  work: {
    index: "01",
    title: "Selected work",
    note: "Websites, internal tools, and software projects.",
  },
  experience: {
    heading: {
      index: "02",
      title: "Experience",
      note: "My work and research experience.",
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
        period: "Sep 2026 — Present",
        duration: "Ongoing · Volunteer",
        organization: "Data Insight Lab · FAST-NUCES Islamabad",
        role: "Research Assistant",
        summary:
          "Working with the lab as a volunteer to develop a stronger grounding in AI & DS theory and research.",
        responsibilities: [
          "Learn and contribute within an academic AI & DS research environment.",
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
        title: "Understand the problem",
        body:
          "I ask questions, write down constraints, and build an early version to test my understanding.",
      },
      {
        key: "B",
        title: "Structure the system",
        body:
          "I research unfamiliar tools, compare approaches, and break the work into smaller parts.",
      },
      {
        key: "C",
        title: "Build and test",
        body:
          "I review the implementation, test it, and revise what does not work.",
      },
    ],
    boundaryLabel: "AI-assisted development",
    boundary:
      "I use AI for research, coding, debugging, and review. I make the design decisions and test the work before it ships.",
  },
  about: {
    heading: {
      index: "04",
      title: "Background",
      note: "My strongest foundations are in mathematics, C++, systems, and relational data. I\u2019m now building deeper practical experience in machine learning.",
    },
    paragraphs: [
      "Mathematics and computing brought me to Data Science. The work I have now is broader: C++ and operating systems, relational data, applied computer vision, analytics, and end-to-end web applications.",
      "I want to keep learning through hands-on work in software, data systems, and machine learning.",
    ],
    strongCoursework:
      "Data Structures, Operating Systems, Probability & Statistics, Calculus, Linear Algebra",
  },
  footer: {
    kicker: "Contact / 05",
    headline: ["Have a problem you think", "I could help solve?"],
    action: "Write to me",
    availability:
      "I’m open to software and data opportunities.",
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
        "Your message could not be sent. Please try again or email me directly.",
      directEmailLabel: "Or email directly",
      honeypotLabel: "Company",
    },
  },
} as const;
