import type { Locale } from "@/lib/locale";

export type CVEducation = {
  period: string;
  school: string;
  title: string;
  desc: string;
};

export type CVSkillGroup = {
  group: string;
  items: string[];
};

export type CVLanguage = {
  name: string;
  level: string;
};

export type CVPublication = {
  title: string;
  org: string;
  year: string;
  href?: string;
};

/** Social entry: use `href` for links; omit `href` and set `text` for WeChat ID / handle. */
export type CVSocial = {
  label: string;
  href?: string;
  text?: string;
  /** Opens modal contact UI (see `contact.weChat` strings). */
  kind?: "wechat";
};

export type CVContactWeChat = {
  modalClose: string;
  modalCopy: string;
  modalCopied: string;
  modalCopyFailed: string;
  modalQrAlt: string;
};

export type CVData = {
  nav: {
    availability: string;
    downloadCv: string;
    contactMe: string;
    scroll: string;
    timezone: string;
  };
  hero: {
    yearsBadge: string;
    name: string;
    nameLatin: string;
    intent: string;
    role: string;
    location: string;
    quote: string;
  };
  sections: {
    about: string;
    skills: string;
    projects: string;
    activity: string;
    education: string;
    languages: string;
    publications: string;
    contact: string;
  };
  about: {
    meta: string;
    body: string;
  };
  skills: CVSkillGroup[];
  projects: {
    emptyState: string;
    updated: string;
    today: string;
    yesterday: string;
    day: string;
    week: string;
    month: string;
    ago: string;
    noDescription: string;
  };
  activity: {
    total: (n: string) => string;
    less: string;
    more: string;
  };
  education: CVEducation[];
  languages: CVLanguage[];
  publications: CVPublication[];
  contact: {
    phoneLabel: string;
    emailLabel: string;
    siteLabel: string;
    socialsLabel: string;
    phone: string;
    email: string;
    site: string;
    siteHref: string;
    weChat: CVContactWeChat;
    socials: CVSocial[];
  };
  footer: {
    tagline: string;
    author: string;
    madeBy: string;
    madeByHref: string;
  };
};

