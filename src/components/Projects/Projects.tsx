"use client";

import { motion } from "framer-motion";
import { ChevronRight, Code, Brain, Server, Layout } from "lucide-react";
import { GithubIcon } from "../UI/Icons";
import { Card } from "../UI/Card";
import { Badge } from "../UI/Badge";
import { Button } from "../UI/Button";
import { SectionHeader } from "../UI/SectionHeader";
import { projects } from "../../data/portfolio";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { useState } from "react";
import { cn } from "../../lib/utils";

const categoryIcons = {
  "Full-Stack": Code,
  "AI/ML": Brain,
  "Backend": Server,
  "Frontend": Layout,
};

function CategoryIcon({ category, className }: { category: string; className?: string }) {
  const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code;
  return <Icon className={cn("w-4 h-4", className)} aria-hidden="true" />;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="Projects"
            subtitle="WORK"
            description="Production-grade applications showcasing full-stack development, AI/ML systems, and scalable architecture."
            align="center"
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="elevated" padding="lg" className="h-full flex flex-col group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <CategoryIcon category={project.category} className="text-accent-600 dark:text-accent-400" />
                      <Badge variant="default" size="sm">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-dark-500 dark:text-dark-400 mb-6 flex-1 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge key={tech} variant="default" size="sm" role="listitem">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge variant="default" size="sm">
                      +{project.technologies.length - 5} more
                    </Badge>
                  )}
                </div>

                {project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-6 pt-4 border-t border-dark-100 dark:border-dark-800">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-accent-600 dark:text-accent-400">
                          {metric.value}
                        </span>
                        <span className="text-sm text-dark-500 dark:text-dark-400">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-4 border-t border-dark-100 dark:border-dark-800">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 p-2 rounded-lg text-dark-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}