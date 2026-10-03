"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, BrainCircuit, Wrench, BarChart } from "lucide-react";
import { SkillPill, type SkillPillProps } from "../UI/SkillPill";
import { SectionHeader } from "../UI/SectionHeader";
import { skills } from "../../data/portfolio";
import { cn } from "../../lib/utils";

const skillCategories = [
  {
    key: "programming",
    label: "Programming",
    icon: Code,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    items: skills.programming,
  },
  {
    key: "frontend",
    label: "Frontend",
    icon: Layout,
    color: "text-cyan-500",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    items: skills.frontend,
  },
  {
    key: "backend",
    label: "Backend",
    icon: Server,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    items: skills.backend,
  },
  {
    key: "databases",
    label: "Databases",
    icon: Database,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    items: skills.databases,
  },
  {
    key: "aiMl",
    label: "AI / ML",
    icon: BrainCircuit,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
    items: skills.aiMl,
  },
  {
    key: "dataAnalytics",
    label: "Data Analytics",
    icon: BarChart,
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-900/30",
    items: skills.dataAnalytics,
  },
  {
    key: "tools",
    label: "Tools",
    icon: Wrench,
    color: "text-gray-500",
    bg: "bg-gray-100 dark:bg-gray-700",
    items: skills.tools,
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="skills-heading"
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
            title="Technical Skills"
            subtitle="TECH STACK"
            description="Languages, frameworks, and tools I use to build production-grade software systems."
            align="center"
          />
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={cn("p-3 rounded-xl", category.bg)}>
                  <category.icon className={cn("w-6 h-6", category.color)} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-dark-900 dark:text-white">
                  {category.label}
                </h3>
                <span className="text-sm text-dark-500 dark:text-dark-400">
                  {category.items.length} technologies
                </span>
              </div>
              <div
                className="flex flex-wrap gap-2.5"
                role="list"
                aria-label={`${category.label} skills`}
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.03 }}
                  >
                    <SkillPill category={category.key as SkillPillProps["category"]}>
                      {skill}
                    </SkillPill>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-accent-500/10 to-purple-500/10 border border-accent-200 dark:border-accent-800 text-center"
        >
          <p className="text-dark-600 dark:text-dark-400 mb-2">
            Always expanding the toolkit
          </p>
          <p className="text-dark-900 dark:text-white font-medium">
            Currently diving deeper into: Transformer architectures • LLM evaluation • Distributed systems • Kubernetes
          </p>
        </motion.div>
      </div>
    </section>
  );
}