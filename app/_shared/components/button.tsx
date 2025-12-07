"use client"

import React from "react"
import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: "primary" | "secondary"
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "px-3 py-1.5 rounded text-xs transition font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-red-600 cursor-pointer border"

  const variants = {
    primary: "bg-stone-800 text-white hover:bg-stone-700",
    secondary: "bg-stone-100 text-stone-700 hover:bg-stone-200",
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick && onClick(e)
  }

  return (
    <button
      type={"button"}
      onClick={handleClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant])}
    >
      {children}
    </button>
  )
}
