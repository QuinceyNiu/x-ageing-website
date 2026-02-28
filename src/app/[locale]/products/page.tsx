"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Button } from "@/components/ui/Button";

export default function ProductsPage() {
  const t = useTranslations("products");

  return (
    <>
      <PageHero title={t("title")} subtitle={t("subtitle")} />

      {/* Products */}
      <SectionWrapper dark>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product 1 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="card-gradient-border p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg
                className="h-7 w-7 text-primary"
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
            </div>
            <h3 className="text-xl font-semibold text-white">{t("product1Title")}</h3>
            <p className="mt-4 leading-relaxed text-gray-light">
              {t("product1Desc")}
            </p>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="card-gradient-border p-8"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <svg
                className="h-7 w-7 text-primary"
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
            </div>
            <h3 className="text-xl font-semibold text-white">{t("product2Title")}</h3>
            <p className="mt-4 leading-relaxed text-gray-light">
              {t("product2Desc")}
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Solutions */}
      <SectionWrapper dark className="!bg-dark-secondary">
        <div className="text-center">
          <h2 className="text-heading text-white">{t("solutionsTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          {(["solution1", "solution2", "solution3", "solution4"] as const).map(
            (key, i) => {
              const icons = ["💉", "🏥", "🔬", "🧴"];
              return (
                <motion.div
                  key={key}
                  variants={staggerItem}
                  className="card-gradient-border p-8 transition-all hover:border-primary/20"
                >
                  <span className="text-4xl">{icons[i]}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-light">
                    {t(`${key}.desc`)}
                  </p>
                </motion.div>
              );
            }
          )}
        </motion.div>
      </SectionWrapper>

      {/* Pipeline link */}
      <SectionWrapper dark>
        <div className="text-center">
          <h2 className="text-heading text-white">{t("pipelineTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-6 text-body-lg text-gray-light">{t("pipelineDesc")}</p>
          <div className="mt-8">
            <Link href="/products/pipeline">
              <Button variant="primary">查看研发管线</Button>
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
