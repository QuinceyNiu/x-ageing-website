"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
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
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("solutionsTitle")}
            as="h1"
            className="text-display text-white"
          />
        </div>
      </section>

      <SectionWrapper>
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
              className="rounded-2xl border border-gray-100 p-8 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">
                {t(`${s.key}.title`)}
              </h3>
              <p className="mt-3 leading-relaxed text-gray">
                {t(`${s.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
