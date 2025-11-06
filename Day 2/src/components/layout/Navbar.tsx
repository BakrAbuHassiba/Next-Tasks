"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, LogOut, LogIn, User } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/movies", label: "Movies" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];


  if (session) {
    navLinks.push({ href: "/profile", label: "Profile" });
  }

  return (
    <nav className="bg-black/80 backdrop-blur-md border-b border-red-700 sticky top-0 z-10 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-2xl font-extrabold text-red-500 tracking-wide">
          🎬 Filmy
        </Link>

        <div className="hidden md:flex gap-4 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`${
                    isActive
                      ? "font-semibold text-red-400"
                      : "text-gray-300 hover:text-red-400"
                  } transition-colors duration-200`}
                >
                  {label}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="ml-4">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-gray-200 hover:text-white"
                >
                  <Avatar className="w-8 h-8 border border-red-400">
                    <AvatarImage src={session.user?.image || ""} />
                    <AvatarFallback>
                      {session.user?.name?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 text-white border-red-700">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex items-center gap-2">
                    <User className="w-4 h-4 text-red-400" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center gap-2 text-red-400 hover:text-red-500"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-zinc-900 text-white border-red-700">
                <DropdownMenuItem
                  onClick={() => signIn("github")}
                  className="hover:bg-red-700 flex items-center gap-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="GitHub"
                    className="w-4 h-4"
                  />
                  Sign in with GitHub
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => signIn("google")}
                  className="hover:bg-red-700 flex items-center gap-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                    alt="Google"
                    className="w-4 h-4"
                  />
                  Sign in with Google
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
}
