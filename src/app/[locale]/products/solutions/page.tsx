"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { staggerContainer, staggerItem } from "@/lib/animations";

const solutions = [
  { key: "solution1", icon: "💉" },
  { key: "solution2", icon: "🏥" },
  { key: "solution3", icon: "🔬" },
  { key: "solution4", icon: "🧴" },
];

export default function SolutionsPage() {
  const t = useTranslations("products");

  return (
    <>
      <PageHero title={t("solutionsTitle")} />

      <SectionWrapper dark>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {solutions.map((s) => (
            <motion.div
              key={s.key}
              variants={staggerItem}
              className="card-gradient-border p-8 transition-all hover:border-primary/20"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {t(`${s.key}.title`)}
              </h3>
              <p className="mt-3 leading-relaxed text-gray-light">
                {t(`${s.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
