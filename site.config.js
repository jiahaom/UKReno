const CONFIG = {
  // profile setting (required)
  profile: {
    name: "J",
    image: "<img src="https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo0LCJub3NlIjo0LCJtb3V0aCI6MSwiZXllcyI6MSwiZXllYnJvd3MiOjQsImdsYXNzZXMiOjExLCJoYWlyIjo5LCJhY2Nlc3NvcmllcyI6MCwiZGV0YWlscyI6MCwiYmVhcmQiOjAsImZsaXAiOjAsImNvbG9yIjoicmdiYSgyNTUsIDAsIDAsIDApIiwic2hhcGUiOiJub25lIn0=" alt="notion avatar">", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Data Scientist",
    bio: "I develop everything using node.",
    email: "bin.redder.0y@iCloud.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `UkReno.Tips`,
      href: "https://UkReno.Tips/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Property.Renovation.Tips",
    description: "Tips for Property Renovation.",
  },

  // CONFIG configration (required)
  link: "https://ukreno.tips",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
