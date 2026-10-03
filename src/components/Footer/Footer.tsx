"use client";

import { Code } from "lucide-react";
import { SocialLink } from "../UI/SocialLink";
import { personalInfo } from "../../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-dark-200 dark:border-dark-800 bg-white dark:bg-dark-950"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-accent-600 dark:text-accent-400" aria-hidden="true" />
              <span className="text-xl font-bold text-dark-900 dark:text-white">AD</span>
            </div>
            <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
              AI/ML Engineer & Full-Stack Developer building intelligent software systems.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
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
            </div>
          </div>

          <div className="md:col-span-1 text-right md:text-left">
            <p className="text-dark-500 dark:text-dark-400 text-sm mb-2">
              © {currentYear} {personalInfo.name}
            </p>
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              AI/ML Engineer • Full-Stack Developer
            </p>
            <p className="text-dark-400 dark:text-dark-500 text-xs mt-4">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-800 text-center">
          <p className="text-dark-400 dark:text-dark-500 text-sm">
            Designed and developed by Ambati Dhanunjaya
          </p>
        </div>
      </div>
    </footer>
  );
}