import React from "react"

type ButtonProps = {
  children: React.ReactNode
  isLink?: boolean
  href?: string
  onClick?: () => void
  isActive?: boolean
  isSelected?: boolean
  size?: "sm" | "md" | "lg"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLink = false,
  href = "#",
  onClick,
  isActive = false,
  size = "md",
}) => {
  const baseClasses = `inline-block px-6 py-3 bg-white text-black  rounded-full hover:bg-gray-200 transition border
    data-[is-active="true"]:bg-black data-[is-active="true"]:text-white
    data-[size="sm"]:px-4  data-[size="sm"]:py-2  data-[size="sm"]:text-sm
    data-[is-selected="true"]:bg-black/50 data-[is-selected="true"]:text-white
    `

  if (isLink) {
    return (
      <a
        href={href}
        className={`${baseClasses} `}
        data-is-active={isActive}
        data-size={size}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses}`}
      data-is-active={isActive}
    >
      {children}
    </button>
  )
}
