"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem } from "@/lib/animations";

const pipelineItems = [
  { name: "皮肤抗衰外泌体精华", stage: "临床前", progress: 60 },
  { name: "关节修复外泌体制剂", stage: "早期研发", progress: 35 },
  { name: "神经保护因子", stage: "靶点验证", progress: 20 },
  { name: "AI 生物年龄评估平台", stage: "Beta 测试", progress: 75 },
  { name: "多组学数据分析引擎", stage: "开发中", progress: 50 },
];

export default function PipelinePage() {
  const t = useTranslations("products");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("pipelineTitle")}
            as="h1"
            className="text-display text-white"
          />
          <p className="mt-4 text-body-lg text-white/60">
            {t("pipelineDesc")}
          </p>
        </div>
      </section>

      <SectionWrapper>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {pipelineItems.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="rounded-xl border border-gray-100 p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="mt-1 text-sm text-gray">{item.stage}</p>
                </div>
                <span className="text-sm font-medium text-primary">
                  {item.progress}%
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
