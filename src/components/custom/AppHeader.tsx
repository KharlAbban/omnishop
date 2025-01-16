'use client'

import Link from "next/link"
import { Search, Menu, ShoppingCart, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { APP_TITLE, meatCategories } from "@/utils/constants"

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white px-6">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {meatCategories.map((category) => (
                  <div key={category.title} className="space-y-2">
                    <h3 className="font-medium">{category.title}</h3>
                    <div className="space-y-2 pl-4">
                      {category.items.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block text-muted-foreground hover:text-foreground"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/home" className="text-xl font-bold flex items-center gap-1">
            <Image src="/omnishop-logo.png" height={50} width={50} alt={APP_TITLE} />
            {APP_TITLE}
          </Link>
        </div>
        <div className="hidden gap-4 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {meatCategories.map((category) => (
                <NavigationMenuItem key={category.title}>
                  <NavigationMenuTrigger>{category.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-48 gap-2 p-4">
                      {category.items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink asChild>
                            <Link
                              href="#"
                              className="block select-none rounded-md p-2 text-sm hover:bg-accent"
                            >
                              {item}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center lg:flex">
            <Search className="absolute ml-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 pl-9"
            />
        </div>
        <Button variant="ghost" size="icon" asChild>
            <Link href="/home/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
            </Link>
        </Button>
        <Button variant="ghost" size="icon" title="Log out">
            <User className="h-5 w-5" />
        </Button>
        </div>
      </div>
    </header>
  )
}