"use client";

import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/cv/SectionHeader";
import type { GitHubRepo } from "@/lib/github";
import type { Locale } from "@/lib/locale";
import type { CVData } from "@/lib/cv-data";

interface RepoGridProps {
  repos: GitHubRepo[];
  locale: Locale;
  data: CVData;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#888888",
  "C#": "#178600",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Vue: "#41b883",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Svelte: "#ff3e00",
  Lua: "#8a9bff",
  Shell: "#89e051",
};

export default function RepoGrid({ repos, locale, data }: RepoGridProps) {
  const reducedMotion = useReducedMotion();
  const t = data.projects;

  return (
    <section id="projects" className="cv-section">
      <SectionHeader number="03" label={data.sections.projects} />

      {repos.length === 0 ? (
        <p className="text-sm text-[color:var(--color-text-muted)]">{t.emptyState}</p>
      ) : (
        <ul className="flex flex-col">
          {repos.map((repo, index) => (
            <motion.li
              key={repo.html_url}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 0.68, 0.2, 1] }}
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group grid gap-3 border-t border-[color:var(--color-border)] py-7 first:border-t-0 md:grid-cols-[260px_1fr_auto] md:items-center md:gap-10"
              >
                <div className="cv-row-meta">
                  <strong className="inline-flex items-center gap-2">
                    {repo.language && (
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{
                          backgroundColor:
                            LANGUAGE_COLORS[repo.language] || "var(--color-text-muted)",
                        }}
                      />
                    )}
                    <span>{repo.language || "—"}</span>
                  </strong>
                  <span>{formatDate(repo.updated_at, locale, t)}</span>
                </div>

                <div>
                  <h3 className="cv-row-title flex items-center gap-3 transition group-hover:text-[color:var(--color-accent-strong)]">
                    {repo.name}
                  </h3>
                  <p className="cv-row-desc">
                    {repo.description || t.noDescription}
                  </p>
                  <div className="mt-3 flex items-center gap-5 text-xs text-[color:var(--color-text-muted)]">
                    <span className="inline-flex items-center gap-1.5">
                      <Star size={12} />
                      {formatCount(repo.stargazers_count)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GitFork size={12} />
                      {formatCount(repo.forks_count)}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={24}
                  className="hidden shrink-0 text-[color:var(--color-text-muted)] transition group-hover:text-[color:var(--color-accent-strong)] md:block"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}

function formatCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

function formatDate(
  dateStr: string,
  locale: Locale,
  t: CVData["projects"]
): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const prefix = t.updated + " ";
  if (days === 0) return `${prefix}${t.today}`;
  if (days === 1) return `${prefix}${t.yesterday}`;
  if (days < 7)
    return locale === "zh"
      ? `${prefix}${days}${t.day}${t.ago}`
      : `${prefix}${days}${t.day}${t.ago}`;
  if (days < 30)
    return locale === "zh"
      ? `${prefix}${Math.floor(days / 7)}${t.week}${t.ago}`
      : `${prefix}${Math.floor(days / 7)}${t.week}${t.ago}`;
  return locale === "zh"
    ? `${prefix}${Math.floor(days / 30)}${t.month}${t.ago}`
    : `${prefix}${Math.floor(days / 30)}${t.month}${t.ago}`;
}
