import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: {
          DEFAULT: "#FFFFFF",
        },
        black: {
          DEFAULT: "#000000",
          100: "#222222",
          200: "#333",
          210: "#444",
          300: "#464646",
          400: "#353535",
        },
        gray: {
          DEFAULT: "#6C6C6C",
          100: "#F4F4F4",
          110: "#FAFAFA",
          120: "#F1F1F1",
          130: "#F5F5F5",
          150: "#94949414",
          170: "#E4E4E4",
          200: "#EAEAEA",
          300: "#E6E6E6",
          330: "#d6d6d652",
          370: "#8d8d8dd9",
          400: "#959595",
          420: "#444",
          440: "#888",
          450: "#969696",
          460: "#666",
          470: "#646464",
          500: "#E1E1E1",
          510: "#EFEFEF",
          550: "#F6F6F6",
          560: "#F5F5F5",
          570: "#C6C6C6",
          580: "#6C6C6C",
          600: "#DBDBDB",
          610: "#DCDCDC",
          620: "#BEBEBE",
          630: "#B6B6B6",
          700: "#646464",
          800: "#717171",
          900: "#f9f9f999",
          910: "#35373c",
        },
        blue: {
          DEFAULT: "#0635DA",
          100: "#94d5f9",
          200: "#F5F9FD",
          500: "#125aec",
          600: "#0635DA",
        },
        pink: {
          100: "#FAA2A2",
          200: "#FFF8FB",
          500: "#E432B3",
        },
        orange: {
          100: "#F0CE93",
          200: "#FDF8F2",
          500: "#FF8400",
          600: "#0635DA",
        },
        red: {
          100: "#F66F6F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
