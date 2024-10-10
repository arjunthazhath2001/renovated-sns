"use client";
import Image from "next/image"; // Import Next.js Image component
import { ModeToggle } from "./ui/ModeToggle";
import { SheetSide } from "./SheetSide";

export default function Navbar() {
  return (
    <nav className="fixed w-full flex items-center justify-between px-6 py-6 bg-transparent z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/images/sns-logo.png"
          alt="logo"
          width={128}
          height={128}
          quality={100}
          className="w-14 h-9"
        />
      </div>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        {/* Menu Items */}
        <SheetSide />
      </div>
    </nav>
  );
}
