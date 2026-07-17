export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problemStatement: string;
  implementationDetails: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
  media: {
    type: 'image' | 'video';
    url: string;
  }[];
  isHackathon?: boolean;
}

export const projects: Project[] = [
  {
    id: "l2-architect",
    title: "L2_ARCHITECT: Scaling Ethereum",
    shortDescription: "An educational Web3 platform explaining blockchain mechanics and L2 scaling (Arbitrum). Features interactive diagnostic quizzes, real-time CoinGecko crypto data visualizers using Recharts, and a modular PoW cryptographic simulator.",
    problemStatement: "Blockchain scaling concepts are notoriously difficult for beginners to grasp, and deploying testing networks involves transaction overhead and slow iterations, creating a high barrier of entry for interactive learning.",
    implementationDetails: "Designed and implemented an interactive educational environment focusing on Layer-2 scaling concepts. Developed a proof-of-work (PoW) simulator with debounced client-side SHA-256 cryptographic hashing to visualize block construction. Integrated live crypto feeds using Recharts and designed dynamic quizzes to evaluate core blockchain understanding.",
    techStack: ["Next.js 16", "React 19", "Web3 / Blockchain", "APIs"],
    links: {
      github: "https://github.com/kunj2006-msu/l2-architect",
      live: "https://l2-architect.vercel.app/"
    },
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252119/026739e8-14db-466c-a4f0-d9f0cdf43d12.png' }
    ],
    isHackathon: true
  },
  {
    id: "dhanvantari",
    title: "Dhanvantari",
    shortDescription: "Bilingual AI healthcare platform with Patient Portal & Doctor Dashboard powered by a containerized RAG pipeline.",
    problemStatement: "Individuals in rural and bilingual communities struggle to access immediate, accurate healthcare advice and local home remedies in their native language, often misunderstanding complex clinical terms.",
    implementationDetails: "Engineered a containerized RAG pipeline to power a bilingual healthcare system. Designed a functional AI chatbot assistant using semantic vector matching via pgvector over Spring Boot to answer medical queries. Integrated a smart remedy feature that maps common symptoms to verified localized, traditional solutions, accessible through independent Patient and Doctor dashboards.",
    techStack: ["Spring Boot", "pgvector", "RAG", "Docker"],
    links: {
      github: "https://github.com/kunj2006-msu/Dhanvantari2.0"
    },
    media: [
      { type: 'video', url: 'https://res.cloudinary.com/dssflxwaq/video/upload/v1784252884/Screen_Recording_2026-07-17_070815_itga2j.mp4' }
    ]
  },
  {
    id: "transitops",
    title: "TransitOps: Fleet Operations",
    shortDescription: "A centralized, end-to-end logistics and fleet management platform featuring custom role-based dashboards, active dispatch tracking via a server-side simulation engine, and database integrity validation over Supabase PostgreSQL.",
    problemStatement: "Logistics coordinators face extreme delays when active dispatch runs are siloed, lacking a centralized dashboard that tracks drivers, ensures prompt deliveries, and maintains system-wide data integrity.",
    implementationDetails: "Built a fleet logistics controller featuring customized role access (Dispatcher, Admin, Driver). Programmed a server-side simulator mimicking ongoing dispatches and transit runs. Deployed strict PostgreSQL transactions on Supabase to ensure data safety, keeping log tables synchronized across active routes.",
    techStack: ["React (TS)", "Express", "PostgreSQL", "Supabase"],
    links: {
      github: "https://github.com/Taksh-06/odoo-hackathon"
    },
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252191/1fbe497c-fa66-4709-959c-f5a128246efb.png' }
    ],
    isHackathon: true
  },
  {
    id: "pavitr-pravah",
    title: "Pavitr-Pravah",
    shortDescription: "AI-driven temple crowd management platform using real-time analytics and forecasting.",
    problemStatement: "During high-traffic religious festivals, overcrowding inside narrow corridors pose safety risks. Managing crowd flows reactively leads to congestion, delays, and emergency responses.",
    implementationDetails: "Created a real-time crowd safety management system. Connected mock video feeds to OpenCV scripts to detect heads, estimate crowd density, and forecast incoming traffic using TensorFlow regression models. Integrated alerts and action workflows within a neat administrative monitoring interface.",
    techStack: ["React", "OpenCV", "TensorFlow", "Analytics"],
    links: {
      github: "https://github.com/kunj2006-msu/Pavitr-Pravah",
      live: "https://pavitr-pravah.netlify.app/"
    },
    media: [
      { type: 'image', url: 'https://res.cloudinary.com/dssflxwaq/image/upload/v1784252664/4003dff9-76df-4e5d-9a17-464279e88c9b.png' }
    ]
  }
];
