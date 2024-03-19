import ContextProvider from "../contextProvider/contextProvider.tsx"
import ThemeProvider from "../themeProvider/themeProvider.tsx"

import "../../styles/index.scss"

type Props = {
  children: React.ReactNode
}

const MainProvider = ({ children }: Props) => {
  return (
    <ThemeProvider>
      <ContextProvider>{children}</ContextProvider>
    </ThemeProvider>
  )
}

export default MainProvider
