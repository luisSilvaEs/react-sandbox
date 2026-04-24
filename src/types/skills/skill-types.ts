import type { ReactNode } from "react";

export type LayoutProps = {
    title: string;
    children: ReactNode;
}

export type SkillLevel = "beginner" | "intermediate" | "advanced";
export type SkillCategory = "frontend" | "backend" | "tools";

export type Skill = {
  id: string;
  skillName: string;
  level: SkillLevel;
  category: SkillCategory;
};