"use client"

import Link from "next/link"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border ">
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
            <Link href="/lexicon" className="text-sm text-foreground hover:opacity-60 transition">
              Lexique
            </Link>
            <Link href="/artists" className="text-sm text-foreground hover:opacity-60 transition">
              Artistes
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:opacity-60 transition">
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:opacity-60 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-foreground" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-6 h-6 text-foreground" />
            )}
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
