const CONFIG = {
  // profile setting (required)
  profile: {
    name: "sharknia",
    image: "/sharknia.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "만 4살 백엔드 개발자",
    email: "zel@kakao.com",
    linkedin: "han-kyeol-lee-07a2b8287",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `github`,
      href: "https://github.com/sharknia",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sharknia-blog",
    description: "welcome to sharknia-blog!",
  },

  // CONFIG configration (required)
  link: "https://sharknia.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      // appid: "eb4143d8-8bf7-46c6-98dc-dea83d5fc757", // UI 겁나 구림.. 삭제
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600 * 24 * 365, // revalidate time for [slug], 사실상 갱신 없도록 수정
}

module.exports = { CONFIG }
