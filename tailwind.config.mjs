import daisyui from "daisyui";
import { iconsPlugin, dynamicIconsPlugin } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui, iconsPlugin(), dynamicIconsPlugin()],
};
