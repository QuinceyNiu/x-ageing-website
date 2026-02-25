"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export function LanguageToggle({ scrolled }: { scrolled: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggle = () => {
    const next = locale === "zh" ? "en" : "zh";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      onClick={toggle}
      className={cn(
        "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        scrolled
          ? "border-gray-300 text-dark-secondary hover:border-primary hover:text-primary"
          : "border-white/30 text-white/90 hover:border-white hover:text-white"
      )}
    >
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
}
