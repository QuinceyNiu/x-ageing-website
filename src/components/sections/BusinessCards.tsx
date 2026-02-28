"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerFast, cardRise } from "@/lib/animations";

const businessCards = [
  {
    key: "ai",
    icon: (
      <img
        src="/icons_transparent_png/icon_ai_health_transparent.png"
        alt="AI Health Icon"
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    key: "exosome",
    icon: (
      <img
        src="/icons_transparent_png/icon_exosome_transparent.png"
        alt="Exosome Icon"
        className="h-10 w-10 object-contain"
      />
    ),
  },
  {
    key: "clinical",
    icon: (
      <img
        src="/icons_transparent_png/icon_clinical_transparent.png"
        alt="Clinical Icon"
        className="h-10 w-10 object-contain"
      />
    ),
  },
];

export function BusinessCards() {
  const t = useTranslations("business");

  return (
    <SectionWrapper dark snap>
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
        {businessCards.map((card) => (
          <motion.div
            key={card.key}
            variants={cardRise}
            whileHover={{ y: -6 }}
            className="group card-gradient-border overflow-hidden p-8"
          >
            <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-all group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              {card.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              {t(`${card.key}.title`)}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-light">
              {t(`${card.key}.desc`)}
            </p>
            {/* Hover underline reveal */}
            <div className="mt-6 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
