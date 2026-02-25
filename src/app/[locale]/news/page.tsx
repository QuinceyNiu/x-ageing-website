"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "@/i18n/navigation";

const newsItems = [
  {
    slug: "seed-funding",
    category: "company",
    date: "2025-01",
    titleZh: "小龄生物完成天使轮融资，获和元生物战略投资",
    titleEn:
      "X-AGEING Completes Angel Round, Secures Strategic Investment from OBiO Technology",
    descZh:
      "上海小龄生物医药技术有限公司宣布完成天使轮融资，由和元生物领投。本轮融资将用于外泌体工程化平台建设及AI数字孪生系统开发。",
    descEn:
      "Shanghai Xiaoling Biomedical Technology Co., Ltd. announced completion of angel round financing, led by OBiO Technology. Funds will be used for exosome engineering platform construction and AI digital twin system development.",
  },
];

export default function NewsPage() {
  const t = useTranslations("news");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("title")}
            as="h1"
            className="text-display text-white"
          />
        </div>
      </section>

      {/* Category tabs */}
      <SectionWrapper>
        <div className="mb-8 flex gap-4 border-b border-gray-200">
          {["company", "industry", "articles"].map((cat) => (
            <button
              key={cat}
              className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray transition-colors hover:border-primary hover:text-primary"
            >
              {t(cat)}
            </button>
          ))}
        </div>

        {newsItems.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {newsItems.map((item) => (
              <motion.div key={item.slug} variants={staggerItem}>
                <Link
                  href={`/news/${item.slug}`}
                  className="block rounded-2xl border border-gray-100 p-6 transition-all hover:border-primary/20 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {t(item.category)}
                    </span>
                    <span className="text-xs text-gray">{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">
                    {item.titleZh}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">
                    {item.descZh}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    {t("readMore")} →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="py-12 text-center text-gray">{t("noArticles")}</p>
        )}
      </SectionWrapper>
    </>
  );
}
