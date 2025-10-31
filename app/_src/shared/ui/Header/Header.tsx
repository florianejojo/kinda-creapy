"use client"

import { useHeaderViewModel } from "@/app/_src/shared/ui/Header/useHeaderViewModel"
import Link from "next/link"

export const Header = () => {
  const { homeNavLink, otherNavLinks, isOpen, setIsOpen } = useHeaderViewModel()

  return (
    <header className="bg-[#f8f4ef] shadow-sm top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={homeNavLink.href} className="text-xl font-bold text-gray-900">
          KINDA CREAPY
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium">
          {otherNavLinks
            .filter((link) => link.label !== "Accueil")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
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
          <ul className="flex flex-col gap-4 ">
            {otherNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-800 hover:text-black transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
