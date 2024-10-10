"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// List of your website menu items
const MENU_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Admissions", href: "/admissions" },
  { name: "Research", href: "/research" },
  { name: "Campus Life", href: "/campus-life" },
  { name: "Careers", href: "/careers" },
  { name: "100x Login", href: "/100x-dashboard" },
  
]

export function SheetSide() {
  return (
    <Sheet>
      {/* Trigger button for the sheet */}
      <SheetTrigger asChild>
        <Button variant="outline" className="px-[13px] py-[5px] rounded-full">
          {/* SVG for hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </SheetTrigger>

      {/* Sheet content with menu items */}
      <SheetContent side="right">
        {/* <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader> */}

        {/* Menu list */}
        <nav className="grid gap-4 py-4">
          {MENU_ITEMS.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold text-black hover:text-yellow-400 dark:hover:text-yellow-400 dark:text-white transition-colors duration-30">
              {item.name}
            </a>
          ))}
        </nav>

      </SheetContent>
    </Sheet>
  )
}
