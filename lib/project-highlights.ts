import type { Locale } from "@/lib/locale";

export type FeaturedProject = {
  title: string;
  href: string;
  language: string;
  repoAliases: string[];
  description: Record<Locale, string>;
};

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "shotgunCV",
    href: "https://github.com/takagibit18/shotgunCV",
    language: "Python",
    repoAliases: ["shotguncv"],
    description: {
      en: "A pipeline-first AI Resume Ops project for high-volume applications. It batches JD parsing, generates resume variants, scores and ranks them, and outputs application strategy so users can make better bulk job-search decisions.",
      zh: "面向海投场景的 Pipeline-first AI Resume Ops 项目，批量解析多岗位 JD，生成简历变体，进行评分与排序，并输出投递策略，帮助用户做更好的批量求职决策。",
    },
  },
  {
    title: "Mergewarden",
    href: "https://github.com/takagibit18/MergeWarden",
    language: "Python",
    repoAliases: ["mergewarden", "review-debug-agent", "debug-agent"],
    description: {
      en: "An LLM-powered code review and debugging assistant for teams and local pipelines. It turns diffs and failure signals into graded review findings and verifiable debugging steps, with containerized deployment and CI integration.",
      zh: "面向团队与本机流水线的 LLM 代码审查与调试助手，将变更集和失败信号转化为分级审查结论与可验证的调试步骤，并支持容器化部署与 CI 集成。",
    },
  },
];