export const CV_DATA: Record<Locale, CVData> = {
  en: {
    nav: {
      availability: "Open to Agent / LLM roles",
      downloadCv: "Download CV",
      contactMe: "Contact Me",
      scroll: "Scroll",
      timezone: "(UTC+8)",
    },
    hero: {
      yearsBadge: "Class of '27  ·  CS @ MUC",
      name: "Sean Yu",
      nameLatin: "SEAN YU",
      intent: "Open to Agent / LLM roles",
      role: "Agent & LLM engineer,",
      location: "based in Beijing",
      quote:
        "I judge LLM applications on reproducible evals and end-to-end traces—not on gut feel.",
    },
    sections: {
      about: "about",
      skills: "skills",
      projects: "projects",
      activity: "activity",
      education: "education",
      languages: "languages",
      publications: "highlights",
      contact: "contact",
    },
    about: {
      meta: "who I am",
      body:
        "CS undergraduate at Minzu University of China (985). I build LLM-backed services with Python—FastAPI, Pydantic, and async patterns—plus MySQL and Redis. I care about prompt design, structured outputs, tool calling, and agent orchestration, and I’m comfortable shipping with Docker and GitHub Actions. Open source contributor; used to PRs, issues, and code review.",
    },
    skills: [
      {
        group: "Languages & backend",
        items: ["Python", "FastAPI", "Pydantic", "pytest", "async I/O", "MySQL", "Redis"],
      },
      {
        group: "LLM & agents",
        items: ["OpenAI API", "prompt engineering", "tool calling", "structured output", "LangChain", "agent workflows"],
      },
      {
        group: "RAG & retrieval",
        items: ["embeddings", "vector databases", "hybrid retrieval", "rerankers", "RAGAS-style eval"],
      },
      {
        group: "Engineering",
        items: ["Docker", "GitHub Actions", "logging & error handling", "remote collaboration", "deployment"],
      },
    ],
    projects: {
      emptyState: "No repositories found.",
      updated: "Updated",
      today: "Today",
      yesterday: "Yesterday",
      day: "d",
      week: "w",
      month: "mo",
      ago: " ago",
      noDescription:
        "No description yet. This repository focuses on implementation details and iterative improvements.",
    },
    activity: {
      total: (n) => `${n} contributions in the last 6 months`,
      less: "Less",
      more: "More",
    },
    education: [
      {
        period: "2023 — 2027",
        school: "Minzu University of China",
        title: "B.S. Computer Science and Technology",
        desc:
          "Coursework: data structures, operating systems, computer networks, computer organization, databases, software engineering, natural language processing. GPA 3.6.",
      },
    ],
    languages: [
      { name: "English", level: "IELTS 7.0 · CET-6" },
      { name: "Chinese", level: "Native" },
    ],
    publications: [
      {
        title: "Code Review & Debug Agent",
        org: "Open source · Python · FastAPI · LangChain · MySQL · Redis · Docker",
        year: "2024 — present",
        href: "https://github.com/takagibit18",
      },
    ],
    contact: {
      phoneLabel: "Phone",
      emailLabel: "Email",
      siteLabel: "GitHub",
      socialsLabel: "Socials",
      phone: "+86 15061235115",
      email: "huali6641@gmail.com",
      site: "takagibit18",
      siteHref: "https://github.com/takagibit18",
      weChat: {
        modalClose: "Close",
        modalCopy: "Copy WeChat ID",
        modalCopied: "WeChat ID copied.",
        modalCopyFailed: "Copy failed. Select the ID and copy manually.",
        modalQrAlt: "WeChat QR code",
      },
      socials: [
        { label: "GitHub", href: "https://github.com/takagibit18" },
        { label: "WeChat", text: "Sean_Yu3", kind: "wechat" },
      ],
    },
    footer: {
      tagline: "Eval first. Scale second.",
      author: "Sean Yu",
      madeBy: "Made with care",
      madeByHref: "#",
    },
  },
  zh: {
    nav: {
      availability: "意向：Agent / LLM 工程师",
      downloadCv: "下载简历",
      contactMe: "联系我",
      scroll: "向下滚动",
      timezone: "(UTC+8)",
    },
    hero: {
      yearsBadge: "27届 · 中央民大计科",
      name: "欣禹行",
      nameLatin: "XIN YUXING",
      intent: "意向：Agent / LLM 工程师",
      role: "Agent / LLM 方向开发者，",
      location: "就读于北京",
      quote:
        "对大模型应用的判断，我坚持以可复现的评测与端到端链路为依据，而不是依赖主观感觉。",
    },
    sections: {
      about: "关于",
      skills: "技能",
      projects: "项目",
      activity: "活跃度",
      education: "教育",
      languages: "语言",
      publications: "项目亮点",
      contact: "联系",
    },
    about: {
      meta: "个人简介",
      body:
        "中央民族大学（985）计算机科学与技术本科在读，GPA 3.6。擅长以 Python 做异步与工程化开发，熟悉 FastAPI、Pydantic、pytest、MySQL、Redis；掌握主流 LLM API 接入、Prompt Engineering、Tool Calling、结构化输出与 Agent 基础编排，并了解向量检索、混合检索、Reranker 与 RAGAS 等评测思路。具备 Docker、GitHub Actions CI、日志与错误处理及远程协作部署经验；积极参与开源，熟悉 PR、Issue 与 Code Review 流程。",
    },
    skills: [
      {
        group: "编程与后端",
        items: ["Python", "FastAPI", "Pydantic", "pytest", "异步编程", "MySQL", "Redis"],
      },
      {
        group: "LLM 与 Agent",
        items: ["OpenAI API", "Prompt Engineering", "Tool Calling", "结构化输出", "LangChain", "Agent 编排"],
      },
      {
        group: "RAG 与检索",
        items: ["Embedding 选型", "向量数据库", "混合检索", "Reranker", "RAGAS 评测"],
      },
      {
        group: "工程化",
        items: ["Docker", "GitHub Actions", "日志与错误处理", "远程协作", "部署实践"],
      },
    ],
    projects: {
      emptyState: "暂无可展示仓库。",
      updated: "更新于",
      today: "今天",
      yesterday: "昨天",
      day: "天",
      week: "周",
      month: "个月",
      ago: "前",
      noDescription: "暂无描述，该仓库当前主要用于功能迭代与实现细节更新。",
    },
    activity: {
      total: (n) => `过去半年共 ${n} 次贡献`,
      less: "少",
      more: "多",
    },
    education: [
      {
        period: "2023 — 2027",
        school: "中央民族大学",
        title: "计算机科学与技术 · 本科",
        desc:
          "核心课程：数据结构、操作系统、计算机网络、计算机组成原理、数据库系统、软件工程、自然语言处理等。GPA 3.6。",
      },
    ],
    languages: [
      { name: "英语", level: "IELTS 7.0 · CET-6" },
      { name: "中文", level: "母语" },
    ],
    publications: [
      {
        title: "Code Review & Debug Agent",
        org: "开源 · Python · FastAPI · LangChain · MySQL · Redis · Docker",
        year: "2024 — 至今",
        href: "https://github.com/takagibit18",
      },
    ],
    contact: {
      phoneLabel: "电话",
      emailLabel: "邮箱",
      siteLabel: "GitHub",
      socialsLabel: "社交",
      phone: "+86 15061235115",
      email: "huali6641@gmail.com",
      site: "takagibit18",
      siteHref: "https://github.com/takagibit18",
      weChat: {
        modalClose: "关闭",
        modalCopy: "复制微信号",
        modalCopied: "已复制微信号。",
        modalCopyFailed: "复制失败，请手动选择并复制。",
        modalQrAlt: "微信二维码",
      },
      socials: [
        { label: "GitHub", href: "https://github.com/takagibit18" },
        { label: "微信", text: "Sean_Yu3", kind: "wechat" },
      ],
    },
    footer: {
      tagline: "评测先行，再谈规模。",
      author: "欣禹行",
      madeBy: "用心打造",
      madeByHref: "#",
    },
  },
};
