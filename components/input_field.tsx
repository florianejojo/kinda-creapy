import InfoIcon from "@mui/icons-material/Info"
import React from "react"

import LoadingCircle from "./loading_circle"

interface InputFieldProps {
  id: string
  label?: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  autoComplete?: string
  placeholder?: string
  raw?: boolean
  width?: string
  size?: string
  info?: string
  isLoading?: boolean
  onBlur?: () => void
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  autoComplete,
  placeholder,
  raw = false,
  width,
  size = "sm",
  info,
  isLoading,
  onBlur,
}) => {
  return (
    <div className={raw ? "w-auto" : "mb-4"} style={{ width: width || "100%" }}>
      {label && (
        <div className={`flex items-center justify-between mb-${raw ? "1" : "2"}`}>
          <label
            htmlFor={id}
            className={`block text-${size} font-semibold  text-gray-700 dark:text-gray-300`}
          >
            {label}
          </label>
          {info && (
            <div className="relative group">
              <span className="text-gray-500 dark:text-gray-400 cursor-pointer ml-2">
                <InfoIcon fontSize="small" />
              </span>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10 left-1/2 transform -translate-x-1/2">
                {info}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          required={required}
          placeholder={placeholder}
          className={`${
            raw
              ? "p-2 rounded dark:border-gray-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-100"
              : "bg-gray-100 dark:bg-white/6 px-3 py-2 rounded w-full leading-6 text-gray-800 dark:text-gray-100"
          } focus:outline-none focus:border-transparent focus:ring-gray-500 w-full pr-8 tracking-normal`}
          autoComplete={autoComplete}
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-2 flex items-center">
            <LoadingCircle size={15} />
          </div>
        )}
      </div>
    </div>
  )
}

export default InputField
