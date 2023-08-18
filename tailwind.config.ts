import type { Config } from "tailwindcss";
import tailwindStyledComponents from "tailwind-styled-components";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {},
  plugins: [tailwindStyledComponents]
};
export default config;
