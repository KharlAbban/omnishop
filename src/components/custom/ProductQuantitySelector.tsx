'use client'

import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addItemToCart } from '@/lib/reduxStore/reduxSlices/cartSlice'
import { useToast } from '@/hooks/use-toast'

interface QuantitySelectorProps {
  min?: number
  max?: number,
  productId: string,
  pricePerPound: number,
  productName: string,
  productImageUrl: string
}

export function ProductQuantitySelector({ min = 1, max = 99, productId, pricePerPound, productName, productImageUrl }: QuantitySelectorProps) {
    const [quantity, setQuantity] = useState(1);
    const cartDispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items);
    const cartItem = cartItems.find(item => item.productId === productId);
    const {toast} = useToast();

    const handleAddItemToCart = () => {
      cartDispatch(addItemToCart({
        productId,
        name: productName,
        price: pricePerPound,
        image: productImageUrl,
        quantity
      }));

      toast({
        title: `Added "${productName}" to your cart`,
        description: `${quantity} ${quantity === 1 ? 'pound' : 'pounds'} of ${productName} added to your cart`,
        duration: 2000,
      });
    }

  return (
    <>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((prevQuantity) => Math.max(min, prevQuantity - 1))}
            disabled={quantity <= min}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <div className="w-12 text-center text-lg">{quantity}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((prevQuantity) => Math.min(max, prevQuantity + 1))}
            disabled={quantity >= max}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button className="w-full sm:w-auto" size="lg" onClick={handleAddItemToCart}>
          {cartItem ? 'UPDATE CART':'ADD TO CART'} €{pricePerPound.toString()}
        </Button>
        <p className="text-sm text-gray-500">{max} pounds left</p>
      </div>
      {cartItem && (
        <p className='text-sm text-muted-foreground'>
          You have {cartItem.quantity} of this item in your cart
        </p>
      )}
    </>
  )
}

