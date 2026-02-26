"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem } from "@/lib/animations";

type Partner = {
  name: string;
  abbr: string;
  logo?: string; // 放入 /public/logos/ 后填写文件名，如 "zhongshan.png"
};

type Category = {
  label: string;
  partners: Partner[];
};

const categories: Category[] = [
  {
    label: "医疗机构",
    partners: [
      { name: "复旦大学附属中山医院", abbr: "中山医院" },
      { name: "苏州九龙医院", abbr: "九龙医院" },
    ],
  },
  {
    label: "战略投资 & 孵化",
    partners: [
      { name: "和元生物", abbr: "和元" },
      { name: "莘泽创业", abbr: "莘泽" },
      { name: "中科创星", abbr: "创星" },
    ],
  },
  {
    label: "技术合作",
    partners: [
      { name: "生物芯片", abbr: "芯片" },
      { name: "超聚变", abbr: "超聚变" },
      { name: "玄言生物", abbr: "玄言" },
      { name: "森卅生物", abbr: "森卅" },
    ],
  },
  {
    label: "行业组织",
    partners: [{ name: "张江科学城商会", abbr: "张江商会" }],
  },
];

export default function PartnersPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("partnersTitle")}
            as="h1"
            className="text-display text-white"
          />
          <p className="mt-4 text-body-lg text-white/60">
            {t("partnersDesc")}
          </p>
        </div>
      </section>

      <SectionWrapper>
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
                <div className="h-px flex-1 bg-gray-100" />
              </div>

              {/* Partner cards */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {cat.partners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    variants={staggerItem}
                    className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md"
                  >
                    {/* Logo area */}
                    <div className="flex h-20 w-full items-center justify-center rounded-xl bg-gray-50 transition-colors group-hover:bg-primary/5">
                      {partner.logo ? (
                        <img
                          src={`/logos/${partner.logo}`}
                          alt={partner.name}
                          className="max-h-12 max-w-[80%] object-contain grayscale transition-all group-hover:grayscale-0"
                        />
                      ) : (
                        <span className="text-lg font-bold tracking-tight text-gray-300 transition-colors group-hover:text-primary/50">
                          {partner.abbr}
                        </span>
                      )}
                    </div>
                    {/* Name */}
                    <p className="mt-4 text-center text-sm font-medium text-gray-700">
                      {partner.name}
                    </p>
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
