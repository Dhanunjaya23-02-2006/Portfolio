import { ReactNode, CSSProperties } from "react";
import { cn } from "../../lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  description,
  subtitle,
  children,
  className,
  align = "left",
}: SectionHeaderProps) {
  const descriptionStyle: CSSProperties = {
    marginLeft: align === "center" ? "auto" : 0,
    marginRight: align === "center" ? "auto" : 0,
  };

  return (
    <header className={cn("mb-12", align === "center" ? "text-center" : "text-left", className)}>
      {subtitle && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-950 rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-dark-500 dark:text-dark-400 max-w-2xl mx-auto" style={descriptionStyle}>
          {description}
        </p>
      )}
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}