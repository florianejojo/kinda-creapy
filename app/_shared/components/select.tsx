"use client"
import { faArrowDown, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export type SelectOption<T extends string | number = string> = {
  label: string
  value: T
  disabled?: boolean
}

type SelectProps<T extends string | number = string> = {
  id: string
  value: T | ""
  onChange: (value: T | "") => void
  options: SelectOption<T>[]
  placeholder?: string
  disabled?: boolean
}

export const Select = <T extends string | number = string>({
  id,
  value,
  onChange,
  options,
  placeholder,
}: SelectProps<T>) => {
  return (
    <div className="relative w-full">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value as T | "")}
        className={[
          "block w-full h-11 px-3 pr-9 rounded-md",
          "border border-border bg-input text-foreground",
          "text-base appearance-none",
          "focus:outline-none focus:ring-2 focus:ring-ring/40 focus:border-ring",
          "transition-colors",
        ].join(" ")}
      >
        {placeholder && (
          <option value="" className="text-muted-foreground">
            {placeholder}
          </option>
        )}

        {options.map((option) => (
          <option
            key={String(option.value)}
            value={option.value}
            disabled={option.disabled}
            className="bg-popover text-popover-foreground"
          >
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <FontAwesomeIcon icon={faChevronDown} className="w-6 h-6 text-foreground" />
      </div>
    </div>
  )
}
