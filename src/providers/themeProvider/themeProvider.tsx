import { ConfigProvider } from "antd"
import { StyleProvider } from "@ant-design/cssinjs"

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 4,
          fontFamily: "UniNeue",
          colorPrimary: "#6756C1",
          colorError: "#FF3165",
          colorBorder: "#E0E3EF",
          colorText: "#1C1D1F",
          screenXSMin: 400,
          screenXS: 400,
          screenXSMax: 639,
          screenSMMin: 640,
          screenSM: 640,
          screenSMMax: 767,
          screenMDMin: 768,
          screenMD: 768,
          screenMDMax: 1023,
          screenLGMin: 1024,
          screenLG: 1024,
          screenLGMax: 1279,
          screenXLMin: 1280,
          screenXL: 1280,
          screenXLMax: 1439,
          screenXXLMin: 1440,
          screenXXL: 1440,
        },
        components: {
          Breadcrumb: {
            itemColor: "#1C1D1F",
            lastItemColor: "#6756C1",
            linkColor: "#1C1D1F",
            linkHoverColor: "#1C1D1F",
            separatorColor: "#1C1D1F",
            separatorMargin: 12,
          },
          Button: {
            primaryShadow: "none",
            fontWeight: 700,
            paddingBlock: 8,
            paddingBlockLG: 13,
            paddingBlockSM: 6,
            paddingInline: 16,
            paddingInlineLG: 20,
            paddingInlineSM: 12,
            contentFontSize: 14,
            contentFontSizeLG: 16,
            contentFontSizeSM: 12,
            contentLineHeight: 1.43,
            contentLineHeightLG: 1.57,
            contentLineHeightSM: 1.14,
          },
          Form: {
            verticalLabelPadding: "0px",
          },
          Menu: {
            itemSelectedBg: "transparent",
            itemSelectedColor: "#4D68DC",
            subMenuItemBg: "transparent",
            activeBarHeight: 0,
          },
          Pagination: {
            itemActiveBg: "#ECEAF7",
          },
          Table: {
            headerBg: "#F5F6FA",
            borderColor: "#E0E3EF",
            headerSplitColor: "transparent",
          },
          Tabs: {
            inkBarColor: "#4D68DC",
            itemActiveColor: "#4D68DC",
            itemHoverColor: "#4D68DC",
            itemSelectedColor: "#4D68DC",
          },
        },
      }}
    >
      <StyleProvider hashPriority="low">{children}</StyleProvider>
    </ConfigProvider>
  )
}

export default ThemeProvider
