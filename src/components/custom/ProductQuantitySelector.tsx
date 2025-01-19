'use client'

import { Minus, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { addItemToCart, saveCartItems } from '@/lib/reduxStore/reduxSlices/cartSlice'
import { useToast } from '@/hooks/use-toast'
import { useSession } from 'next-auth/react'

interface QuantitySelectorProps {
  min?: number
  poundsLeft: number,
  productId: string,
  pricePerPound: number,
  productName: string,
  productImageUrl: string
}

export function ProductQuantitySelector({ min = 1, poundsLeft, productId, pricePerPound, productName, productImageUrl }: QuantitySelectorProps) {
    const [quantity, setQuantity] = useState(1);
    const cartDispatch = useAppDispatch();
    const {data:session} = useSession();
    const cartItems = useAppSelector(state => state.cart.items);
    const cartItem = cartItems.find(item => item.productId === productId);
    const {toast} = useToast();
    const cartItemQuantity = cartItem ? cartItem.quantity : 0;
    const max = Math.floor((Number(poundsLeft) / Number(pricePerPound)) - cartItemQuantity)

    const handleAddItemToCart = async () => {
      
      cartDispatch(addItemToCart({
        productId,
        name: productName,
        price: pricePerPound,
        image: productImageUrl,
        quantity: quantity >= max ? max : quantity
      }));

      let updatedCart = cartItems.map(item => (
        item.productId === productId ? {...item, quantity: item.quantity >= max ? max : item.quantity + quantity} : item
      ))

      if (!cartItems.some((item) => item.productId === productId)) {
        updatedCart.push({
          productId,
          name: productName,
          price: pricePerPound,
          image: productImageUrl,
          quantity: quantity >= max ? max : quantity,
        });
      }

      
      // save product to user's cart in database
      if (session?.user?.email) {
        const savedCart = await cartDispatch(saveCartItems({
          cartItems: updatedCart,
          userEmail: session.user.email
        }));

        if (savedCart) console.log(savedCart);
      }

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
          <div className="w-12 text-center text-lg">{quantity >= max ? max : (quantity)}</div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity((prevQuantity) => Math.min(max, prevQuantity + 1))}
            disabled={quantity >= max}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button disabled={max <= 0} className="w-full sm:w-auto" size="lg" onClick={handleAddItemToCart}>
          {cartItem ? 'UPDATE CART':'ADD TO CART'} €{pricePerPound.toString()}
        </Button>
        <p className="text-sm text-gray-500">{max <= 0 ? 0 : max} pounds left</p>
      </div>
      {cartItem && (
        <p className='text-sm text-muted-foreground'>
          You have {cartItem.quantity} {cartItem.quantity > 1 ? "pounds": "pound"} of this item in your cart
        </p>
      )}
    </>
  )
}

