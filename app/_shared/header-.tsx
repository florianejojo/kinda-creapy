"use client"

import Link from "next/link"
import { useState } from "react"

type IconProps = {
  size?: number
  className?: string
}

export const Menu = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
    <line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const X = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
    <line
      x1="5"
      y1="5"
      x2="19"
      y2="19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="19"
      y1="5"
      x2="5"
      y2="19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
)

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-display font-light tracking-wider text-foreground hover:opacity-60 transition"
          >
            KINDA CREAPY
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link href="/" className="text-sm text-foreground hover:opacity-60 transition">
              Oeuvres
            </Link>
            {/* <Link href="/lexicon" className="text-sm text-foreground hover:opacity-60 transition">
              Lexique
            </Link> */}
            <Link href="/artists" className="text-sm text-foreground hover:opacity-60 transition">
              Artistes
            </Link>
            {/* <Link href="/contact" className="text-sm text-foreground hover:opacity-60 transition">
              Contact
            </Link> */}
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:opacity-60 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link
              href="/creations"
              className="block text-sm text-foreground hover:opacity-60 transition"
            >
              Oeuvres
            </Link>
            {/* <Link
              href="/lexicon"
              className="block text-sm text-foreground hover:opacity-60 transition"
            >
              Lexique
            </Link> */}
            <Link
              href="/artists"
              className="block text-sm text-foreground hover:opacity-60 transition"
            >
              Artistes
            </Link>
            {/* <Link
              href="/contact"
              className="block text-sm text-foreground hover:opacity-60 transition"
            >
              Contact
            </Link> */}
          </div>
        )}
      </div>
    </header>
  )
}
