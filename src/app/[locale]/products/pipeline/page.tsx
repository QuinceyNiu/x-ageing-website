"use client";

import { useTranslations } from "next-intl";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";

export default function PipelinePage() {
  const t = useTranslations("products");

  return (
    <>
      <PageHero title={t("pipelineTitle")} />

      <SectionWrapper dark>
        <div className="flex min-h-[30vh] items-center justify-center">
          <p className="text-2xl font-medium text-gray-light">待更新</p>
        </div>
      </SectionWrapper>
    </>
  );
}
