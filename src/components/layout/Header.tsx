"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageToggle } from "./LanguageToggle";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    key: "about",
    href: "/about",
    children: [
      { key: "aboutCompany", href: "/about/company" },
      { key: "aboutTeam", href: "/about/team" },
      { key: "aboutPartners", href: "/about/partners" },
    ],
  },
  {
    key: "products",
    href: "/products",
    children: [
      { key: "productsOverview", href: "/products" },
      { key: "solutions", href: "/products/solutions" },
      { key: "pipeline", href: "/products/pipeline" },
    ],
  },
  {
    key: "news",
    href: "/news",
    children: [
      { key: "newsCompany", href: "/news?category=company" },
      { key: "newsIndustry", href: "/news?category=industry" },
      { key: "newsArticles", href: "/news?category=articles" },
    ],
  },
  {
    key: "contact",
    href: "/contact",
    children: [
      { key: "contactInfo", href: "/contact" },
      { key: "contactJobs", href: "/contact#careers" },
    ],
  },
];

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            XIAOLIN X-AGEING
          </span>
          <span className="text-xs text-white/40 font-normal">小龄生物</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors text-white/80 hover:text-white",
                  pathname.startsWith(item.href) && "text-primary"
                )}
              >
                {t(item.key)}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {openDropdown === item.key && item.children && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                  >
                    <div className="min-w-[160px] rounded-lg bg-dark-card/95 backdrop-blur-md border border-white/10 py-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-light transition-colors hover:bg-white/5 hover:text-primary"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <LanguageToggle scrolled={scrolled} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={cn(
                "block h-0.5 w-6 transition-all bg-white",
                mobileOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 transition-all bg-white",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 transition-all bg-white",
                mobileOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-dark/95 backdrop-blur-md border-b border-white/10 lg:hidden"
          >
            <div className="space-y-1 px-6 py-4">
              {navItems.map((item) => (
                <div key={item.key}>
                  <Link
                    href={item.href}
                    className="block py-2 text-base font-medium text-white hover:text-primary"
                  >
                    {t(item.key)}
                  </Link>
                  {item.children && (
                    <div className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="block py-1.5 text-sm text-gray-light hover:text-primary"
                        >
                          {t(child.key)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <LanguageToggle scrolled={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
