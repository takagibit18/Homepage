import type { ContributionDay } from "@/lib/contributions";

interface HeatmapProps {
  contributions: ContributionDay[];
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAYS = ["Mon", "Wed", "Fri"];
const CELL_SIZE = 11;
const GAP = 3;

function getColor(count: number): string {
  if (count === 0) return "rgba(255,255,255,0.04)";
  if (count <= 3) return "#0e4429";
  if (count <= 7) return "#006d32";
  if (count <= 12) return "#26a641";
  return "#39d353";
}

export default function ContributionHeatmap({ contributions }: HeatmapProps) {
  // Build a date -> count map
  const countMap = new Map<string, number>();
  for (const c of contributions) {
    countMap.set(c.date, c.count);
  }

  // Generate last 52 weeks of dates
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);
  // Align to Monday
  const dayOfWeek = startDate.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  startDate.setDate(startDate.getDate() + daysUntilMonday);

  // Build 52 columns x 7 rows
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

  // Month labels
  const monthLabels: { week: number; label: string }[] = [];
  let lastMonth = -1;
  for (let w = 0; w < 52; w++) {
    const firstDay = weeks[w][0];
    if (firstDay.getMonth() !== lastMonth) {
      monthLabels.push({ week: w, label: MONTHS[firstDay.getMonth()] });
      lastMonth = firstDay.getMonth();
    }
  }

  const totalContributions = contributions.reduce((sum, c) => sum + c.count, 0);

  return (
    <div className="glass-card p-5 overflow-x-auto">
      <h2 className="text-lg font-semibold text-white/95 mb-4">
        {totalContributions.toLocaleString()} contributions in the last year
      </h2>

      <div className="inline-block min-w-[600px]">
        {/* Month labels */}
        <div className="flex mb-1 relative" style={{ height: 16 }}>
          {monthLabels.map(({ week, label }, i) => (
            <span
              key={i}
              className="absolute text-[10px] text-white/40"
              style={{
                left: week * (CELL_SIZE + GAP) + 24, // +24px for day labels column width
              }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col gap-[3px] pr-1 mr-1" style={{ width: 24 }}>
            {[0, 1, 2, 3, 4, 5, 6].map((rowIndex) => (
              <div
                key={rowIndex}
                className="text-[10px] text-white/40 leading-none"
                style={{ height: CELL_SIZE }}
              >
                {rowIndex % 2 === 0 ? DAYS[rowIndex / 2] : ''}
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((date) => {
                  const dateStr = date.toISOString().slice(0, 10);
                  const count = countMap.get(dateStr) || 0;
                  return (
                    <div
                      key={dateStr}
                      className="heatmap-cell"
                      title={`${count} contributions on ${dateStr}`}
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

        {/* Legend */}
        <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-white/40">
          <span>Less</span>
          {[0, 1, 4, 8, 13].map((v) => (
            <div
              key={v}
              className="heatmap-cell"
              style={{
                width: CELL_SIZE - 1,
                height: CELL_SIZE - 1,
                backgroundColor: getColor(v),
              }}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
