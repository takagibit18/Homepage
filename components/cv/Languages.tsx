import SectionHeader from "./SectionHeader";
import type { CVData } from "@/lib/cv-data";

export default function Languages({ data }: { data: CVData }) {
  return (
    <section id="languages" className="cv-section">
      <SectionHeader number="06" label={data.sections.languages} />
      <div className="grid gap-px border-t border-[color:var(--color-border)] bg-[color:var(--color-border)] md:grid-cols-2">
        {data.languages.map((lang) => (
          <div
            key={lang.name}
            className="flex items-baseline justify-between gap-4 bg-[color:var(--color-bg)] px-1 py-6 md:px-6"
          >
            <h3 className="cv-row-title text-2xl md:text-3xl">{lang.name}</h3>
            <span className="text-sm text-[color:var(--color-text-muted)]">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
