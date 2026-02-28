"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerFast, cardRise } from "@/lib/animations";

export function PainPoints() {
  const t = useTranslations("painPoints");

  const items = [0, 1, 2, 3];

  return (
    <SectionWrapper dark snap>
      <div className="text-center">
        <h2 className="text-heading text-white">{t("title")}</h2>
        <div className="mx-auto mt-2 section-divider" />
      </div>

      <motion.div
        variants={staggerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-6 md:grid-cols-2"
      >
        {items.map((i) => (
          <motion.div
            key={i}
            variants={cardRise}
            className="card-gradient-border overflow-hidden"
          >
            {/* Pain */}
            <div className="bg-red-950/30 border-b border-red-900/20 p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-xs font-medium text-red-400">
                  !
                </span>
                <p className="font-medium text-white/90">
                  {t(`items.${i}.pain`)}
                </p>
              </div>
            </div>
            {/* Solution */}
            <div className="glass-card rounded-b-2xl p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-medium text-primary">
                  ✓
                </span>
                <p className="text-gray-light">{t(`items.${i}.solution`)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
