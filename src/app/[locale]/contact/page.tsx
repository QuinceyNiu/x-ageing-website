"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { fadeUp } from "@/lib/animations";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <>
      <PageHero title={t("title")} />

      <SectionWrapper dark>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-3xl"
        >
          <h2 className="text-subheading text-white">{t("infoTitle")}</h2>
          <div className="mt-2 section-divider" />

          {/* Company name */}
          <div className="mt-8">
            <p className="text-xl font-semibold text-white">{t("company")}</p>
            <p className="mt-1 text-sm text-gray-light">{t("companyEn")}</p>
          </div>

          {/* Info grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-dark-border bg-dark-card p-5">
              <p className="text-xs uppercase tracking-widest text-gray-light">联系人</p>
              <p className="mt-3 text-base font-medium text-white">{t("contactPerson")}</p>
            </div>
            <div className="rounded-xl border border-dark-border bg-dark-card p-5">
              <p className="text-xs uppercase tracking-widest text-gray-light">邮箱</p>
              <a
                href={`mailto:${t("email")}`}
                className="mt-3 block text-base font-medium text-primary hover:underline break-all"
              >
                {t("email")}
              </a>
            </div>
            <div className="rounded-xl border border-dark-border bg-dark-card p-5">
              <p className="text-xs uppercase tracking-widest text-gray-light">地址</p>
              <p className="mt-3 text-base font-medium text-white leading-relaxed">{t("address")}</p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Careers */}
      <SectionWrapper dark className="!bg-dark-secondary" id="careers">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-heading text-white">{t("jobsTitle")}</h2>
          <div className="mx-auto mt-2 section-divider" />
          <p className="mt-6 text-body-lg text-gray-light">{t("jobsDesc")}</p>
          <p className="mt-4 text-sm text-gray-light">
            简历请发送至：
            <a
              href={`mailto:${t("email")}`}
              className="font-medium text-primary hover:underline"
            >
              {t("email")}
            </a>
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
