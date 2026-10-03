"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../UI/Button";
import { SocialLink } from "../UI/SocialLink";
import { navigation } from "../../data/portfolio";
import { useTheme } from "../../lib/theme-context";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-dark-950/80 backdrop-blur-md border-b border-dark-200 dark:border-dark-800 shadow-sm"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <motion.a
              href="#home"
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Ambati Dhanunjaya - Home"
              onClick={handleNavClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo.png" 
                alt="Ambati Dhanunjaya" 
                className="w-10 h-10 rounded-full object-cover border-2 border-accent-500 shadow-sm bg-dark-900 dark:bg-transparent"
              />
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-dark-600 dark:text-dark-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors rounded-lg"
                  onClick={handleNavClick}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>

            <SocialLink
              href="https://github.com/Dhanunjaya23-02-2006"
              icon="github"
              variant="icon-only"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            />
            <SocialLink
              href="https://www.linkedin.com/in/ambati-dhanunjaya-36b980309/"
              icon="linkedin"
              variant="icon-only"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            />

            <Button variant="ghost" size="sm" className="hidden sm:flex" onClick={handleNavClick}>
              <Download className="w-4 h-4 mr-1" aria-hidden="true" />
              Resume
            </Button>

            <button
              className="md:hidden p-2 rounded-lg text-dark-500 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-dark-200 dark:border-dark-800 bg-white dark:bg-dark-950"
            >
              <div className="py-4 space-y-2 px-4">
                {navigation.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-dark-600 dark:text-dark-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
                    onClick={handleNavClick}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-dark-200 dark:border-dark-800 flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto" onClick={handleNavClick}>
                    <Download className="w-4 h-4 mr-1" aria-hidden="true" />
                    Resume
                  </Button>
                  <SocialLink
                    href="https://github.com/Dhanunjaya23-02-2006"
                    icon="github"
                    variant="default"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    GitHub
                  </SocialLink>
                  <SocialLink
                    href="https://www.linkedin.com/in/ambati-dhanunjaya-36b980309/"
                    icon="linkedin"
                    variant="default"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    LinkedIn
                  </SocialLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}