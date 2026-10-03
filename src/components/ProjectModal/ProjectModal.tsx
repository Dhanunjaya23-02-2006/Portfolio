"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft, Code, Brain, Users, Check } from "lucide-react";
import { GithubIcon } from "../UI/Icons";
import { Modal } from "../UI/Modal";
import { Badge } from "../UI/Badge";
import { Button } from "../UI/Button";
import { projects } from "../../data/portfolio";
import { cn } from "../../lib/utils";

interface ProjectModalProps {
  project: typeof projects[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

const categoryIcons = {
  "Full-Stack": Code,
  "AI/ML": Brain,
  "Backend": Code,
  "Frontend": Code,
};

function CategoryIcon({ category, className }: { category: string; className?: string }) {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code;
  return <Icon className={cn("w-4 h-4", className)} aria-hidden="true" />;
}

const primaryButtonStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 dark:focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 shadow-sm";
const outlineButtonStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 dark:focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-accent-600 text-accent-600 hover:bg-accent-50 dark:hover:bg-accent-950 active:bg-accent-100 dark:active:bg-accent-900";
const mdButtonStyles = "px-5 py-2.5 text-base gap-2";

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      size="xl"
      closeOnOverlayClick={true}
      closeOnEscape={true}
    >
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <CategoryIcon category={project.category} className="text-accent-600 dark:text-accent-400" />
          <Badge variant="default">{project.category}</Badge>
        </div>

        <div className="prose prose-dark dark:prose-invert max-w-none">
          <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3">Overview</h4>
          <p className="text-dark-500 dark:text-dark-400 leading-relaxed">{project.description}</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2" role="list">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default" role="listitem">{tech}</Badge>
              ))}
            </div>
          </div>

          {project.metrics.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
                Key Metrics
              </h4>
              <div className="space-y-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-800">
                    <span className="text-sm text-dark-500 dark:text-dark-400">{metric.label}</span>
                    <span className="text-lg font-bold text-accent-600 dark:text-accent-400">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div>
          <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent-600 dark:text-accent-400" aria-hidden="true" />
            Key Contributions
          </h4>
          <ul className="space-y-3" role="list">
            {project.keyContributions.map((contribution, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-800"
              >
                <Check className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-dark-600 dark:text-dark-300">{contribution}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-dark-100 dark:border-dark-800 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(primaryButtonStyles, mdButtonStyles)}
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon className="w-5 h-5" aria-hidden="true" />
              View Source Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(outlineButtonStyles, mdButtonStyles)}
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              Live Demo
            </a>
          )}
          <Button variant="ghost" onClick={onClose} className="ml-auto">
            <ArrowLeft className="w-4 h-4 mr-1" aria-hidden="true" />
            Back to Projects
          </Button>
        </div>
      </div>
    </Modal>
  );
}