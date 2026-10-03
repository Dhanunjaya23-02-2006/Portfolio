import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";
import { ExternalLink, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./Icons";

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "minimal" | "icon-only";
  label?: string;
  icon?: "github" | "linkedin" | "email" | "external";
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Mail,
  external: ExternalLink,
};

export const SocialLink = forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({ className, variant = "default", label, icon, children, ...props }, ref) => {
    const IconComponent = icon ? iconMap[icon] : ExternalLink;

    const variants = {
      default: "inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-900 text-dark-700 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800 transition-all duration-200",
      minimal: "inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors",
      "icon-only": "p-2 rounded-lg text-dark-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",
    };

    return (
      <a
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {variant !== "icon-only" && <IconComponent className="w-5 h-5" aria-hidden="true" />}
        {variant === "icon-only" && <IconComponent className="w-5 h-5" aria-hidden="true" />}
        {(label || children) && <span>{label || children}</span>}
      </a>
    );
  }
);

SocialLink.displayName = "SocialLink";