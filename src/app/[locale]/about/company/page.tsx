"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function CompanyPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("companyTitle")}
            as="h1"
            className="text-display text-white"
          />
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-body-lg leading-relaxed text-gray"
          >
            {t("companyDesc")}
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-light">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading">{t("mission")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-6 leading-relaxed text-gray">
              {t("missionDesc")}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading">{t("market")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-6 leading-relaxed text-gray">
              {t("marketDesc")}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-center text-heading">{t("advantages")}</h2>
        <div className="mx-auto mt-2 section-divider" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-start gap-4 rounded-xl border border-gray-100 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </div>
              <p className="font-medium">{t(`advantageItems.${i}`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
