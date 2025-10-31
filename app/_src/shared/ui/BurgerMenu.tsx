"use client"
import { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPalette, faShop, faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { usePathname } from "next/navigation"
import { PATHS } from "@/app/types/types"

export const BurgerMenu = () => {
  const pathName = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navStyle =
    " m-0.5 p-2 bg-gradient-to-t from-slate-950 via-black to-black text-white rounded-lg hover:bg-gradient-to-t hover:from-slate-950 hover:via-gray-900 hover:to-black hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform cursor-pointer text-center flex flex-row w-full items-center justify-start" // Style pour les liens

  return (
    <div className="relative">
      <button className="text-white bg-black rounded-lg focus:outline-none" onClick={toggleMenu}>
        <div className="space-y-1">
          <div className="w-6 h-0.5 lh bg-white"></div>
          <div className="w-6 h-0.5 lh bg-white"></div>
          <div className="w-6 h-0.5 lh bg-white"></div>
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2  bg-slate-950 rounded-lg shadow-lg z-20 flex flex-col p-1 items-center w-40"
          onClick={toggleMenu}
        >
          {pathName !== PATHS.home && (
            <Link href={PATHS.home} className={navStyle}>
              <FontAwesomeIcon icon={faPalette} />
              <span className="ml-5">GALERIE</span>
            </Link>
          )}
          {pathName !== PATHS.artist && (
            <Link href={PATHS.artist} className={navStyle}>
              <FontAwesomeIcon icon={faUserSecret} />
              <span className="ml-5">ARTISTE</span>
            </Link>
          )}

          {pathName !== PATHS.shop && (
            <Link href={PATHS.shop} className={navStyle}>
              <FontAwesomeIcon icon={faShop} />
              <span className="ml-5">SHOP</span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
