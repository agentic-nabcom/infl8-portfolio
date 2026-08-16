"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/balloon-menu", label: "Balloon Menu" },
    { href: "/book-online", label: "Book Online" },
    { href: "/faqs", label: "FAQs" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FFD6E0] border-b-2 border-black">
      <nav className="mx-auto flex w-full max-w-[980px] md:max-w-5xl lg:max-w-7xl items-center justify-between px-4 py-5">
        {/* Logo - Mobile & Desktop */}
        <Link href="/" className="shrink-0 z-10 flex items-center">
          <Image 
            src="/logo.png" 
            alt="Infl8" 
            width={200} 
            height={100} 
            className="h-12 md:h-14 lg:h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-xs md:text-sm lg:text-base font-normal font-kodchasan transition-all hover:text-black/54 ${
                  pathname === item.href ? "underline" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1 p-2 text-black focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FFD6E0] border-b-2 border-black shadow-lg z-20">
            <ul className="flex flex-col gap-0 p-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-3 text-sm font-normal font-kodchasan transition-all hover:text-black/54 ${
                      pathname === item.href ? "underline bg-white/50" : ""
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
