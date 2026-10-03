"use client";

import { motion } from "framer-motion";
import { Code, Server, Brain, Database, Check } from "lucide-react";
import { Card } from "../UI/Card";
import { SectionHeader } from "../UI/SectionHeader";
import { personalInfo } from "../../data/portfolio";
import { cn } from "../../lib/utils";

const profileItems = [
  { number: "01", title: "Frontend", description: "React, HTML, CSS, JavaScript", icon: Code, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { number: "02", title: "Backend", description: "Node.js, Express, Django, Flask", icon: Server, color: "text-purple-500", bg: "bg-purple-100 dark:bg-purple-900/30" },
  { number: "03", title: "AI / ML", description: "NLP, Transformers, ML, Deep Learning", icon: Brain, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
  { number: "04", title: "Data & APIs", description: "MongoDB, PostgreSQL, REST APIs", icon: Database, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
];

const highlights = [
  "Building production-ready full-stack applications",
  "Designing RESTful APIs with scalable architecture",
  "Developing NLP pipelines and LLM-based systems",
  "Optimizing database queries and application performance",
  "Implementing CI/CD pipelines and cloud deployment",
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="about-heading"
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
            title="About Me"
            subtitle="PROFILE"
            description="Computer Science undergraduate focused on AI/ML and full-stack systems. Building intelligent software with clean architecture."
            align="left"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-dark dark:prose-invert max-w-none">
              <p className="text-lg text-dark-500 dark:text-dark-400 mb-6 leading-relaxed">
                I'm <strong className="text-dark-900 dark:text-white">{personalInfo.name}</strong>, a Computer Science undergraduate at Malla Reddy University
                specializing in Artificial Intelligence & Machine Learning. My journey in software
                engineering began with a curiosity for how systems work at scale.
              </p>
              <p className="text-lg text-dark-500 dark:text-dark-400 mb-6 leading-relaxed">
                I focus on building <strong className="text-dark-900 dark:text-white">AI-driven applications</strong> and
                <strong className="text-dark-900 dark:text-white">full-stack systems</strong> that solve real problems.
                My work spans from designing REST APIs and database schemas to implementing
                NLP pipelines and deploying machine learning models.
              </p>
              <p className="text-lg text-dark-500 dark:text-dark-400 mb-8 leading-relaxed">
                I value <strong className="text-dark-900 dark:text-white">clean code</strong>, <strong className="text-dark-900 dark:text-white">system design fundamentals</strong>, and
                <strong className="text-dark-900 dark:text-white">performance optimization</strong>. Currently exploring
                transformer architectures, LLM evaluation frameworks, and scalable backend patterns.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-accent-600 dark:text-accent-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-dark-600 dark:text-dark-300">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {profileItems.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="outlined" padding="md">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <span className="text-2xl font-bold text-dark-200 dark:text-dark-700 font-mono">
                          {item.number}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={cn("p-2 rounded-lg", item.bg)}>
                            <item.icon className={cn("w-5 h-5", item.color)} aria-hidden="true" />
                          </div>
                          <h3 className="text-lg font-semibold text-dark-900 dark:text-white">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-dark-500 dark:text-dark-400 ml-10">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}