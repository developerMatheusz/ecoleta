import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "blue-gov": "#1351B4",
      "green-gov": "#168821",
      white: "#fff",
      black: "#000000",
      yellow: "#FFFF00",
      red: "#FF0000",
      blue: "#155BCB"
    }
  },
  plugins: []
};
export default config;
