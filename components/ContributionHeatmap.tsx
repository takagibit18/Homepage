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
  zh: ["周一", "周三", "周五"],
};
const WEEKS = 26;
const ROWS = 7;
const WEEK_GRID_WIDTH = `calc(${WEEKS} * var(--hm-cell) + ${WEEKS - 1} * var(--hm-gap))`;
const LABEL_ROW_WIDTH = `calc(var(--hm-week-grid-offset) + ${WEEKS} * var(--hm-cell) + ${WEEKS - 1} * var(--hm-gap))`;

function getColor(count: number): string {
  if (count === 0) return "rgba(244, 234, 216, 0.05)";
  if (count <= 3) return "#4a3b1f";
  if (count <= 7) return "#8a6b2c";
  if (count <= 12) return "#c39344";
  return "#eac977";
}

function getMonthLabelLeft(week: number): string {
  return `calc(var(--hm-week-grid-offset) + ${week} * (var(--hm-cell) + var(--hm-gap)))`;
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
  startDate.setDate(startDate.getDate() - (WEEKS * 7 - 1));
  const dayOfWeek = startDate.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startDate.setDate(startDate.getDate() + daysUntilMonday);

  const weeks: Date[][] = [];
  const current = new Date(startDate);
  for (let weekIndex = 0; weekIndex < WEEKS; weekIndex++) {
    const week: Date[] = [];
    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      week.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    weeks.push(week);
  }

  const monthLabels: { week: number; label: string }[] = [];
  let lastMonth = -1;
  for (let weekIndex = 0; weekIndex < WEEKS; weekIndex++) {
    const firstDay = weeks[weekIndex][0];
    if (firstDay.getMonth() !== lastMonth) {
      monthLabels.push({ week: weekIndex, label: MONTHS[locale][firstDay.getMonth()] });
      lastMonth = firstDay.getMonth();
    }
  }

  const totalContributions = weeks.reduce(
    (sum, week) =>
      sum +
      week.reduce((weekSum, date) => {
        const dateStr = date.toISOString().slice(0, 10);
        return weekSum + (countMap.get(dateStr) || 0);
      }, 0),
    0
  );

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

        <div className="overflow-x-auto pb-1">
          <div className="inline-block w-max">
            <div className="relative mb-1" style={{ height: "var(--hm-month-label-height)", width: LABEL_ROW_WIDTH }}>
              {monthLabels.map(({ week, label }, index) => (
                <span
                  key={index}
                  className="absolute top-0 text-[10px] leading-none text-[color:var(--color-text-muted)]"
                  style={{
                    left: getMonthLabelLeft(week),
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="flex items-start">
              <div className="mr-[var(--hm-gap)] flex w-[var(--hm-day-label-width)] flex-col gap-[var(--hm-gap)]">
                {Array.from({ length: ROWS }, (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="text-[10px] leading-none text-[color:var(--color-text-muted)]"
                    style={{ height: "var(--hm-cell)" }}
                  >
                    {rowIndex < 6 && rowIndex % 2 === 0 ? DAYS[locale][rowIndex / 2] : ""}
                  </div>
                ))}
              </div>

              <div className="flex gap-[var(--hm-gap)]" style={{ width: WEEK_GRID_WIDTH }}>
                {weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[var(--hm-gap)]">
                    {week.map((date) => {
                      const dateStr = date.toISOString().slice(0, 10);
                      const count = countMap.get(dateStr) || 0;
                      return (
                        <div
                          key={dateStr}
                          className="rounded-[2px] transition-transform duration-150 ease-out hover:scale-[1.15]"
                          title={
                            locale === "zh"
                              ? `${dateStr} 有 ${count} 次贡献`
                              : `${count} contributions on ${dateStr}`
                          }
                          style={{
                            width: "var(--hm-cell)",
                            height: "var(--hm-cell)",
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
              {[0, 1, 4, 8, 13].map((value) => (
                <div
                  key={value}
                  className="rounded-[2px]"
                  style={{
                    width: "calc(var(--hm-cell) - 1px)",
                    height: "calc(var(--hm-cell) - 1px)",
                    backgroundColor: getColor(value),
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
