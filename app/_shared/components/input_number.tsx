import React, { useEffect, useState } from "react"

interface InputNumberProps {
  id: string
  label?: string
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  decimals?: number
}

export const InputNumber: React.FC<InputNumberProps> = ({
  id,
  label,
  value = 0,
  onChange,
  min = 0,
  max = 1000000,
  step = 1,
  disabled = false,
  decimals = 2,
}) => {
  const [inputValue, setInputValue] = useState<string>(
    value.toFixed(decimals).replace(/\.?0+$/, ""),
  )

  useEffect(() => {
    setInputValue(value.toFixed(decimals).replace(/\.?0+$/, ""))
  }, [value])

  const handleIncrement = () => {
    const newValue = Math.min(max, value + step)
    onChange(parseFloat(newValue.toFixed(decimals)))
    setInputValue(newValue.toFixed(decimals).replace(/\.?0+$/, ""))
  }

  const handleDecrement = () => {
    const newValue = Math.max(min, value - step)
    onChange(parseFloat(newValue.toFixed(decimals)))
    setInputValue(newValue.toFixed(decimals).replace(/\.?0+$/, ""))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    if (newValue === "") onChange(0)

    if (/^-?\d*[.,]?\d*$/.test(newValue)) {
      setInputValue(newValue.replace(",", "."))
    }

    if (!isNaN(parseFloat(newValue)) && newValue !== "-" && newValue !== ".") {
      const clampedValue = Math.min(max, Math.max(min, parseFloat(newValue)))
      onChange(parseFloat(clampedValue.toFixed(decimals)))
    }
  }

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block font-semibold mb-1 text-gray-100 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative inline-flex items-center border-2 border-gray-200 dark:border-gray-700 rounded overflow-hidden">
        {disabled && (
          <div className="absolute inset-0 bg-gray-500 opacity-50 pointer-events-none"></div>
        )}
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled}
          className="select-none px-2 py-1 bg-gray-100 dark:bg-blue-900 text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          −
        </button>
        <input
          id={id}
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={() => setInputValue(value.toFixed(decimals).replace(/\.?0+$/, ""))}
          min={min}
          max={max}
          step={step}
          className="w-full px-2 py-1 text-center text-gray-100 dark:text-gray-300 bg-transparent focus:ring-0 focus:outline-none tracking-normal"
          disabled={disabled}
        />
        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled}
          className="select-none px-2 py-1 bg-gray-100 dark:bg-blue-900 text-gray-700 dark:text-gray-300 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
  )
}
