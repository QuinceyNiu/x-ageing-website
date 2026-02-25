"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";

export default function PatentsPage() {
  const t = useTranslations("about");

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
          <StaggerText
            text={t("patentsTitle")}
            as="h1"
            className="text-display text-white"
          />
          <p className="mt-4 text-body-lg text-white/60">
            {t("patentsDesc")}
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-body-lg text-gray">
            发明专利信息即将更新，敬请期待。
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
