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
      { name: "C/C++", level: 90 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 80 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 60 },
      // { name: "TypeScript", level: 45 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML / CSS", level: 95 },
      { name: "React", level: 20 },
      { name: "Next.js", level: 15 },
      { name: "Tailwind CSS", level: 15 },
    ],
  },
  {
    category: "Backend & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Node.js", level: 70 },
      // { name: "PostgreSQL", level: 75 },
      // { name: "MongoDB", level: 72 },
      // { name: "Docker", level: 65 },
    ],
  },
];
