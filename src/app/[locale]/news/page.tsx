"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Link } from "@/i18n/navigation";
import { newsItems } from "@/lib/newsData";

export default function NewsPage() {
  const t = useTranslations("news");

  return (
    <>
      <PageHero title={t("title")} />

      <SectionWrapper dark>
        {/* Category tabs */}
        <div className="mb-8 flex gap-4 border-b border-dark-border">
          {["company", "industry", "articles"].map((cat) => (
            <button
              key={cat}
              className="border-b-2 border-transparent px-4 py-2 text-sm font-medium text-gray-light transition-colors hover:border-primary hover:text-primary"
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
                  className="card-gradient-border flex gap-6 p-6 transition-all hover:border-primary/20"
                >
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {t(item.category)}
                      </span>
                      <span className="text-xs text-gray-light">{item.date}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-white">
                      {item.titleZh}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-light line-clamp-2">
                      {item.descZh}
                    </p>
                    <span className="mt-3 inline-block text-sm font-medium text-primary">
                      {t("readMore")} →
                    </span>
                  </div>

                  {/* Thumbnail */}
                  {item.image && (
                    <div className="hidden sm:block flex-shrink-0 w-40 h-28 overflow-hidden rounded-lg">
                      <img
                        src={item.image}
                        alt={item.titleZh}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="py-12 text-center text-gray-light">{t("noArticles")}</p>
        )}
      </SectionWrapper>
    </>
  );
}
