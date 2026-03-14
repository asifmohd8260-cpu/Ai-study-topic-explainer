import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        mist: "#f8fbff",
        skyglass: "#dbeafe",
        mintglass: "#dcfce7",
        peachglass: "#ffedd5"
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-plus-jakarta-sans)"]
      },
      boxShadow: {
        float: "0 24px 70px rgba(15, 23, 42, 0.12)"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 0.4s ease-out forwards"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};

export default config;
