"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { StaggerText } from "@/components/ui/StaggerText";

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
        </div>
      </section>

      <SectionWrapper>
        <div className="flex min-h-[30vh] items-center justify-center">
          <p className="text-2xl font-medium text-gray">待更新</p>
        </div>
      </SectionWrapper>
    </>
  );
}
