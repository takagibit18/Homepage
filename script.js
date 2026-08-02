(function () {
  "use strict";

  document.documentElement.classList.add("js");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const I18N = {
    en: {
      "meta.title": "Sean | AI Agent & LLM Application Developer",
      "meta.description": "Sean is a computer science undergraduate building reliable AI agents, RAG systems and evaluation workflows.",
      "menu.open": "Open navigation menu",
      "menu.close": "Close navigation menu",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.work": "Work",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.contact": "Contact",
      "nav.cta": "GitHub",
      "hero.title1": "I build ",
      "hero.title2": "reliable agents",
      "hero.title3": " for real work.",
      "hero.metaBased": "Based in",
      "hero.metaBasedVal": "Beijing, China",
      "hero.metaFocus": "Focus",
      "hero.metaFocusVal": "Agent systems / RAG evaluation",
      "hero.metaStatus": "Status",
      "hero.metaStatusVal": "CS undergraduate, class of 2027",
      "hero.cta": "View selected work",
      "proof.label": "Retrieval evaluation",
      "proof.case": "View project",
      "proof.summary": "Best run with hybrid retrieval and reranking.",
      "proof.methodsLabel": "Methods",
      "proof.methods": "BM25 / Hybrid / Rerank",
      "proof.evalLabel": "Evaluation",
      "proof.eval": "Golden queries / MRR",
      "proof.outputLabel": "Output",
      "proof.output": "Reproducible comparison",
      "marquee.1": "Agent Workflows",
      "marquee.2": "LLM Applications",
      "marquee.3": "RAG & Evaluation",
      "marquee.4": "AI Backend",
      "marquee.5": "Tool Calling",
      "marquee.6": "Build in Public",
      "about.label": "About",
      "about.title1": "I build ",
      "about.title2": "practical AI applications",
      "about.title3": " with agents, retrieval, backend engineering and evaluation.",
      "about.p1": "I'm Sean, a computer science undergraduate at Minzu University of China and an AI application engineering intern. I turn ideas into working systems with Python, FastAPI, structured outputs, tool calling and retrieval pipelines.",
      "about.p2": "My focus is engineering reliability: controllable workflows, measurable retrieval quality, useful traces and clear failure handling. I document the work through project notes and public builds.",
      "about.tag1": "Agent engineering",
      "about.tag2": "Evaluation-driven",
      "about.tag3": "Public project notes",
      "about.stat1": "GitHub commits in six months",
      "about.stat2": "Technical content views",
      "about.stat3": "Recall@10 in the strongest retrieval run",
      "skills.title1": "Capabilities for ",
      "skills.title2": "reliable LLM applications",
      "skills.title3": ", from orchestration to retrieval and evaluation.",
      "skills.1.title": "LLM Application Engineering",
      "skills.1.desc": "LLM features with streaming responses, structured outputs, tool calling and context-aware prompts.",
      "skills.1.li2": "Streaming and structured output",
      "skills.1.li3": "Prompt and context engineering",
      "skills.1.li4": "Function and tool calling",
      "skills.2.title": "Agent Workflow Engineering",
      "skills.2.desc": "Controllable agent loops with explicit state, tool boundaries, structured handoffs and failure handling.",
      "skills.2.li1": "ReAct and agent loops",
      "skills.2.li2": "State and structured handoffs",
      "skills.2.li3": "Tool registry and safety",
      "skills.3.title": "RAG and Data Pipelines",
      "skills.3.desc": "Document extraction, retrieval and evaluation pipelines for grounded, source-traced answers.",
      "skills.3.li2": "Document extraction and cleaning",
      "skills.3.li3": "Hybrid search and reranking",
      "skills.3.li4": "Grounding and citations",
      "skills.4.title": "AI Backend and Evaluation",
      "skills.4.desc": "FastAPI services, asynchronous workflows, schemas, tests and evaluation for dependable AI applications.",
      "skills.4.li2": "Async task workflows",
      "skills.4.li3": "Golden evals and traces",
      "work.label": "Selected work",
      "work.title1": "Agents, workflows and evaluations ",
      "work.title2": "built through hands-on projects.",
      "work.1.desc": "A server-side AI profile assistant with streaming responses, public-quota guardrails and context-engineered prompts over a personal knowledge base.",
      "work.2.desc": "An advisory PR review agent that looks beyond CI for behavioral regressions, missing tests, boundary cases and maintainability risks.",
      "work.3.desc": "A batch CV tailoring workflow that clusters job descriptions, extracts evidence from a base resume and generates structured, traceable variants.",
      "work.4.name": "RAG Retrieval Evaluation",
      "work.4.desc": "A reproducible comparison of BM25, hybrid retrieval and reranking using golden queries, MRR and Recall@10. The strongest run reached 0.940 Recall@10.",
      "experience.label": "Experience",
      "experience.title1": "Engineering ",
      "experience.title2": "AI applications",
      "experience.title3": " for enterprise use.",
      "experience.1.year": "2026 - Present",
      "experience.1.company": "National Data Group",
      "experience.1.desc": "AI Application Development Intern. Built chatbot evaluation suites, RAG pipelines and data-integration prototypes for enterprise AI applications.",
      "education.title1": "Computer science education, focused on ",
      "education.title2": "Agent systems.",
      "education.1.school": "Minzu University of China",
      "education.1.desc": "B.Eng in Computer Science, GPA 3.6. Coursework spans AI, databases and distributed systems, with IELTS 7.0 for technical reading and writing.",
      "contact.title1": "Let's",
      "contact.title2": "connect.",
      "contact.ctaBtn": "View GitHub",
      "contact.link1": "Live project",
      "contact.link2": "Live project",
      "footer.tagline": "CS undergraduate building reliable Agent and LLM applications.",
      "footer.credit": "Projects, evaluation and iteration."
    },
    zh: {
      "meta.title": "Sean | Agent 与 LLM 应用开发",
      "meta.description": "计算机本科生 Sean，专注可靠的 Agent 应用、RAG 系统与评估工作流。",
      "menu.open": "打开导航菜单",
      "menu.close": "关闭导航菜单",
      "nav.about": "关于",
      "nav.skills": "技能",
      "nav.work": "项目",
      "nav.experience": "经历",
      "nav.education": "教育",
      "nav.contact": "联系",
      "nav.cta": "GitHub",
      "hero.title1": "我构建",
      "hero.title2": "可靠的 Agent 应用",
      "hero.title3": "。",
      "hero.metaBased": "所在地",
      "hero.metaBasedVal": "中国，北京",
      "hero.metaFocus": "方向",
      "hero.metaFocusVal": "Agent 系统 / RAG 评估",
      "hero.metaStatus": "身份",
      "hero.metaStatusVal": "计算机本科，2027 届",
      "hero.cta": "查看精选项目",
      "proof.label": "检索评估结果",
      "proof.case": "查看项目",
      "proof.summary": "混合检索与重排序方案的最佳结果。",
      "proof.methodsLabel": "方法",
      "proof.methods": "BM25 / 混合检索 / 重排",
      "proof.evalLabel": "评估",
      "proof.eval": "Golden Query / MRR",
      "proof.outputLabel": "产出",
      "proof.output": "可复现对比实验",
      "marquee.1": "Agent 工作流",
      "marquee.2": "LLM 应用",
      "marquee.3": "RAG 与评估",
      "marquee.4": "AI 后端",
      "marquee.5": "工具调用",
      "marquee.6": "公开记录",
      "about.label": "关于",
      "about.title1": "我构建",
      "about.title2": "可落地的 AI 应用",
      "about.title3": "，覆盖 Agent、检索、后端工程与评估。",
      "about.p1": "我是 Sean，中央民族大学计算机科学与技术专业本科生，也是一名 AI 应用开发实习生。我使用 Python、FastAPI、结构化输出、工具调用和检索管线，把想法实现为可运行的系统。",
      "about.p2": "我的重点是工程可靠性：可控的工作流、可度量的检索质量、有效的 Trace 和清晰的异常处理。我通过项目笔记与公开实践持续记录这些工作。",
      "about.tag1": "Agent 工程",
      "about.tag2": "评估驱动",
      "about.tag3": "公开项目笔记",
      "about.stat1": "半年 GitHub 提交数",
      "about.stat2": "技术内容累计浏览量",
      "about.stat3": "最佳检索实验 Recall@10",
      "skills.title1": "面向",
      "skills.title2": "可靠 LLM 应用",
      "skills.title3": "的完整能力，从编排到检索与评估。",
      "skills.1.title": "LLM 应用工程",
      "skills.1.desc": "实现流式响应、结构化输出、工具调用与上下文工程等 LLM 应用能力。",
      "skills.1.li2": "流式响应与结构化输出",
      "skills.1.li3": "提示词与上下文工程",
      "skills.1.li4": "函数与工具调用",
      "skills.2.title": "Agent 工作流工程",
      "skills.2.desc": "构建状态明确、工具边界清晰、交接结构化并具备异常处理能力的 Agent 循环。",
      "skills.2.li1": "ReAct 与 Agent Loop",
      "skills.2.li2": "状态与结构化交接",
      "skills.2.li3": "工具注册与安全控制",
      "skills.3.title": "RAG 与数据管线",
      "skills.3.desc": "构建文档抽取、检索与评估管线，为回答提供可验证、可追溯的证据来源。",
      "skills.3.li2": "文档抽取与清洗",
      "skills.3.li3": "混合检索与重排序",
      "skills.3.li4": "溯源与引用",
      "skills.4.title": "AI 后端与评估",
      "skills.4.desc": "使用 FastAPI、异步工作流、数据模型、测试和评估保障 AI 应用的可靠性。",
      "skills.4.li2": "异步任务工作流",
      "skills.4.li3": "Golden Eval 与 Trace",
      "work.label": "精选项目",
      "work.title1": "一组来自真实项目的",
      "work.title2": "Agent、工作流与评估实践。",
      "work.1.desc": "服务端 AI 资料助手，包含流式响应、公共配额护栏，以及基于个人知识库的上下文工程提示。",
      "work.2.desc": "面向 Pull Request 的建议型代码审查 Agent，补充 CI 难以覆盖的行为回归、测试缺口、边界条件与可维护性风险。",
      "work.3.desc": "批量简历定制工作流：聚类职位描述，从基础简历提取证据，并生成结构化、可追溯的定制版本。",
      "work.4.name": "RAG 检索评估",
      "work.4.desc": "使用 Golden Query、MRR 与 Recall@10，对 BM25、混合检索和重排序进行可复现实验。最佳方案 Recall@10 达到 0.940。",
      "experience.label": "工作经历",
      "experience.title1": "面向企业场景的",
      "experience.title2": "AI 应用工程",
      "experience.title3": "。",
      "experience.1.year": "2026 - 至今",
      "experience.1.company": "国家数据集团",
      "experience.1.desc": "AI 应用开发实习生。参与构建智能问答评测体系、RAG 管线与数据集成原型。",
      "education.title1": "计算机科学本科，专注",
      "education.title2": "Agent 系统。",
      "education.1.school": "中央民族大学",
      "education.1.desc": "计算机科学与技术专业，GPA 3.6。课程覆盖 AI、数据库与分布式系统；雅思 7.0，可直接阅读论文并撰写技术文档。",
      "contact.title1": "聊聊",
      "contact.title2": "项目。",
      "contact.ctaBtn": "查看 GitHub",
      "contact.link1": "在线项目",
      "contact.link2": "在线项目",
      "footer.tagline": "计算机本科生，专注可靠的 Agent 与 LLM 应用。",
      "footer.credit": "项目、评估与持续迭代。"
    }
  };

  let currentLang = "en";
  try {
    const storedLang = localStorage.getItem("sean-lang");
    if (storedLang === "en" || storedLang === "zh") currentLang = storedLang;
  } catch (error) {
    currentLang = "en";
  }

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const pageMain = document.getElementById("main-content");
  const pageFooter = document.querySelector(".footer");
  const mobileBreakpoint = window.matchMedia("(min-width: 1101px)");

  function updateMenuLabel() {
    if (!menuToggle) return;
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-label", I18N[currentLang][isOpen ? "menu.close" : "menu.open"]);
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    currentLang = lang;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = dict["meta.title"];

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dict["meta.description"]);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        element.textContent = dict[key];
      }
    });

    document.querySelectorAll("#langSwitch button[data-lang]").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    updateMenuLabel();
    try {
      localStorage.setItem("sean-lang", lang);
    } catch (error) {
      // The page remains functional when storage is unavailable.
    }
  }

  const langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-lang]");
      if (button && button.dataset.lang !== currentLang) applyLang(button.dataset.lang);
    });
  }

  function setPageInert(inert) {
    [pageMain, pageFooter].forEach((element) => {
      if (element && "inert" in element) element.inert = inert;
    });
  }

  function setMobileMenu(open, options = {}) {
    if (!menuToggle || !mobileMenu) return;
    const restoreFocus = options.restoreFocus !== false;
    mobileMenu.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    setPageInert(open);
    updateMenuLabel();

    if (open) {
      requestAnimationFrame(() => mobileMenu.querySelector("a")?.focus());
    } else if (restoreFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      setMobileMenu(menuToggle.getAttribute("aria-expanded") !== "true");
    });

    mobileMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => setMobileMenu(false, { restoreFocus: false }));
    });

    document.addEventListener("click", (event) => {
      if (!mobileMenu.hidden && !mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        setMobileMenu(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (mobileMenu.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenu(false);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        document.querySelectorAll(".nav a[href], .nav button:not([disabled])")
      ).filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    mobileBreakpoint.addEventListener("change", (event) => {
      if (event.matches) setMobileMenu(false, { restoreFocus: false });
    });
  }

  function initReveals() {
    const elements = document.querySelectorAll(".reveal-up, .reveal-line, .reveal-text");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10%", threshold: 0.08 });

    elements.forEach((element) => observer.observe(element));
  }

  applyLang(currentLang);
  initReveals();
})();
