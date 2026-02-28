"use client";

import { useParams } from "next/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PageHero } from "@/components/ui/PageHero";
import { Link } from "@/i18n/navigation";
import { newsItems } from "@/lib/newsData";

const categoryLabel: Record<string, string> = {
  company: "公司动态",
  industry: "行业资讯",
  articles: "文章发表",
};

export default function NewsDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <PageHero size="sm" align="left">
          <Link href="/news" className="mb-6 inline-block text-sm text-white/60 hover:text-white">
            ← 返回新闻列表
          </Link>
        </PageHero>
        <SectionWrapper dark>
          <p className="py-12 text-center text-gray-light">文章不存在</p>
        </SectionWrapper>
      </>
    );
  }

  return (
    <>
      <PageHero size="sm" align="left">
        <Link href="/news" className="mb-6 inline-block text-sm text-white/60 hover:text-white">
          ← 返回新闻列表
        </Link>
      </PageHero>

      <SectionWrapper dark>
        <article className="mx-auto max-w-3xl">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {categoryLabel[article.category] ?? article.category}
          </span>
          <h1 className="mt-4 text-heading text-white">{article.titleZh}</h1>
          <p className="mt-2 text-sm text-gray-light">{article.date}</p>

          {article.image && (
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={article.image}
                alt={article.titleZh}
                className="w-full object-cover"
              />
            </div>
          )}

          <div className="mt-8 space-y-4 text-body-lg leading-relaxed text-gray-light">
            {article.contentZh.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      </SectionWrapper>
    </>
  );
}
