"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function PartnersPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("partnersTitle")}
            as="h1"
            className="text-display text-white"
          />
          <p className="mt-4 text-body-lg text-white/60">
            {t("partnersDesc")}
          </p>
        </div>
      </section>

      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-4 rounded-xl border border-gray-100 p-6 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </div>
              <p className="font-medium">{t(`partnerList.${i}`)}</p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
