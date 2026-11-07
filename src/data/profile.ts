/* ------------------------------------------------------------------ *
 * Page content for /v2. Carried over from the v1 components so the two
 * stay in step — edit here, not in the sections.
 * ------------------------------------------------------------------ */

export const PROFILE = {
    name: "Iheanacho Omelihunna",
    role: "Full-Stack Engineer",
    email: "omelihunna@gmail.com",
    github: "https://github.com/Omelihunna",
    linkedin: "https://linkedin.com/in/omelihunna-iheanacho-53a8b8248",
    location: "Lagos, Nigeria",
    resume: "/Iheanacho_Omelihunna_Resume.pdf",
    since: 2021,
    blurb:
        "I build backend systems — multi-tenant isolation, job queues, double-entry ledgers — and the interfaces that sit on top of them.",
};

export interface Role {
    period: string;
    periodLabel: string;
    engagement: string;
    title: string;
    org: string;
    body: string;
    tech: string[];
}

export const EXPERIENCE: Role[] = [
    {
        period: "2026 —",
        periodLabel: "February 2026 to Present",
        engagement: "Founder",
        title: "Co-Founder",
        org: "KlasStack",
        body: "Co-founded a multi-tenant school management SaaS and lead its technical direction end to end. Architected the NestJS modular monolith with request-scoped tenant isolation and role-based access control, shipped the Next.js admin and parent portals alongside a React Native companion app, and set up the containerised deployment that runs it.",
        tech: ["NestJS", "Next.js", "MySQL", "Redis / BullMQ", "Multi-Tenancy", "Docker"],
    },
    {
        period: "2025 — 2026",
        periodLabel: "September 2025 to April 2026",
        engagement: "Full-time",
        title: "Full-Stack Engineer",
        org: "Lendsqr",
        body: "Implemented transaction-reversal workflows with idempotency guarantees, preventing duplicate processing in high-volume operations and reducing financial discrepancies by over 90%. Hardened the Monnify integration — refactored webhook processing for idempotency and resolved settlement-reconciliation gaps between gateway records and the internal ledger. Built Paystack virtual-account provisioning and direct-debit mandate flows, optimised internal API integrations for a 25% cut in average response time, and refactored the Savings and Services modules for accurate interest accrual.",
        tech: ["Idempotency", "Reconciliation", "Monnify", "Paystack", "Redis", "Sentry / CloudWatch"],
    },
    {
        period: "2025",
        periodLabel: "June 2025 to September 2025",
        engagement: "Volunteer",
        title: "Software Engineer",
        org: "Rondwell",
        body: "Architected an event-driven onboarding pipeline on RabbitMQ with topic exchanges, durable queues, explicit ack/nack and idempotency checks. Built a multi-profile identity and role system with JWT re-issuance carrying updated claims, for a single account with multiple personas.",
        tech: ["RabbitMQ", "Event-driven", "JWT", "OAuth", "Jest / Mocha"],
    },
    {
        period: "2025",
        periodLabel: "March 2025 to May 2025",
        engagement: "Contract",
        title: "Software Engineer",
        org: "Descriptomizer",
        body: "Cut SQL report-generation time by 43% through query optimisation and index tuning. Automated multi-client site tracking and reporting on AWS with scheduled jobs. Improved data integrity by resolving 90%+ of client data discrepancies.",
        tech: ["SQL", "AWS", "Cron Jobs", "Analytics"],
    },
    {
        period: "2025",
        periodLabel: "January 2025 to May 2025",
        engagement: "Contract",
        title: "Full-Stack Developer",
        org: "Risidio",
        body: "Engineered and deployed custom ERC-721 NFT smart contracts on Hedera using Hardhat and Solidity. Integrated IPFS for decentralised metadata storage and minting, behind a NestJS backend.",
        tech: ["Solidity", "Hardhat", "Hedera", "IPFS", "NestJS"],
    },
    {
        period: "2024 — 2025",
        periodLabel: "August 2024 to August 2025",
        engagement: "Full-time",
        title: "Full-Stack Developer",
        org: "Thiscreet",
        body: "Integrated the Paystack payment gateway for in-app transactions, including webhook handling, payment verification and reconciliation logic. Implemented OAuth 2.0 and JWT authentication across mobile and web clients, and built the backend APIs consumed by React Native clients on Android and iOS.",
        tech: ["Paystack", "OAuth 2.0", "JWT", "React Native", "Expo"],
    },
    {
        period: "2024",
        periodLabel: "May 2024 to August 2024",
        engagement: "Full-time",
        title: "Full-Stack Developer",
        org: "ValueGate Consulting",
        body: "Developed and maintained server-side applications using Node.js and Express.js. Implemented security protocols including JWT authentication, SSL and Helmet.js hardening. Conducted code reviews that improved system architecture and reduced defects.",
        tech: ["Node.js", "Express.js", "JWT", "Helmet.js", "Code review"],
    },
    {
        period: "2024",
        periodLabel: "March 2024 to May 2024",
        engagement: "Contract",
        title: "Frontend Developer",
        org: "TenthDoc",
        body: "Built reusable and scalable React components, improving code modularity and maintainability. Integrated frontend applications with backend services via RESTful APIs and optimised performance through effective state management.",
        tech: ["React.js", "RESTful APIs", "State Management"],
    },
    {
        period: "2021 — 2024",
        periodLabel: "March 2021 to May 2024",
        engagement: "Independent",
        title: "Freelance Full-Stack & Python Developer",
        org: "Independent",
        body: "Built production APIs and backend services in Python (FastAPI, Django REST Framework) for clients across e-commerce, logistics and data domains. Integrated Paystack and Flutterwave payment gateways, handling webhooks, idempotency and reconciliation. Developed automated data pipelines and background job systems, deployed on AWS with CI/CD.",
        tech: ["Python", "FastAPI", "Django REST", "Paystack / Flutterwave", "AWS", "CI/CD"],
    },
];

