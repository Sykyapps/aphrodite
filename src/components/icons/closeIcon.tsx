import type { SVGProps } from "react"
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 10.223 18.223 4 20 5.777 13.778 12 20 18.223 18.223 20 12 13.778 5.778 20 4 18.223 10.223 12 4 5.778 5.777 4z"
    />
  </svg>
)
export default SvgCloseIcon
