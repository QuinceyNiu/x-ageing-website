"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerFast, cardRise } from "@/lib/animations";

const businessCards = [
  {
    key: "ai",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    key: "exosome",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
        />
      </svg>
    ),
  },
  {
    key: "clinical",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c0 .043.007.086.017.128a50.228 50.228 0 0 1 9.485 1.88 50.16 50.16 0 0 1 9.485-1.88c.01-.042.017-.085.017-.128a23.96 23.96 0 0 0-1.012-5.434m-15.482 0A23.94 23.94 0 0 1 12 3.494a23.94 23.94 0 0 1 7.74 6.653M12 2.25V4.5"
        />
      </svg>
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
