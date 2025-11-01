"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-10">
      <Link href="/" className="text-xl font-bold">
        MovieBase
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-3 items-center">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={isActive ? "font-semibold" : ""}
              >
                {label}
              </Button>
            </Link>
          );
        })}
        <ModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="pr-6">
            <div className="flex flex-col gap-4 mt-8 px-1">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href;
                return (
                  <Link key={href} href={href}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start ${isActive ? "font-semibold" : ""}`}
                    >
                      {label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
