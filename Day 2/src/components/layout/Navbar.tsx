"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <nav className="bg-black border-b border-red-700 sticky top-0 z-10">
      <div className="flex justify-between items-center px-6 py-4">
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
                  className={
                    isActive ? "font-semibold text-red-400" : "text-gray-300"
                  }
                >
                  {label}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="ml-4">
          {session ? (
            <Button
              onClick={() => signOut()}
              className="bg-red-600 hover:bg-red-700"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => signIn()}
              className="bg-red-600 hover:bg-red-700"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
