"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { Card } from "../UI/Card";
import { SectionHeader } from "../UI/SectionHeader";
import { certifications } from "../../data/portfolio";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="certifications-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            title="Certifications"
            subtitle="CREDENTIALS"
            description="Professional certifications validating expertise in AI/ML and data technologies."
            align="center"
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert, index) => (
            <motion.article
              key={`${cert.title}-${cert.issuer}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card variant="elevated" padding="lg" className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-4 bg-accent-50 dark:bg-accent-900/30 rounded-xl text-accent-600 dark:text-accent-400 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-dark-500 dark:text-dark-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {cert.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                        {cert.issuer}
                      </span>
                    </div>
                    {cert.credentialId && (
                      <p className="text-sm text-dark-500 dark:text-dark-400 font-mono">
                        Credential: {cert.credentialId}
                      </p>
                    )}
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-dark-500 dark:text-dark-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                        aria-label={`Verify ${cert.title} certification`}
                      >
                        Verify
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-500 dark:text-dark-400">
            More certifications in progress...
          </p>
        </motion.div>
      </div>
    </section>
  );
}