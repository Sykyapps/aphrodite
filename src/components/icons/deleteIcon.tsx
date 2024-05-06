import type { SVGProps } from "react"
const SvgDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 13.333c0 .734-.067.667.667.667h6.666c.734 0 .667.11.667-.624V5.333c0-.733.067-.666-.667-.666H4.667C3.933 4.667 4 4.6 4 5.333zm8.333-10.666h-2l-.473-.474A.67.67 0 0 0 9.393 2H6.607a.67.67 0 0 0-.467.193l-.473.474H3.639c-.367 0-.306.3-.306.666S3.273 4 3.64 4h8.694c.367 0 .334-.3.334-.667 0-.366.033-.666-.334-.666"
    />
  </svg>
)
export default SvgDeleteIcon
