"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem } from "@/lib/animations";

const teamMembers = [
  { name: "首席科学家", role: "外泌体工程化方向" },
  { name: "技术总监", role: "AI 数字孪生方向" },
  { name: "临床研究负责人", role: "临床转化方向" },
  { name: "产品总监", role: "产品开发方向" },
];

export default function TeamPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("teamTitle")}
            as="h1"
            className="text-display text-white"
          />
          <p className="mt-4 text-body-lg text-white/60">{t("teamDesc")}</p>
        </div>
      </section>

      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl border border-gray-100 text-center"
            >
              <div className="aspect-[3/4] bg-gradient-to-b from-primary/5 to-primary/10" />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-gray">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-12 text-center text-gray">
          团队详细信息即将更新，敬请期待。
        </p>
      </SectionWrapper>
    </>
  );
}
