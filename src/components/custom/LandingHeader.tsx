"use client"

import { Button } from "../ui/button";
import { APP_TITLE } from "@/utils/constants";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function LandingHeader () {
    const pathname = usePathname();
    const dontShowButton = pathname.includes("/sign-in") || pathname.includes("/sign-up");

    return (
        <header className="bg-gray-100 py-2 fixed w-full z-50 border-b border-b-theme-black shadow">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <Image alt={APP_TITLE} src="/omnishop-logo.png" width={50} height={50} />
                OmniShop Meats
            </h1>
          </Link>
          <nav className="md:block">
            <ul className="flex items-center space-x-4">
              <li>
                  {!dontShowButton && <Button variant="signin" asChild className="md:mx-4"><Link href="/home" className="flex items-center gap-2">See Products <ArrowRightIcon /></Link></Button>}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}