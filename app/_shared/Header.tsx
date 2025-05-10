"use client"
import Image from "next/image"
import { useState } from "react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Boutique", href: "/shop" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-[#f8f4ef] shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={70}
          height={70}
          className="h-10 w-10 rounded-full"
        />

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-black transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            // X icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Burger icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-[#f8f4ef] px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-gray-800 hover:text-black transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
