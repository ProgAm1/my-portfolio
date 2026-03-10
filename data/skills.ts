export interface Skill {
  name: string;
  level: number; // 0–100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 72 },
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 65 },
    ],
  },
];
