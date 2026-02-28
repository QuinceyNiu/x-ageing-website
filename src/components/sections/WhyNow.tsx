"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerFast, cardRise } from "@/lib/animations";

const items = [
  {
    key: "tech",
    icon: "01",
  },
  {
    key: "policy",
    icon: "02",
  },
  {
    key: "consumer",
    icon: "03",
  },
];

export function WhyNow() {
  const t = useTranslations("whyNow");

  return (
    <SectionWrapper dark snap className="!bg-dark-secondary">
      <div className="text-center">
        <h2 className="text-heading text-white">{t("title")}</h2>
        <p className="mt-4 text-body-lg text-gray-light">{t("subtitle")}</p>
        <div className="mx-auto mt-2 section-divider" />
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-8 md:grid-cols-3"
      >
        {items.map((item) => (
          <motion.div
            key={item.key}
            variants={cardRise}
            className="relative card-gradient-border p-8 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all"
          >
            <span className="text-5xl font-bold text-gradient opacity-20 select-none">
              {item.icon}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {t(`${item.key}.title`)}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-light">
              {t(`${item.key}.desc`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
