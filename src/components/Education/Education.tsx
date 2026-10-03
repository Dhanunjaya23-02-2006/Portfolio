"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar, Target } from "lucide-react";
import { Card } from "../UI/Card";
import { SectionHeader } from "../UI/SectionHeader";
import { education } from "../../data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="Education"
            subtitle="ACADEMIC"
            description="Academic background in Computer Science with AI/ML specialization."
            align="center"
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dark-200 dark:border-dark-700" aria-hidden="true" />

          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-1 w-3 h-3 bg-accent-600 dark:bg-accent-400 rounded-full border-4 border-white dark:border-dark-950 shadow-lg" aria-hidden="true" />
              <div className="absolute left-0 top-1 w-3 h-3 bg-accent-600 dark:bg-accent-400 rounded-full animate-ping opacity-75" aria-hidden="true" />

              <Card variant="outlined" padding="lg" className="h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent-50 dark:bg-accent-900/30 rounded-xl text-accent-600 dark:text-accent-400">
                    <GraduationCap className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                      {edu.specialization}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-3">
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                      <span>{edu.institution}, {edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="w-4 h-4 text-yellow-500" aria-hidden="true" />
                        <span className="font-medium text-dark-900 dark:text-white">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.status && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
                        <Target className="w-4 h-4" aria-hidden="true" />
                        <span>{edu.status}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-accent-500/10 to-purple-500/10 border border-accent-200 dark:border-accent-800 text-center"
        >
          <p className="text-dark-600 dark:text-dark-400 mb-2">
            Continuous Learning
          </p>
          <p className="text-dark-900 dark:text-white font-medium">
            Actively pursuing certifications in cloud architecture, MLOps, and advanced ML techniques
          </p>
        </motion.div>
      </div>
    </section>
  );
}