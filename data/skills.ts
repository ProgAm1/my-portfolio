export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C/C++" },
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "R" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML / CSS" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js" },
      { name: "Git / GitHub" },
    ],
  },
];
