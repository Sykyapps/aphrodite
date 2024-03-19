// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        highEmphasis: {
          text: "#1C1D1F",
          icon: "#1C1D1F",
          border: "#E0E3EF",
        },
        lowEmphasis: {
          text: "#565B6B",
          iconPrimary: "#565B6B",
          iconSecondary: "#989CAC",
          border: "#F5F6FA",
        },
        disabled: {
          text: "#989CAC",
          icon: "#E0E3EF",
        },
        positive: {
          text: "#13AF78",
          icon: "#13AF78",
          border: "#14C687",
        },
        negative: {
          text: "#FF3165",
          icon: "#FF3165",
          border: "#FF3165",
        },
        primary: {
          text: "#6756C1",
          icon: "#6756C1",
        },
        active: {
          text: "#4D68DC",
          icon: "#4D68DC",
          border: "#4D68DC",
        },
        neutral: {
          DEFAULT: "#FFFFFF",
          100: "#F5F6FA",
          200: "#E0E3EF",
          300: "#989CAC",
          400: "#565B6B",
          500: "#1C1D1F",
          600: "#000000",
        },
        purple: {
          100: "#ECEAF7",
          200: "#A095D8",
          300: "#6756C1",
          400: "#534794",
        },
        blue: {
          100: "#EEF0FC",
          200: "#8899E7",
          300: "#4D68DC",
          400: "#3A50AB",
        },
        tosca: {
          100: "#E6FEFC",
          200: "#70DAD3",
          300: "#14C6C6",
          400: "#0BA1A1",
        },
        green: {
          100: "#EEFFF9",
          200: "#70DAB5",
          300: "#14C687",
          400: "#13AF78",
        },
        yellow: {
          100: "#FDFFE5",
          200: "#FFEE94",
          300: "#FFDE31",
        },
        orange: {
          100: "#FFEBE5",
          200: "#FF9D7E",
          300: "#FF6231",
        },
        red: {
          100: "#FFE5EC",
          200: "#FF7E9F",
          300: "#FF3165",
        },
      },
    },
    screens: {
      xs: "400px",
      weird: "1100px",
      xxl: "1440px",
      ...defaultTheme.screens,
    },
    fontFamily: {
      "uni-neue": ["UniNeue", "sans-serif"],
    },
  },
  plugins: [],
}
