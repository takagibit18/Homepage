"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { CVData } from "@/lib/cv-data";

interface HeroProps {
  data: CVData;
}

export default function Hero({ data }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const EASE = [0.22, 0.68, 0.2, 1] as const;

  const fadeUp = (delay: number) =>
    reducedMotion
      ? { initial: false as const, animate: {} }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: EASE },
        };

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="flex flex-col gap-8 md:gap-12">
        <motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-3">
          <span className="cv-badge">{data.hero.yearsBadge}</span>
          <span className="cv-badge cv-badge--accent">{data.hero.intent}</span>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-end md:gap-16">
          <div className="flex flex-col gap-3">
            <motion.h1
              {...fadeUp(0.05)}
              className="cv-hero-name"
              aria-label={data.hero.name}
            >
              {data.hero.name}
            </motion.h1>

            <motion.span
              {...fadeUp(0.15)}
              className="text-xs md:text-sm uppercase tracking-[0.35em] text-[color:var(--color-text-muted)]"
            >
              {data.hero.nameLatin}
            </motion.span>

            <motion.p
              {...fadeUp(0.25)}
              className="cv-heading-sm mt-4 text-[color:var(--color-text-strong)]"
            >
              {data.hero.role}{" "}
              <span className="text-[color:var(--color-text-muted)]">
                {data.hero.location}
              </span>
            </motion.p>
          </div>

          <motion.blockquote
            {...fadeUp(0.35)}
            className="cv-quote border-l border-[color:var(--color-border-strong)] pl-5"
          >
            &ldquo; {data.hero.quote} &rdquo;
          </motion.blockquote>
        </div>

        <motion.div {...fadeUp(0.45)} className="flex flex-wrap items-center gap-3">
          <a href="/cv.pdf" className="cv-cta cv-cta-primary focus-ring text-sm">
            {data.nav.downloadCv}
          </a>
          <a href="#projects" className="cv-cta cv-cta--ghost focus-ring text-sm">
            {data.sections.projects}
            <ArrowDown size={14} />
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.55)}
          className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]"
        >
          <ArrowDown size={14} />
          <span>{data.nav.scroll}</span>
        </motion.div>
      </div>
    </section>
  );
}
