'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { heroSlides } from "@/utils/constants"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <Carousel className="w-full" opts={{loop: true}}>
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="max-h-[80vh]">
              <div className="relative aspect-[21/9] overflow-hidden bg-theme-black/50">
                <div className="absolute inset-0 bg-theme-black/70 z-10"></div>
                <Image
                  src={slide.image || "/meat_variety.png"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 z-20 text-gray-100">
                  <div className="container flex h-full flex-col justify-center px-16 md:px-6 lg:px-28 gap-4">
                    <h1 className="max-w-2xl max-xl:text-4xl xl:text-6xl font-bold tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="max-w-xl text-muted-foreground max-xl:text-sm">
                      {slide.description}
                    </p>
                    <div className="flex gap-4">
                      <Button size="lg" className="border border-gray-50 pointer-events-none">{slide.cta}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}

