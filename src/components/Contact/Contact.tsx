"use client";

import { motion } from "framer-motion";
import { Mail, Send, ArrowRight, Check } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../UI/Icons";
import { SectionHeader } from "../UI/SectionHeader";
import { personalInfo } from "../../data/portfolio";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { cn } from "../../lib/utils";

const contactMethods = [
  {
    label: "Email",
    value: personalInfo.email,
    icon: Mail,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    href: `mailto:${personalInfo.email}`,
    copyable: true,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    icon: LinkedinIcon,
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    href: personalInfo.linkedin,
    copyable: false,
  },
  {
    label: "GitHub",
    value: "View repositories",
    icon: GithubIcon,
    color: "text-gray-600",
    bg: "bg-gray-100 dark:bg-gray-700",
    href: personalInfo.github,
    copyable: false,
  },
];

const primaryButtonStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 dark:focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 shadow-sm";
const ghostButtonStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-950 dark:focus-visible:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 active:bg-dark-200 dark:active:bg-dark-700";
const smButtonStyles = "px-3 py-1.5 text-sm gap-1.5";
const lgButtonStyles = "px-7 py-3.5 text-lg gap-2.5";

export function Contact() {
  const { copied, copy } = useCopyToClipboard();

  const handleEmailCopy = () => {
    copy(personalInfo.email, "Email copied!");
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <SectionHeader
            title="Let's build something useful."
            subtitle="GET IN TOUCH"
            description="Open to internship opportunities, full-time roles, and technical collaborations. Feel free to reach out."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-6 sm:grid-cols-3 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.article
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-700 h-full transition-all hover:border-accent-300 dark:hover:border-accent-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn("p-3 rounded-xl", method.bg)}>
                    <method.icon className={cn("w-6 h-6", method.color)} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-dark-500 dark:text-dark-400 truncate">{method.label}</p>
                    <p className="text-lg font-semibold text-dark-900 dark:text-white truncate" title={method.value}>{method.value}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={method.href}
                    target={method.copyable ? undefined : "_blank"}
                    rel={method.copyable ? undefined : "noopener noreferrer"}
                    className={cn(primaryButtonStyles, smButtonStyles, "flex-1")}
                    aria-label={`${method.label}: ${method.copyable ? "Copy email" : "Open link"}`}
                  >
                    {method.copyable ? (
                      <>
                        {copied === "Email copied!" ? (
                          <Check className="w-4 h-4" aria-hidden="true" />
                        ) : (
                          <Mail className="w-4 h-4" aria-hidden="true" />
                        )}
                        <span>{copied === "Email copied!" ? "Copied!" : "Copy Email"}</span>
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        <span>Open</span>
                      </>
                    )}
                  </a>
                  {method.copyable && (
                    <button
                      onClick={handleEmailCopy}
                      className={cn(ghostButtonStyles, "p-2")}
                      aria-label="Copy email to clipboard"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-accent-500/10 to-purple-500/10 border border-accent-200 dark:border-accent-800"
        >
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            Prefer a direct conversation?
          </p>
          <a
            href={`mailto:${personalInfo.email}?subject=Collaboration Inquiry&body=Hi Dhanunjaya,%0D%0A%0D%0AI came across your portfolio and...`}
            className={cn(primaryButtonStyles, lgButtonStyles)}
          >
            <Send className="w-5 h-5" aria-hidden="true" />
            Start a Conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}