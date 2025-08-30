"use client"

import { useState } from "react"
import { content } from "@/src/lib/content"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import Image from "next/image"
import Link from "next/link"

// Custom Kisa Logo Component
const KisaLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="/Kisa logo K.png"
        alt="Kisa logo"
        width={30}
        height={30}
        className="w-8 h-8"
      />
      <span className="font-medium text-black dark:text-white">{content.header.logo}</span>
    </a>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Since nav is empty, we'll skip nav items for now
  const navItems: any[] = []

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <KisaLogo />
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
          {navItems.map((item, idx) => (
            <a
              key={`nav-link-${idx}`}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            >
              <span className="relative z-20">{item.name}</span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/form">
            <NavbarButton 
              variant="primary"
              as="button"
            >
              {content.header.cta}
            </NavbarButton>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <KisaLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                handleNavClick(e, item.link)
                setIsMobileMenuOpen(false)
              }}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <Link href="/form" className="w-full">
              <NavbarButton
                onClick={() => {
                  setIsMobileMenuOpen(false)
                }}
                variant="primary"
                className="w-full"
                as="button"
              >
                {content.header.cta}
              </NavbarButton>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
