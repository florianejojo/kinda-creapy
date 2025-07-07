type InputFieldProps = {
  label: string
  value: string | number
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "number" | "email" | "password"
  id?: string
}

export const InputField = ({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  id,
}: InputFieldProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={inputId} className="text-sm font-medium text-stone-700">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-800 transition text-sm"
      />
    </div>
  )
}
