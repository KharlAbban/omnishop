'use client'

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from "@/components/ui/button"

interface ProductGalleryProps {
  images: string[]
}

export function ProductImageGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <div className="w-full">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt="Product image"
          className="object-cover"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 w-2 rounded-full ${
                currentImage === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={() => setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90"
          onClick={() => setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex gap-4 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative aspect-square h-20 flex-shrink-0 overflow-hidden rounded-lg border-2 ${
              currentImage === index ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              className="object-cover"
              fill
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

