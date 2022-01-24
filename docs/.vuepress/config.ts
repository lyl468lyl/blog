import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/blog/",
  lang: "zh-CN",
  title: "学习记录",
  themeConfig: {
    home: "/",
    navbar: [{ text: "日志记录", link: "/" }],
    repo: "caigouzi1/blog",
    contributors: false,
    editLink: false,
    lastUpdatedText: "更新时间",
  },
});
