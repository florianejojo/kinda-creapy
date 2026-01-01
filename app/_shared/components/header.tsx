"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { PAGE_LABELS, PAGES } from "@/app/_shared/shared.const"
import { PageKey } from "@/app/_shared/shared.types"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const fetchMe = async () => {
      const res = await fetch("/api/admin/me")
      const { isAdmin } = await res.json()
      setIsAdmin(isAdmin)
    }
    fetchMe()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16 sm:px-6 px-2">
          <Link
            href={PAGES.products.path}
            className="text-2xl font-display font-light tracking-wider hover:opacity-60 transition ml-2"
          >
            KINDA CREAPY
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            {(Object.keys(PAGES) as PageKey[])
              .filter((pageKey) => (!isAdmin && pageKey === "admin" ? false : true))
              .map((pageKey) => {
                const page = PAGES[pageKey]

                return (
                  <Link
                    key={page.path}
                    href={page.path}
                    className="text-sm hover:opacity-60 transition"
                  >
                    {PAGE_LABELS.fr[pageKey]}
                  </Link>
                )
              })}
          </nav>

          <button
            className="md:hidden p-2 text-foreground hover:opacity-60 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-6 h-6 text-foreground" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="text-2xl text-foreground" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border px-6">
            {(Object.keys(PAGES) as PageKey[]).map((pageKey) => {
              const page = PAGES[pageKey]

              return (
                <Link
                  key={page.path}
                  href={page.path}
                  className="block text-sm text-foreground hover:opacity-60 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {PAGE_LABELS.fr[pageKey]}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
