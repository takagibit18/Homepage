"use client";

import type { ContributionDay } from "@/lib/contributions";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/cv/SectionHeader";
import type { Locale } from "@/lib/locale";
import type { CVData } from "@/lib/cv-data";

interface HeatmapProps {
  contributions: ContributionDay[];
  locale: Locale;
  data: CVData;
}

const MONTHS: Record<Locale, string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  zh: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
};
const DAYS: Record<Locale, string[]> = {
  en: ["Mon", "Wed", "Fri"],
  zh: ["一", "三", "五"],
};
const CELL_SIZE = 11;
const GAP = 3;

function getColor(count: number): string {
  if (count === 0) return "rgba(244, 234, 216, 0.05)";
  if (count <= 3) return "#4a3b1f";
  if (count <= 7) return "#8a6b2c";
  if (count <= 12) return "#c39344";
  return "#eac977";
}

export default function ContributionHeatmap({ contributions, locale, data }: HeatmapProps) {
  const reducedMotion = useReducedMotion();
  const t = data.activity;

  const countMap = new Map<string, number>();
  for (const c of contributions) {
    countMap.set(c.date, c.count);
  }

  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);
  const dayOfWeek = startDate.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startDate.setDate(startDate.getDate() + daysUntilMonday);

  const weeks: Date[][] = [];
  const current = new Date(startDate);
  for (let w = 0; w < 52; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  const monthLabels: { week: number; label: string }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < 52; w++) {
    const firstDay = weeks[w][0];
    if (firstDay.getMonth() !== lastMonth) {
      monthLabels.push({ week: w, label: MONTHS[locale][firstDay.getMonth()] });
      lastMonth = firstDay.getMonth();
    }
  }

  const totalContributions = contributions.reduce((sum, c) => sum + c.count, 0);

  return (
    <section id="activity" className="cv-section">
      <SectionHeader number="04" label={data.sections.activity} />

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.95, ease: [0.22, 0.68, 0.2, 1] }}
      >
        <p className="cv-heading-lg mb-8">{t.total(totalContributions.toLocaleString())}</p>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-[680px]">
            <div className="flex mb-1 relative" style={{ height: 16 }}>
              {monthLabels.map(({ week, label }, i) => (
                <span
                  key={i}
                  className="absolute text-[10px] text-[color:var(--color-text-muted)]"
                  style={{
                    left: week * (CELL_SIZE + GAP) + 28,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex">
              <div className="flex flex-col gap-[3px] pr-1 mr-1">
                {[0, 1, 2, 3, 4, 5, 6].map((rowIndex) => (
                  <div
                    key={rowIndex}
                    className="text-[10px] leading-none text-[color:var(--color-text-muted)]"
                    style={{ height: CELL_SIZE }}
                  >
                    {rowIndex < 6 && rowIndex % 2 === 0 ? DAYS[locale][rowIndex / 2] : ""}
                  </div>
                ))}
              </div>

              <div className="flex gap-[3px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[3px]">
                    {week.map((date) => {
                      const dateStr = date.toISOString().slice(0, 10);
                      const count = countMap.get(dateStr) || 0;
                      return (
                        <div
                          key={dateStr}
                          className="rounded-[2px] transition-transform duration-150 ease-out hover:scale-[1.15]"
                          title={
                            locale === "zh"
                              ? `${dateStr} · ${count} 次贡献`
                              : `${count} contributions on ${dateStr}`
                          }
                          style={{
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                            backgroundColor: getColor(count),
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-[color:var(--color-text-muted)]">
              <span>{t.less}</span>
              {[0, 1, 4, 8, 13].map((v) => (
                <div
                  key={v}
                  className="rounded-[2px]"
                  style={{
                    width: CELL_SIZE - 1,
                    height: CELL_SIZE - 1,
                    backgroundColor: getColor(v),
                  }}
                />
              ))}
              <span>{t.more}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
