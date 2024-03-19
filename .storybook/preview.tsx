import type { Preview } from "@storybook/react"
import { MainProvider } from "../src"

import "./index.scss"

const preview: Preview = {
  decorators: [
    (Story) => (
      <MainProvider>
        <Story />
      </MainProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
