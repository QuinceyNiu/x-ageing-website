import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";
  return {
    title: {
      default: isZh
        ? "X-AGEING | 掌控衰老，优质生命"
        : "X-AGEING | Master Aging, Elevate Life",
      template: isZh ? "%s | X-AGEING" : "%s | X-AGEING",
    },
    description: isZh
      ? "上海小龄生物医药技术有限公司 — 基于外泌体技术与AI数字孪生的精准抗衰解决方案"
      : "Shanghai Xiaoling Biomedical Technology — Precision Anti-Aging Solutions Powered by Exosome Technology & AI Digital Twin",
    keywords: isZh
      ? "外泌体,抗衰老,数字孪生,AI健康管理,精准抗衰,小龄生物,X-AGEING"
      : "exosome,anti-aging,digital twin,AI health,precision anti-aging,X-AGEING",
    alternates: {
      languages: {
        zh: "/zh",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
