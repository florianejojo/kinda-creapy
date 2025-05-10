import React from "react"

type ButtonProps = {
  children: React.ReactNode
  isLink?: boolean
  href?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLink = false,
  href = "#",
  onClick,
}) => {
  const baseClasses =
    "inline-block px-6 py-3 bg-white text-black  rounded-full hover:bg-gray-200 transition"

  if (isLink) {
    return (
      <a href={href} className={`${baseClasses} `}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses}`}>
      {children}
    </button>
  )
}