export interface Site {
    name: string;
    /** Absent when the project is not publicly reachable. */
    href?: string;
    sector: string;
    body: string;
    shot?: string;
}

export const INTERFACE_WORK: Site[] = [
    {
        name: "Islas Secas",
        href: "https://islassecas.com",
        sector: "Hospitality",
        body: "A luxury eco-resort on a private island in Panama. Heavy photography on a page that still had to feel immediate — the work was performance and restraint, not decoration.",
    },
    {
        name: "Vispring",
        href: "https://vispring.com",
        sector: "Manufacturing",
        body: "A luxury bedmaker's catalogue and brand story. Built to carry a premium product range without the page reading as a product grid.",
    },
    {
        name: "Dorascribe",
        href: "https://dorascribe.ai",
        sector: "Clinical AI",
        body: "An AI medical scribe. It records the consult, transcribes it and generates the structured note — SOAP, referral letters, prescriptions — so the clinician keeps their attention on the patient. The interface problem is staying out of the way during a live consultation.",
    },
];

export const STACK: { group: string; items: string[] }[] = [
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Solidity", "SQL"] },
    { group: "Backend", items: ["NestJS", "Node.js", "Express.js", "REST", "Event-driven"] },
    { group: "Frontend", items: ["React", "Next.js", "React Native", "Expo", "Tailwind"] },
    { group: "Data", items: ["Postgres", "MySQL", "MongoDB", "Redis / BullMQ", "RabbitMQ"] },
    { group: "Infrastructure", items: ["AWS (EC2, S3)", "Docker", "CI / CD", "Sentry", "CloudWatch"] },
    { group: "Practice", items: ["TDD", "Jest", "Mocha", "OAuth 2.0 / JWT", "WebAuthn", "Code review"] },
];

export const EDUCATION = {
    degree: "B.Sc. Electrical & Electronics Engineering",
    school: "Federal University of Technology, Owerri",
    year: "2024",
    certs: [
        "AWS Cloud Technical Essentials — Coursera",
        "Migrating to the AWS Cloud — Coursera",
        "Web Development Bootcamp — Udemy",
        "100 Days of Code: Python Pro Bootcamp — Udemy",
        "Git and GitHub Bootcamp — Udemy",
        "Networking Basics — Cisco Networking Academy",
        "MATLAB, SIMULINK & SIMSCAPE Onramp — MathWorks",
    ],
};
