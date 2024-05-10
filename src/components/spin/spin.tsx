import { Spin as BaseSpin, SpinProps as BaseSpinProps } from "antd"

import Spinner from "../spinner"

import "./spin.scss"

type SpinProps = Omit<BaseSpinProps, "indicator">

const Spin = ({ fullscreen = false, ...props }: SpinProps) => {
  return (
    <BaseSpin
      className={`${fullscreen ? "syky-spin-fullscreen" : ""}`}
      indicator={<Spinner />}
      fullscreen={fullscreen}
      {...props}
    />
  )
}

export type { SpinProps }
export default Spin
