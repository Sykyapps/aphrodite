import { addons } from "@storybook/manager-api"
import theme from "./theme"
// import { themes } from "@storybook/theming"

addons.setConfig({
  theme: theme,
})
