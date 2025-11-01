"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="bg-black border-b border-red-700 sticky top-0 z-10">
      <div className="flex justify-center items-center px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-red-500 mr-8">
          Filmy
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={isActive ? "font-semibold text-red-400" : "text-gray-300"}
                >
                  {label}
                </Button>
              </Link>
            );
          })}
        </div>

      </div>
    </nav>
  );
}
