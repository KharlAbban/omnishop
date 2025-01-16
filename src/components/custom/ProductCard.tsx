import Image from "next/image"
import { Plus } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ProductType } from "@/utils/types"

interface ProductCardProps {
  product: ProductType,
  className?: string
}

export function ProductCard({product, className}: ProductCardProps) {
  if (!product) return null;
  const {_id, inStock, name, pricePerPound} = product;

  return (
    <Link href={`/home/product/${_id}`}>
      <div className={cn("group relative flex flex-col", className)}>
        <div className="relative aspect-square overflow-hidden rounded-lg bg-theme-black">
          <Image
            src={product.images[0] || "/omnishop-logo.png"}
            alt={name}
            className="object-cover transition-transform group-hover:scale-105"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
          {inStock && <Button
            size="sm"
            className="absolute right-2 top-2 h-8 rounded-full bg-green-700 hover:bg-green-800"
          >
            <Plus className="h-4 w-4" />
            <span className="text-xs">In Stock</span>
          </Button>}
        </div>
        <div className="mt-4 flex flex-col">
          <h3 className="text-sm font-medium">{name}</h3>
          <p className="mt-1 font-medium">€{pricePerPound.toFixed(2)} /lb</p>
        </div>
      </div>
    </Link>
  )
}

