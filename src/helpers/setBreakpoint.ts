export const setBreakpoint = (
  size: "sm" | "md" | "lg" | "xl" | "xxl",
): number => {
  switch (size) {
    case "sm":
      return 640
    case "md":
      return 768
    case "lg":
      return 1024
    case "xl":
      return 1280
    case "xxl":
      return 1440
    default:
      return 0
  }
}
