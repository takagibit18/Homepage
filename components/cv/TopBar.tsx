"use client";

import type { CVData } from "@/lib/cv-data";
import type { Locale } from "@/lib/locale";
import type { GitHubUser } from "@/lib/github";

interface TopBarProps {
  user: GitHubUser | null;
  data: CVData;
  locale: Locale;
  onLocaleChange: (l: Locale) => void;
}

export default function TopBar({ user, data, locale, onLocaleChange }: TopBarProps) {
  const displayName = user?.name || user?.login || data.footer.author;

  return (
    <div className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/85 backdrop-blur">
      <div className="cv-container flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="cv-status-dot" aria-hidden />
          <span className="text-xs text-[color:var(--color-text-strong)] md:text-sm">{displayName}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="mr-1 hidden items-center gap-1 rounded-full border border-[color:var(--color-border)] p-0.5 text-xs md:flex">
            <button
              type="button"
              onClick={() => onLocaleChange("en")}
              aria-pressed={locale === "en"}
              className={`focus-ring w-[2.75rem] shrink-0 rounded-full px-2 py-1 text-center transition ${
                locale === "en"
                  ? "bg-[color:var(--color-text-strong)] text-[color:var(--color-bg)]"
                  : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text-strong)]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLocaleChange("zh")}
              aria-pressed={locale === "zh"}
              className={`focus-ring w-[2.75rem] shrink-0 rounded-full px-2 py-1 text-center transition ${
                locale === "zh"
                  ? "bg-[color:var(--color-text-strong)] text-[color:var(--color-bg)]"
                  : "text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text-strong)]"
              }`}
            >
              中
            </button>
          </div>

          <a href="#contact" className="cv-cta hidden text-xs md:inline-flex">
            {data.nav.contactMe}
          </a>
        </div>
      </div>
    </div>
  );
}
