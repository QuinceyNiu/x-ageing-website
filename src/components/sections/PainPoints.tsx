"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function PainPoints() {
  const t = useTranslations("painPoints");

  const items = [0, 1, 2, 3];

  return (
    <SectionWrapper snap>
      <div className="text-center">
        <h2 className="text-heading">{t("title")}</h2>
        <div className="mx-auto mt-2 section-divider" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {items.map((i) => (
          <motion.div
            key={i}
            variants={staggerItem}
            className="overflow-hidden rounded-2xl border border-gray-100"
          >
            {/* Pain */}
            <div className="bg-light p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-medium text-red-600">
                  !
                </span>
                <p className="font-medium text-dark-secondary">
                  {t(`items.${i}.pain`)}
                </p>
              </div>
            </div>
            {/* Solution */}
            <div className="bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  ✓
                </span>
                <p className="text-gray">{t(`items.${i}.solution`)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
