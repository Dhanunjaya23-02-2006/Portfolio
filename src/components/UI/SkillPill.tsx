import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

type SkillCategory = "programming" | "frontend" | "backend" | "databases" | "aiMl" | "dataAnalytics" | "tools";

export interface SkillPillProps extends HTMLAttributes<HTMLSpanElement> {
  category?: SkillCategory;
}

const categoryColors: Record<SkillCategory, string> = {
  programming: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  frontend: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800",
  backend: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  databases: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 dark:border-orange-800",
  aiMl: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-800",
  dataAnalytics: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400 border-pink-200 dark:border-pink-800",
  tools: "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
};

export const SkillPill = forwardRef<HTMLSpanElement, SkillPillProps>(
  ({ className, category = "programming", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 hover:shadow-md",
          categoryColors[category],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

SkillPill.displayName = "SkillPill";