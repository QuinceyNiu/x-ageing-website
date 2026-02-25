"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Link } from "@/i18n/navigation";

export default function NewsDetailPage() {
  return (
    <>
      <section className="relative flex min-h-[30vh] items-center bg-dark">
        <div className="hero-gradient absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
          <Link
            href="/news"
            className="text-sm text-white/60 hover:text-white"
          >
            ← 返回新闻列表
          </Link>
        </div>
      </section>

      <SectionWrapper>
        <article className="mx-auto max-w-3xl">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            公司动态
          </span>
          <h1 className="mt-4 text-heading">
            小龄生物完成天使轮融资，获和元生物战略投资
          </h1>
          <p className="mt-2 text-sm text-gray">2025年1月</p>
          <div className="mt-8 space-y-4 text-body-lg leading-relaxed text-gray">
            <p>
              上海小龄生物医药技术有限公司（X-AGEING）宣布完成天使轮融资，由和元生物技术（上海）股份有限公司领投。
            </p>
            <p>
              本轮融资将主要用于外泌体工程化技术平台的建设、AI数字孪生智能抗衰系统的开发，以及核心团队的扩充。
            </p>
            <p>
              公司成立于2025年1月，总部位于上海张江科学城，专注于外泌体技术与AI数字孪生在抗衰老领域的研发与应用，致力于打造全球领先的精准抗衰解决方案提供商。
            </p>
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
