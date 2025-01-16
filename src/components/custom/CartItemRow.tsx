'use client'

import Image from "next/image"
import { Minus, Plus, Trash2 } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import type { CartItemType } from "@/utils/types"

interface CartItemProps extends CartItemType {
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
  onSelect: (id: string, checked: boolean) => void
  isSelected: boolean
}

export function CartItemRow({
  productId,
  name,
  price,
  quantity,
  image,
  onQuantityChange,
  onRemove,
  onSelect,
  isSelected,
}: CartItemProps) {
  return (
    <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-4 sm:grid-cols-[auto,1fr,1fr,auto]">
      <Checkbox
        checked={isSelected}
        onCheckedChange={(checked) => onSelect(productId, checked as boolean)}
        className="translate-y-1"
      />
      <div className="flex items-center gap-4">
        <div className="relative aspect-square h-20 overflow-hidden rounded-lg">
          <Image
            src="/omnishop-logo.png"
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{name}</h3>
          <Button
            variant="ghost"
            size="sm"
            className="mt-2 h-auto p-0 text-muted-foreground hover:text-foreground sm:hidden"
            onClick={() => onRemove(productId)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 sm:justify-start">
        <div className="flex items-center rounded-md border">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => onQuantityChange(productId, Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
          >
            <Minus className="h-3 w-3" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <div className="w-12 text-center text-sm">{quantity}</div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-none"
            onClick={() => onQuantityChange(productId, quantity + 1)}
          >
            <Plus className="h-3 w-3" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
        <div className="hidden sm:block">
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-muted-foreground hover:text-foreground"
            onClick={() => onRemove(productId)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </div>
      <div className="text-right font-medium">
        ${(price * quantity).toFixed(2)}
      </div>
    </div>
  )
}