"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";

const subPages = [
  { key: "companyTitle", href: "/about/company", icon: "🏢" },
  { key: "teamTitle", href: "/about/team", icon: "👨‍🔬" },
  { key: "certsTitle", href: "/about/certifications", icon: "📜" },
  { key: "patentsTitle", href: "/about/patents", icon: "💡" },
  { key: "partnersTitle", href: "/about/partners", icon: "🤝" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("title")}
            as="h1"
            className="text-display text-white"
          />
        </div>
      </section>

      {/* Company Overview */}
      <SectionWrapper>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-heading">{t("companyTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-8 text-body-lg leading-relaxed text-gray">
            {t("companyDesc")}
          </p>
        </div>
      </SectionWrapper>

      {/* Mission & Market */}
      <SectionWrapper className="bg-light">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-subheading">{t("mission")}</h3>
            <p className="mt-4 leading-relaxed text-gray">
              {t("missionDesc")}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="text-subheading">{t("market")}</h3>
            <p className="mt-4 leading-relaxed text-gray">
              {t("marketDesc")}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Advantages */}
      <SectionWrapper>
        <h2 className="text-center text-heading">{t("advantages")}</h2>
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
              className="rounded-xl border border-gray-100 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                {i + 1}
              </div>
              <p className="mt-4 text-sm font-medium">
                {t(`advantageItems.${i}`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      {/* Sub-page Navigation */}
      <SectionWrapper className="bg-light">
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
                className="block rounded-xl bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:ring-1 hover:ring-primary/20"
              >
                <span className="text-3xl">{page.icon}</span>
                <p className="mt-3 font-medium">{t(page.key)}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
