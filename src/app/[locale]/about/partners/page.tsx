"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { staggerContainer, staggerItem } from "@/lib/animations";

type Partner = {
  name: string;
  abbr: string;
  logo?: string;
};

type Category = {
  label: string;
  partners: Partner[];
};

const categories: Category[] = [
  {
    label: "医疗机构",
    partners: [
      { name: "复旦大学附属中山医院", abbr: "中山医院", logo: "中山医院.jpg" },
      { name: "苏州九龙医院", abbr: "九龙医院", logo: "九龙医院.png" },
    ],
  },
  {
    label: "战略投资 & 孵化",
    partners: [
      { name: "和元生物", abbr: "和元", logo: "和元生物.png" },
      { name: "莘泽创业", abbr: "莘泽", logo: "莘泽创业.jpg" },
      { name: "中科创星", abbr: "创星", logo: "中科创星.jpg" },
    ],
  },
  {
    label: "技术合作",
    partners: [
      { name: "生物芯片", abbr: "芯片", logo: "生物芯片.png" },
      { name: "超聚变", abbr: "超聚变", logo: "超聚变.svg" },
      { name: "玄言生物", abbr: "玄言", logo: "玄言生物.jpg" },
      { name: "森卅生物", abbr: "森卅", logo: "森卅生物.jpeg" },
    ],
  },
  {
    label: "行业组织",
    partners: [{ name: "张江科学城商会", abbr: "张江商会", logo: "张江科学城商会.jpg" }],
  },
];

export default function PartnersPage() {
  const t = useTranslations("about");

  return (
    <>
      <PageHero title={t("partnersTitle")} subtitle={t("partnersDesc")} />

      <SectionWrapper dark>
        <div className="space-y-16">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              {/* Category header */}
              <div className="mb-8 flex items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                  {cat.label}
                </span>
                <div className="h-px flex-1 bg-dark-border" />
              </div>

              {/* Partner cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {cat.partners.map((partner) => (
                  <motion.div key={partner.name} variants={staggerItem}>
                    {partner.logo ? (
                      <div className="flex aspect-[3/2] items-center justify-center rounded-xl bg-white p-5 opacity-90 transition-all hover:opacity-100 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)]">
                        <img
                          src={`/logos/${partner.logo}`}
                          alt={partner.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="card-gradient-border flex aspect-[3/2] flex-col items-center justify-center gap-1.5 p-4 text-center">
                        <span className="text-sm font-bold text-gray-light">
                          {partner.abbr}
                        </span>
                        <span className="text-xs text-gray/70">{partner.name}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
