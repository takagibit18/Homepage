/* ============================================================
   Sean — Cuberto-style portfolio
   Interactions: i18n, cursor, smooth scroll, reveal, hover
   ============================================================ */
(function () {
  "use strict";

  // Gate CSS reveal-animations behind JS availability: if this script (or the
  // GSAP CDN) never runs, content stays visible instead of stuck at opacity:0.
  document.documentElement.classList.add("js");

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none), (max-width: 900px)").matches;

  /* ---------- i18n dictionary ---------- */
  const I18N = {
    "en": {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.work": "Work",
        "nav.experience": "Work Experience",
        "nav.contact": "Contact",
        "nav.education": "Education",
        "nav.cta": "Get in touch",
        "hero.tag": "CS undergraduate · Open to Agent / LLM opportunities",
        "hero.title1": "AI",
        "hero.title2": "agent",
        "hero.title3": "developer<sup>©</sup>",
        "hero.metaBased": "Based in",
        "hero.metaBasedVal": "Beijing, China",
        "hero.metaFocus": "Focus",
        "hero.metaStatus": "Status",
        "hero.metaStatusVal": "CS Undergraduate · Class of 2027",
        "hero.sectionLabel": "Intro",
        "hero.statement": "I build <em>agents</em> that ship inside real enterprises.",
        "hero.cta": "Get in touch →",
        "hero.scroll": "Scroll",
        "marquee.1": "Agent Workflows",
        "marquee.2": "LLM Applications",
        "marquee.3": "RAG &amp; Evaluation",
        "marquee.4": "AI Backend",
        "marquee.5": "Tool Calling",
        "marquee.6": "Build in Public",
        "about.label": "About",
        "about.title": "I build <em>practical AI applications</em> while studying computer science — connecting agents, retrieval, backend engineering and evaluation.",
        "about.p1": "I'm Sean, a 2027 computer science undergraduate at Minzu University of China, focused on Agent and LLM application development. I turn ideas into working systems with Python, FastAPI, structured outputs, tool calling and retrieval pipelines.",
        "about.p2": "My work centers on engineering reliability rather than model research: designing controllable agent workflows, building RAG and data pipelines, adding evals, traces and guardrails, then iterating through measurable results. I also document AI-native development through Sean's Build Log.",
        "about.tag1": "Agent engineering",
        "about.tag2": "Evaluation driven",
        "about.tag3": "Build in public",
        "about.stat1": "GitHub commits<br/>in 6 months",
        "about.stat2": "Views on<br/>technical content",
        "about.stat3": "Daily tech<br/>stack size",
        "about.stat4": "Iterate until<br/>it's right",
        "skills.label": "Capabilities",
        "skills.title": "From agent workflows to <em>reliable LLM applications</em> — I combine AI capabilities with backend engineering and evaluation.",
        "skills.1.title": "LLM Application Engineering",
        "skills.1.desc": "LLM features with streaming responses, structured outputs, tool calling and context-aware prompts.",
        "skills.1.li2": "Streaming &amp; structured output",
        "skills.1.li3": "Prompt &amp; context engineering",
        "skills.1.li4": "Function / tool calling",
        "skills.2.title": "Agent Workflow Engineering",
        "skills.2.desc": "Controllable agent loops with clear state, tool boundaries, structured handoffs and failure handling.",
        "skills.2.li1": "ReAct &amp; agent loops",
        "skills.2.li2": "State &amp; structured handoffs",
        "skills.2.li3": "Tool registry &amp; safety",
        "skills.3.title": "RAG &amp; Data Pipelines",
        "skills.3.desc": "Document extraction, retrieval and evaluation pipelines for grounded, source-traced answers.",
        "skills.3.li2": "Document extraction &amp; cleaning",
        "skills.3.li3": "Hybrid search &amp; re-ranking",
        "skills.3.li4": "Grounding &amp; citations",
        "skills.4.title": "AI Backend &amp; Evaluation",
        "skills.4.desc": "FastAPI services, asynchronous workflows, schemas, tests and evaluation for dependable AI applications.",
        "skills.4.li1": "FastAPI · Pydantic",
        "skills.4.li2": "asyncio · task workflows",
        "skills.4.li3": "Golden eval · trace",
        "skills.4.li4": "Docker · GitHub Actions",
        "work.label": "Selected work",
        "work.title": "A selection of <em>agents, workflows and evaluations</em> built through hands-on projects.",
        "work.1.desc": "A server-side AI profile assistant with streaming responses, public-quota guardrails and context-engineered prompts over a personal knowledge base.",
        "work.2.name": "MergeWarden",
        "work.2.desc": "An advisory PR review agent that looks beyond CI for behavioral regressions, missing tests, boundary cases and maintainability risks.",
        "work.3.name": "ShotgunCV",
        "work.3.desc": "A batch CV tailoring workflow that clusters job descriptions, extracts evidence from a base résumé and generates structured, traceable variants.",
        "work.4.name": "RAG Retrieval Evaluation",
        "work.4.desc": "A reproducible comparison of BM25, hybrid retrieval and reranking using golden queries, MRR and Recall@10, with the strongest run reaching 0.940 Recall@10.",
        "experience.label": "Work Experience",
        "experience.title": "Engineering <em>AI applications</em> that ship inside enterprises.",
        "experience.1.year": "2026 — Present",
        "experience.1.company": "National Data Group",
        "experience.1.desc": "AI Application Development Intern. Delivered enterprise AI applications end-to-end — building chatbot evaluation suites, RAG pipelines and data-integration prototypes.",
        "education.label": "Education",
        "education.title": "CS undergrad, focused on <em>Agent</em> systems.",
        "education.1.year": "2023 — 2027",
        "education.1.school": "Minzu University of China",
        "education.1.desc": "B.Eng in Computer Science (GPA 3.6). Coursework across AI, databases and distributed systems, with IELTS 7.0 backing strong English for reading papers and writing technical docs.",
        "contact.label": "Get in touch",
        "contact.title1": "Let’s",
        "contact.title2": "connect.",
        "contact.ctaBtn": "VIEW GITHUB",
        "contact.link1": "GitHub",
        "contact.link2": "Live site",
        "footer.tagline": "CS undergraduate · Agent &amp; LLM application developer · Beijing",
        "footer.credit": "Built through projects, evaluation and iteration"
    },
    "zh": {
        "nav.about": "关于",
        "nav.skills": "技能",
        "nav.work": "作品",
        "nav.experience": "工作经历",
        "nav.contact": "联系",
        "nav.education": "教育经历",
        "nav.cta": "联系我",
        "hero.tag": "计算机本科生 · 寻找 Agent / LLM 应用机会",
        "hero.title1": "AI",
        "hero.title2": "智能体",
        "hero.title3": "开发者<sup>©</sup>",
        "hero.metaBased": "所在地",
        "hero.metaBasedVal": "中国 · 北京",
        "hero.metaFocus": "方向",
        "hero.metaStatus": "身份",
        "hero.metaStatusVal": "计算机本科 · 2027 届",
        "hero.sectionLabel": "简介",
        "hero.statement": "我把 <em>agent</em> 做成能上线的企业级系统。",
        "hero.cta": "联系我 →",
        "hero.scroll": "滚动",
        "marquee.1": "Agent 工作流",
        "marquee.2": "LLM 应用",
        "marquee.3": "RAG 与评估",
        "marquee.4": "AI 后端",
        "marquee.5": "工具调用",
        "marquee.6": "公开构建",
        "about.label": "关于",
        "about.title": "我在学习计算机科学的同时构建<em>可落地的 AI 应用</em> —— 连接 Agent、检索、后端工程与评估。",
        "about.p1": "我是 Sean，中央民族大学计算机科学与技术专业 2027 届本科生，专注于 Agent 与 LLM 应用开发。我使用 Python、FastAPI、结构化输出、工具调用和检索管线，把想法实现为可运行的系统。",
        "about.p2": "我的重点不是模型算法研究，而是 AI 应用的工程可靠性：设计可控的 Agent 工作流，构建 RAG 与数据管线，补充评估、Trace 和安全护栏，再通过指标持续迭代。我也通过「Sean 的构建日志」记录 AI Native 开发与项目复盘。",
        "about.tag1": "Agent 工程",
        "about.tag2": "评估驱动",
        "about.tag3": "公开构建",
        "about.stat1": "半年<br/>GitHub 提交数",
        "about.stat2": "技术内容<br/>累计播放",
        "about.stat3": "日常技术栈<br/>数量",
        "about.stat4": "迭代直到<br/>满意",
        "skills.label": "能力",
        "skills.title": "从 Agent 工作流到<em>可靠的 LLM 应用</em> —— 我将 AI 能力与后端工程、评估体系结合。",
        "skills.1.title": "LLM 应用工程",
        "skills.1.desc": "实现流式响应、结构化输出、工具调用与上下文工程等 LLM 应用能力。",
        "skills.1.li2": "流式与结构化输出",
        "skills.1.li3": "提示词与上下文工程",
        "skills.1.li4": "函数 / 工具调用",
        "skills.2.title": "Agent 工作流工程",
        "skills.2.desc": "构建边界清晰、状态可控、交接结构化并具备异常处理能力的 Agent 循环。",
        "skills.2.li1": "ReAct 与 Agent Loop",
        "skills.2.li2": "状态与结构化交接",
        "skills.2.li3": "工具注册与安全控制",
        "skills.3.title": "RAG 与数据管线",
        "skills.3.desc": "构建文档抽取、检索与评估管线，为回答提供可验证、可追踪的证据来源。",
        "skills.3.li2": "文档抽取与清洗",
        "skills.3.li3": "混合检索与重排序",
        "skills.3.li4": "溯源与引用",
        "skills.4.title": "AI 后端与评估",
        "skills.4.desc": "使用 FastAPI、异步工作流、数据模型、测试和评估保障 AI 应用的可维护性。",
        "skills.4.li1": "FastAPI · Pydantic",
        "skills.4.li2": "asyncio · 任务工作流",
        "skills.4.li3": "Golden Eval · Trace",
        "skills.4.li4": "Docker · GitHub Actions",
        "work.label": "精选项目",
        "work.title": "一组通过真实项目完成的<em>Agent、工作流与评估实践</em>。",
        "work.1.desc": "服务端 AI 资料助手 —— 流式响应、公共配额护栏，以及基于个人知识库的上下文工程提示。",
        "work.2.name": "MergeWarden",
        "work.2.desc": "面向 Pull Request 的建议型代码审查 Agent，补充 CI 难以覆盖的行为回归、测试缺口、边界条件与可维护性风险。",
        "work.3.name": "ShotgunCV",
        "work.3.desc": "批量简历定制工作流：聚类职位描述，从基础简历提取证据，并生成结构化、可追踪的定制版本。",
        "work.4.name": "RAG 检索评估",
        "work.4.desc": "使用 Golden Query、MRR 与 Recall@10，对 BM25、混合检索和重排序进行可复现实验；最佳方案 Recall@10 达到 0.940。",
        "experience.label": "工作经历",
        "experience.title": "在企业内部真正跑起来的 <em>AI 应用工程</em>。",
        "experience.1.year": "2026 — 至今",
        "experience.1.company": "国家数据集团",
        "experience.1.desc": "AI 应用开发实习生。端到端参与企业级 AI 应用落地——搭建智能问答评测体系、RAG 管线与数据集成原型。",
        "education.label": "教育经历",
        "education.title": "计算机科学本科，主攻 <em>Agent</em> 方向。",
        "education.1.year": "2023 — 2027",
        "education.1.school": "中央民族大学",
        "education.1.desc": "计算机科学工学学士（GPA 3.6）。课程覆盖 AI、数据库与分布式系统；雅思 7.0，英文可直接阅读论文、撰写技术文档。",
        "contact.label": "联系我",
        "contact.title1": "保持",
        "contact.title2": "联系。",
        "contact.ctaBtn": "查看 GITHUB",
        "contact.link1": "GitHub",
        "contact.link2": "在线站点",
        "footer.tagline": "计算机本科生 · Agent 与 LLM 应用开发者 · 北京",
        "footer.credit": "通过项目、评估与迭代持续构建"
    }
};

  let currentLang = "en";
  try {
    const stored = localStorage.getItem("sean-lang");
    if (stored === "en" || stored === "zh") currentLang = stored;
  } catch (e) {}

  function applyLang(lang, animate) {
    const dict = I18N[lang] || I18N.en;
    const swap = () => {
      currentLang = lang;
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && dict[key] != null) el.innerHTML = dict[key];
      });
      document.querySelectorAll("#langSwitch button").forEach((b) => {
        b.classList.toggle("is-active", b.dataset.lang === lang);
      });
      try { localStorage.setItem("sean-lang", lang); } catch (e) {}
      // refresh ScrollTrigger positions after the fade-in, once text reflow settled
      if (typeof ScrollTrigger !== "undefined") {
        setTimeout(() => ScrollTrigger.refresh(), 160);
      }
    };
    // Fade the page out, swap text, fade back in — avoids an abrupt layout jump
    if (animate && !prefersReduced) {
      document.body.classList.add("lang-fading");
      setTimeout(() => {
        swap();
        document.body.classList.remove("lang-fading");
      }, 190);
    } else {
      swap();
    }
  }

  // Apply immediately to avoid flash
  applyLang(currentLang, false);

  // Bind switcher (after DOM is ready — script is at body end)
  const langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-lang]");
      if (!btn) return;
      const lang = btn.dataset.lang;
      if (lang !== currentLang) applyLang(lang, true);
    });
  }

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loader");
  const loaderBar = document.getElementById("loaderBar");
  const loaderCount = document.getElementById("loaderCount");

  function runLoader(done) {
    if (prefersReduced) {
      if (loader) loader.style.display = "none";
      done();
      return;
    }
    let pct = 0;
    const tick = () => {
      const step = Math.random() * 12 + 4;
      pct = Math.min(100, pct + step);
      if (loaderBar) loaderBar.style.width = pct + "%";
      if (loaderCount) loaderCount.textContent = Math.floor(pct);
      if (pct < 100) {
        setTimeout(tick, 80 + Math.random() * 120);
      } else {
        setTimeout(() => {
          if (loader) {
            loader.classList.add("is-done");
            setTimeout(() => { loader.style.display = "none"; }, 600);
          }
          done();
        }, 300);
      }
    };
    tick();
  }

  /* ---------- Custom cursor ---------- */
  const cursor = document.getElementById("cursor");
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let cx = mx, cy = my;

  function onPointerMove(e) {
    mx = e.clientX; my = e.clientY;
  }
  if (!isTouch && cursor) {
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    function rafCursor() {
      // Gentle smoothing so the small white dot doesn't jitter
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      // Position via left/top (no transition → instant follow).
      // The scale on hover uses CSS transform + transition for the morph.
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
      requestAnimationFrame(rafCursor);
    }
    rafCursor();

    const hoverSelector = "a, button, [data-hover]";
    document.addEventListener("pointerover", (e) => {
      if (e.target.closest(hoverSelector)) cursor.classList.add("is-hover");
    });
    document.addEventListener("pointerout", (e) => {
      if (e.target.closest(hoverSelector)) cursor.classList.remove("is-hover");
    });
  }

  /* ---------- Smooth scroll (Lenis) ---------- */
  let lenis = null;
  if (!prefersReduced && typeof Lenis !== "undefined") {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      smoothTouch: false,
    });
    // Single driver: use GSAP ticker if available (keeps Lenis + ScrollTrigger in lockstep),
    // otherwise fall back to a plain rAF loop. Never both — driving lenis.raf() twice per
    // frame makes the internal time delta double-count, which is exactly the "snap at the
    // end of inertia" jitter you can see.
    if (typeof gsap !== "undefined") {
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const rafLenis = (time) => { lenis.raf(time); requestAnimationFrame(rafLenis); };
      requestAnimationFrame(rafLenis);
    }

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const id = a.getAttribute("href");
        if (id.length > 1) {
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            // -80 clears the fixed nav (~70px tall when scrolled)
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
          }
        }
      });
    });
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("mobileMenu");

  function setMenuOpen(open) {
    if (!burger || !mobileMenu) return;
    burger.classList.toggle("is-open", open);
    mobileMenu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (lenis) { open ? lenis.stop() : lenis.start(); }
  }
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      setMenuOpen(!mobileMenu.classList.contains("is-open"));
    });
    mobileMenu.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", () => setMenuOpen(false));
    });
  }

  /* ---------- GSAP + ScrollTrigger ---------- */
  function revealAllInstant() {
    document.querySelectorAll(".reveal-up, .reveal-text, .reveal-line em")
      .forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
  }

  function initReveals() {
    // Reduced motion OR GSAP CDN failed → show everything immediately,
    // never leave content stuck at opacity:0.
    if (prefersReduced || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      revealAllInstant();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    if (lenis) {
      // Lenis is already driven by gsap.ticker (set up at init).
      // Here we only wire scroll events to ScrollTrigger so trigger positions stay in sync.
      lenis.on("scroll", ScrollTrigger.update);
    }

    gsap.utils.toArray(".reveal-up").forEach((el) => {
      gsap.fromTo(el,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        }
      );
    });

    gsap.utils.toArray(".reveal-text").forEach((el) => {
      const section = el.closest("section");
      gsap.fromTo(el,
        { yPercent: 110 },
        {
          yPercent: 0, duration: 1.2, ease: "power4.out",
          scrollTrigger: section ? { trigger: section, start: "top 80%" } : undefined,
        }
      );
    });

    /* Note: the Hero C meta items use CSS fadeUp (see styles.css) for their
       entrance so they stay visible on first paint. A GSAP fromTo here would
       set inline opacity:0 with a delay and override the CSS animation's final
       state, causing a flicker — so we intentionally do NOT animate them. */

    gsap.utils.toArray(".stat-num").forEach((el) => {
      const finalText = el.textContent;
      const match = finalText.match(/^(\d+|∞)/);
      if (!match) return;
      // "∞" can't count up — give it a gentle fade + scale entrance instead,
      // matching the rhythm of the numeric count-ups.
      if (match[0] === "∞") {
        gsap.fromTo(el,
          { scale: 0.4, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1.1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
        return;
      }
      const finalNum = parseInt(match[0], 10);
      const rest = finalText.replace(/^\d+/, "");
      const obj = { val: 0 };
      gsap.to(obj, {
        val: finalNum,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
        onUpdate: () => { el.innerHTML = Math.floor(obj.val) + rest; },
        onComplete: () => { el.innerHTML = finalText; },
      });
    });
  }

  /* ---------- Nav scroll state ---------- */
  const nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Skill card pointer glow ---------- */
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width) * 100;
      const py = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", px + "%");
      card.style.setProperty("--my", py + "%");
    });
  });

  /* ---------- Hero terminal card — subtle 3D tilt ---------- */
  const term = document.getElementById("term");
  if (term && !isTouch) {
    window.addEventListener("mousemove", (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const rx = (cy - e.clientY) / cy * 3;
      const ry = (e.clientX - cx) / cx * 3;
      term.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }, { passive: true });
  }

  /* ---------- Footer live time ---------- */
  const footerTime = document.getElementById("footerTime");
  const cstClock = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  function updateTime() {
    if (!footerTime) return;
    footerTime.textContent = `CST ${cstClock.format(new Date())}`;
  }
  updateTime();
  setInterval(updateTime, 1000);

  /* ---------- Boot ---------- */
  function bootHeroIntro() {
    if (!prefersReduced && typeof gsap !== "undefined") {
      const heroLines = gsap.utils.toArray(".hero-title .reveal-text");
      gsap.fromTo(heroLines,
        { yPercent: 110 },
        { yPercent: 0, duration: 1.3, ease: "power4.out", stagger: 0.12, delay: 0.1 }
      );
      const heroTag = document.querySelector(".hero-tag");
      if (heroTag) {
        gsap.fromTo(heroTag, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out" });
      }
    } else {
      document.querySelectorAll(".hero-title .reveal-text").forEach((el) => {
        el.style.transform = "none";
      });
    }
  }

  window.addEventListener("load", () => {
    runLoader(() => {
      bootHeroIntro();
      initReveals();
    });
  });

  if (document.readyState === "complete") {
    runLoader(() => {
      bootHeroIntro();
      initReveals();
    });
  }
})();
