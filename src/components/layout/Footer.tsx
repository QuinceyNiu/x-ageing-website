"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-tight">
              XIAOLIN X-AGEING
              <span className="ml-2 text-xs font-normal text-gray-400">小龄生物</span>
            </h3>
            <p className="mt-2 text-sm text-gray-light">{t("company")}</p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-light transition-colors hover:text-white"
              >
                企业介绍
              </Link>
              <Link
                href="/products"
                className="block text-gray-light transition-colors hover:text-white"
              >
                产品与解决方案
              </Link>
            </div>
            <div className="space-y-2">
              <Link
                href="/news"
                className="block text-gray-light transition-colors hover:text-white"
              >
                新闻资讯
              </Link>
              <Link
                href="/contact"
                className="block text-gray-light transition-colors hover:text-white"
              >
                联系我们
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-2 text-sm text-gray-light">
            <p>{t("privacy")} | {t("legal")} | {t("disclaimer")}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-gray-light">
          <p>{t("icp")}</p>
          <p className="mt-1">{t("copyright", { year: String(year) })}</p>
        </div>
      </div>
    </footer>
  );
}
