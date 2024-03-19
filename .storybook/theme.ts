import { create } from "@storybook/theming/create"

export default create({
  base: "light",
  brandTitle: "SayaKaya",
  brandUrl: "https://sayakaya.id",
  brandImage: "/src/assets/images/sayakaya-horizontal-blue.png",
  brandTarget: "_blank",

  fontBase: '"UniNeue", sans-serif',
  fontCode: "monospace",

  colorPrimary: "#6756C1",
  colorSecondary: "#A095D8",

  appBg: "#FFFFFF",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#FFFFFF",
  appBorderColor: "#E0E3EF",
  appBorderRadius: 4,

  textColor: "#1C1D1F",
  textInverseColor: "#FFFFFF",

  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barBg: "#FFFFFF",

  inputBg: "#FFFFFF",
  inputBorder: "#E0E3EF",
  inputTextColor: "#1C1D1F",
  inputBorderRadius: 4,
})
