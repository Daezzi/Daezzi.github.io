import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://xenofon0831.github.io/",
    title: "Daezzi",
    description: "一个脑死亡的Java程序员，试图在AI slop grenade我的大脑前，成为人类。",
    author: "Daezzi",
    profile: "https://github.com/Xenofon0831",
    ogImage: "default-og.jpg",
    lang: "zh-CN",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/Xenofon0831" },
    { name: "mail",     url: "mailto:xenofon991@outlook.com" },
  ],
  shareLinks: [],
});
