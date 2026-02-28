"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { staggerContainer, staggerItem } from "@/lib/animations";

const subPages = [
  { key: "companyTitle", href: "/about/company", icon: "🏢" },
  { key: "teamTitle", href: "/about/team", icon: "👨‍🔬" },
  { key: "partnersTitle", href: "/about/partners", icon: "🤝" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("title")} />

      {/* Company Overview */}
      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading text-white">{t("companyTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-8 text-body-lg leading-relaxed text-gray-light">
            {t("companyDesc")}
          </p>
        </div>
      </SectionWrapper>

      {/* Mission & Market */}
      <SectionWrapper dark className="!bg-dark-secondary">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-subheading text-white">{t("mission")}</h3>
            <p className="mt-4 leading-relaxed text-gray-light">
              {t("missionDesc")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-subheading text-white">{t("market")}</h3>
            <p className="mt-4 leading-relaxed text-gray-light">
              {t("marketDesc")}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Advantages */}
      <SectionWrapper dark>
        <h2 className="text-center text-heading text-white">{t("advantages")}</h2>
        <div className="mx-auto mt-2 section-divider" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="card-gradient-border p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {i + 1}
              </div>
              <p className="mt-4 text-sm font-medium text-gray-light">
                {t(`advantageItems.${i}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Sub-page Navigation */}
      <SectionWrapper dark className="!bg-dark-secondary">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {subPages.map((page) => (
            <motion.div key={page.key} variants={staggerItem}>
              <Link
                href={page.href}
                className="glass-card block rounded-xl p-6 text-center transition-all hover:border-primary/20"
              >
                <span className="text-3xl">{page.icon}</span>
                <p className="mt-3 font-medium text-gray-light hover:text-white">
                  {t(page.key)}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
