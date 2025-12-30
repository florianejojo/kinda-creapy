"use client"

import React from "react"
import clsx from "clsx"

type ButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  variant?: "primary" | "secondary"
  tone?: "default"
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  variant = "primary",
  tone = "default",
  disabled = false,
}: ButtonProps) => {
  const baseStyles = `px-3 py-1.5 rounded text-md border border- cursor-pointer
     disabled:opacity-50 disabled:cursor-not-allowed w-full`

  const variants = {
    primary: {
      default: `bg-primary text-primary-foreground border-primary-background hover:bg-primary/90 focus:ring-primary`,
    },
    secondary: {
      default: `bg-transparent text-black border-black hover:bg-black/5 focus:ring-black`,
    },
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick?.(e)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={clsx(baseStyles, variants[variant][tone])}
    >
      {children}
    </button>
  )
}
