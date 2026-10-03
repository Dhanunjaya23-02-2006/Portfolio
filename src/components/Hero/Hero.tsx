"use client";

import { motion } from "framer-motion";
import { Code, Database, Zap, Brain } from "lucide-react";
import { Button } from "../UI/Button";
import { SocialLink } from "../UI/SocialLink";
import { personalInfo } from "../../data/portfolio";
import { cn } from "../../lib/utils";

const techIcons = [
  { icon: Code, color: "text-blue-500", delay: 0 },
  { icon: Database, color: "text-green-500", delay: 0.1 },
  { icon: Zap, color: "text-yellow-500", delay: 0.2 },
  { icon: Brain, color: "text-purple-500", delay: 0.3 },
  { icon: Code, color: "text-cyan-500", delay: 0.4 },
  { icon: Database, color: "text-orange-500", delay: 0.5 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent dark:from-accent-500/5" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-auto opacity-5 dark:opacity-10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 dark:bg-accent-950 border border-accent-200 dark:border-accent-800 text-accent-700 dark:text-accent-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75" aria-hidden="true" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" aria-hidden="true" />
                </span>
                AI/ML ENGINEER • FULL-STACK DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white tracking-tight leading-tight mb-6"
            >
              Building intelligent{" "}
              <span className="text-accent-600 dark:text-accent-400">software systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-lg sm:text-xl text-dark-500 dark:text-dark-400 mb-8 max-w-xl"
            >
              Computer Science undergraduate specializing in Artificial Intelligence &
              Machine Learning. Crafting full-stack applications, REST APIs, and NLP-powered
              solutions with modern tooling.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10"
            >
              <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View Projects
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <SocialLink
                href="https://github.com/Dhanunjaya23-02-2006"
                icon="github"
                variant="minimal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/ambati-dhanunjaya-36b980309/"
                icon="linkedin"
                variant="minimal"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:dhanunjayaambati23@gmail.com"
                icon="email"
                variant="minimal"
              >
                Email
              </SocialLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-3xl blur-2xl" aria-hidden="true" />
              <div className="relative bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 rounded-2xl p-6 shadow-2xl shadow-dark-950/10 dark:shadow-black/30">
                <div className="space-y-4">
                  {personalInfo.status && (
                    <div className="flex items-center gap-3 p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-100 dark:border-dark-800">
                      <div className="p-2 bg-accent-100 dark:bg-accent-900/30 rounded-lg text-accent-600 dark:text-accent-400">
                        <Code className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">Currently</p>
                        <p className="text-sm font-medium text-dark-900 dark:text-white">{personalInfo.status}</p>
                      </div>
                    </div>
                  )}
                  {personalInfo.currentFocus && (
                    <div className="flex items-center gap-3 p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-100 dark:border-dark-800">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                        <Brain className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">Focus</p>
                        <p className="text-sm font-medium text-dark-900 dark:text-white">{personalInfo.currentFocus}</p>
                      </div>
                    </div>
                  )}
                  {personalInfo.location && (
                    <div className="flex items-center gap-3 p-4 bg-dark-50 dark:bg-dark-800/50 rounded-xl border border-dark-100 dark:border-dark-800">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                        <Database className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider">Based In</p>
                        <p className="text-sm font-medium text-dark-900 dark:text-white">{personalInfo.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-dark-100 dark:border-dark-800">
                  <p className="text-xs font-medium text-dark-500 dark:text-dark-400 uppercase tracking-wider mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {techIcons.map(({ icon: Icon, color, delay }, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + delay }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-800"
                      >
                        <Icon className={cn("w-4 h-4", color)} aria-hidden="true" />
                        <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
                          {["React", "MongoDB", "Node.js", "Python", "TypeScript", "PostgreSQL"][index]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 flex flex-wrap gap-2" aria-hidden="true">
              {techIcons.map(({ icon: Icon, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring", stiffness: 100 }}
                  className="p-3 rounded-xl bg-white/80 dark:bg-dark-950/80 backdrop-blur-sm border border-dark-200 dark:border-dark-700 shadow-lg"
                >
                  <Icon className={cn("w-6 h-6", color)} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="w-6 h-6 text-dark-300 dark:text-dark-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}