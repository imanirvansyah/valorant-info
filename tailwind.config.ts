import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--primary)",
        "off-white": "var(--off-white)",
        gray: "var(--gray)",
        yellow: "var(-- yellow)",
        green: "var(--green)",
        navy: "var(--navy)",
      },
    },
  },
  plugins: [],
};
export default config;
