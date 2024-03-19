import { useEffect, useState } from "react"

import { CircleCheckIcon } from "../icons"

import "./passwordValidator.scss"

type PasswordValidatorProps = {
  value: string
}

const PasswordValidator = ({ value }: PasswordValidatorProps) => {
  const [isValidLowerCase, setIsValidLowerCase] = useState(false)
  const [isValidUpperCase, setIsValidUpperCase] = useState(false)
  const [isValidNumber, setIsValidNumber] = useState(false)
  const [isValidMinChar, setIsValidMinChar] = useState(false)

  const validateLowerCase = (value: string) => {
    return /[a-z]/.test(value)
  }

  const validateUpperCase = (value: string) => {
    return /[A-Z]/.test(value)
  }

  const validateNumber = (value: string) => {
    return /\d/.test(value)
  }
  const validateMinChar = (value: string) => {
    const minLength = 8
    return value.length >= minLength
  }

  useEffect(() => {
    if (value !== undefined) {
      const validLowerCase = validateLowerCase(value)
      const validUpperCase = validateUpperCase(value)
      const validNumber = validateNumber(value)
      const validMinChar = validateMinChar(value)

      setIsValidLowerCase(validLowerCase)
      setIsValidUpperCase(validUpperCase)
      setIsValidNumber(validNumber)
      setIsValidMinChar(validMinChar)
    }
  }, [value])

  return (
    <div className="syky-password-validator">
      <div className="syky-password-validator-wrapper">
        <span
          data-valid={isValidLowerCase}
          className="syky-password-validator-icon"
        >
          <CircleCheckIcon />
        </span>
        <span
          className="syky-password-validator-text"
          data-valid={isValidLowerCase}
        >
          1 Huruf kecil
        </span>
      </div>
      <div className="syky-password-validator-wrapper">
        <span
          className="syky-password-validator-icon"
          data-valid={isValidUpperCase}
        >
          <CircleCheckIcon />
        </span>
        <span
          className="syky-password-validator-text"
          data-valid={isValidUpperCase}
        >
          1 Huruf Besar
        </span>
      </div>
      <div className="syky-password-validator-wrapper">
        <span
          className="syky-password-validator-icon"
          data-valid={isValidNumber}
        >
          <CircleCheckIcon />
        </span>
        <span
          className="syky-password-validator-text"
          data-valid={isValidNumber}
        >
          1 Angka
        </span>
      </div>
      <div className="syky-password-validator-wrapper">
        <span
          className="syky-password-validator-icon"
          data-valid={isValidMinChar}
        >
          <CircleCheckIcon />
        </span>
        <span
          className="syky-password-validator-text"
          data-valid={isValidMinChar}
        >
          Minimal 8 karakter
        </span>
      </div>
    </div>
  )
}

export type { PasswordValidatorProps }
export default PasswordValidator
