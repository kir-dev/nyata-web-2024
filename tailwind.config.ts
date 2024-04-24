import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0f7173",
        "primary-light": "#9cd3c0",
        secondary: "#fda98b",
        "secondary-light": "#ffbd91",
        "custom-gray": "#363636",
      },
      fontFamily: {
        body: ["Raleway", "sans-serif"],
        display: ["Truculenta", "sans-serif"]
      },
      boxShadow: {
        "box-left": "-12px 12px 1.6px 0px rgba(0, 0, 0, 0.25)",
        "box-right": "12px 12px 1.6px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        header: "0px 6px 4.8px rgba(0, 0, 0, 0.40)"
      },
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
export default config;
