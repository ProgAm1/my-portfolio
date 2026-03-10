export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BracketClick",
    description:
      "A smart bracket management system for organizing and tracking tournaments with real-time updates, gesture-based controls, and automated bracket progression.",
    tags: ["Python", "Computer Vision", "Flask", "WebSocket"],
    image: "/images/project-1.png",
    github: "https://github.com/ProgAm1",
    demo: "#",
  },
  {
    id: 2,
    title: "Prescription Refill System",
    description:
      "A full-stack web application that streamlines the prescription refill process for patients and pharmacists, with secure authentication and notification support.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    image: "/images/project-2.png",
    github: "https://github.com/ProgAm1",
    demo: "#",
  },
  {
    id: 3,
    title: "Film Reviews Website",
    description:
      "A community-driven platform for discovering and reviewing films, featuring search, filtering, user ratings, and personalized watchlists.",
    tags: ["React", "Node.js", "MongoDB", "REST API"],
    image: "/images/project-3.png",
    github: "https://github.com/ProgAm1",
    demo: "#",
  },
];
