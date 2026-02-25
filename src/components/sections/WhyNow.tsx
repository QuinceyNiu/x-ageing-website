"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

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
    <SectionWrapper className="bg-light" snap>
      <div className="text-center">
        <h2 className="text-heading">{t("title")}</h2>
        <p className="mt-4 text-body-lg text-gray">{t("subtitle")}</p>
        <div className="mx-auto mt-2 section-divider" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-8 md:grid-cols-3"
      >
        {items.map((item) => (
          <motion.div
            key={item.key}
            variants={staggerItem}
            className="relative rounded-2xl bg-white p-8 shadow-sm"
          >
            <span className="text-5xl font-bold text-primary/10">
              {item.icon}
            </span>
            <h3 className="mt-4 text-xl font-semibold">
              {t(`${item.key}.title`)}
            </h3>
            <p className="mt-3 leading-relaxed text-gray">
              {t(`${item.key}.desc`)}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
