import type { SVGProps } from "react"
const SvgCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M16 1H3C2 1 2 1 2 2v15h2V4c0-1 0-1 1-1h11V1m-.41 4.59L21 11v11c0 1.1.1 1-1 1H7c-1.1 0-.99.1-.99-1L6 6c0-1.1-.1-1 1-1h8zM14.5 12h5L14 6.5v5c0 .55-.05.5.5.5"
    />
  </svg>
)
export default SvgCopyIcon
