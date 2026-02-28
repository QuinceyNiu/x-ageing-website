"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero title={t("teamTitle")} subtitle={t("teamDesc")} />

      <SectionWrapper dark>
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
              className="card-gradient-border group overflow-hidden text-center"
            >
              <div className="aspect-[3/4] bg-gradient-to-b from-primary/10 to-accent/10" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-light">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-12 text-center text-gray-light">
          团队详细信息即将更新，敬请期待。
        </p>
      </SectionWrapper>
    </>
  );
}
