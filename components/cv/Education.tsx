import SectionHeader from "./SectionHeader";
import type { CVData } from "@/lib/cv-data";

export default function Education({ data }: { data: CVData }) {
  return (
    <section id="education" className="cv-section">
      <SectionHeader number="05" label={data.sections.education} />
      <div className="flex flex-col">
        {data.education.map((edu, i) => (
          <article key={i} className="cv-row">
            <div className="cv-row-meta">
              <strong>{edu.school}</strong>
              <span>{edu.period}</span>
            </div>
            <div>
              <h3 className="cv-row-title">{edu.title}</h3>
              <p className="cv-row-desc">{edu.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
