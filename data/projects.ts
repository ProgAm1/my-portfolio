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
    tags: ["Python", "Computer Vision", "Flask", "MediaPipe", "OpenCV"],
    image: "/images/BracketClick-Page.png",
    github: "https://github.com/ProgAm1/Bracketclick",
    demo: "#",
  },
  {
    id: 2,
    title: "kaust-tdp43-chr20-rnaseq-study",
    description:
      `A bioinformatics analysis project focused on differential gene expression
      on chromosome 20, comparing normal and TDP-43 protein samples. Built
      reproducible workflows in Python and R to identify significant biological
      patterns and validate results using established analytical methods.`,
    tags: ["Python", "R", "Bioinformatics", "Differential Gene Expression"],
    image: "/images/kaust-tdp43-chr20-rnaseq-study.png",
    github: "https://github.com/ProgAm1/kaust-tdp43-chr20-rnaseq-study",
    demo: "#",
  },
  {
    id: 3,
    title: "SlideMind",
    description:
      "A Java-based study assistant that uses Claude API to turn raw learning material into structured, review-ready flashcards.",
    tags: ["Java", "Claude API", "REST API"],
    image: "/images/SlideMind.png",
    github: "https://github.com/ProgAm1/Slide-Mind-Project",
    demo: "#",
  },
];
