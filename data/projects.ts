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
      "Developed a computer vision photo booth that captures images through hand gestures using Python, OpenCV, and MediaPipe.",
    tags: ["Python", "Computer Vision", "Flask", "MediaPipe", "OpenCV"],
    image: "/images/BracketClick-Page.png",
    github: "https://github.com/ProgAm1/Bracketclick",
    demo: "#",
  },
  {
    id: 2,
    title: "kaust-tdp43-chr20-rnaseq-study",
    description:
      `Analyzed RNA-seq data to study the effect of TDP-43 knockout on 
      chromosome 21 gene expression using Python and R, applying a complete 
      workflow from preprocessing to differential expression analysis and biological interpretation.`,
    tags: ["Python", "R", "Bioinformatics", "Differential Gene Expression"],
    image: "/images/kaust-tdp43-chr20-rnaseq-study.png",
    github: "https://github.com/ProgAm1/kaust-tdp43-chr20-rnaseq-study",
    demo: "https://www.researchsquare.com/article/rs-9077001/v1",
  },
  {
    id: 3,
    title: "SlideMind",
    description:
      "Built a Java-based study tool that converts presentation content into flashcards, helping simplify revision workflows and making lecture material easier to review in a more interactive way.",
    tags: ["Java", "Claude API", "REST API"],
    image: "/images/SlideMind.png",
    github: "https://github.com/ProgAm1/Slide-Mind-Project",
    demo: "#",
  },
];
