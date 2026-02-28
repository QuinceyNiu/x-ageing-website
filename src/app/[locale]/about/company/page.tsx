"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function CompanyPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("companyTitle")} />

      <SectionWrapper dark>
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-body-lg leading-relaxed text-gray-light"
          >
            {t("companyDesc")}
          </motion.p>
        </div>
      </SectionWrapper>

      <SectionWrapper dark className="!bg-dark-secondary">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading text-white">{t("mission")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-6 leading-relaxed text-gray-light">
              {t("missionDesc")}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-subheading text-white">{t("market")}</h2>
            <div className="mt-2 section-divider" />
            <p className="mt-6 leading-relaxed text-gray-light">
              {t("marketDesc")}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <h2 className="text-center text-heading text-white">{t("advantages")}</h2>
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
              className="card-gradient-border flex items-start gap-4 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </div>
              <p className="font-medium text-white">{t(`advantageItems.${i}`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
