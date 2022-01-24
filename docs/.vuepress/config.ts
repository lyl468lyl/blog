import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/blog/",
  lang: "zh-CN",
  title: "学习记录",
});
