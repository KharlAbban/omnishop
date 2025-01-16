'use client'

import { Checkbox } from "@/components/ui/checkbox"
import { CartItemRow } from "@/components"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { removeItemFromCart, toggleSelectAll, toggleSelectedItem, updateItemQuantity } from "@/lib/reduxStore/reduxSlices/cartSlice"

export default function CartPage() {
  const cartDispatch = useAppDispatch();
  const {items, selected} = useAppSelector(state => state.cart);

  const handleQuantityChange = (productId: string, quantity: number) => {
    cartDispatch(updateItemQuantity({productId, quantity}))
  }

  const handleRemove = (productId: string) => {
    cartDispatch(removeItemFromCart(productId))
  }

  const handleSelect = (productId: string, isSelected: boolean) => {
    cartDispatch(toggleSelectedItem({productId, isSelected}))
  }

  const handleSelectAll = (checked: boolean) => {
    cartDispatch(toggleSelectAll(checked));
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Cart</h1>
        
        <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
          <div className="border-b">
            <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-3 text-sm text-muted-foreground sm:grid-cols-[auto,1fr,1fr,auto]">
              <Checkbox
                checked={selected.length === items.length}
                onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
              />
              <div>PRODUCT</div>
              <div className="text-right sm:text-left">QUANTITY</div>
              <div className="text-right">PRICE</div>
            </div>
          </div>

          <div className="divide-y">
            {items.map((item) => (
              <CartItemRow
                key={item.productId}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
                onSelect={handleSelect}
                isSelected={selected.includes(item.productId)}
              />
            ))}
          </div>

          <div className="mt-8 flex flex-col items-end gap-4">
            <div className="text-sm">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <button
                className="w-full rounded-full bg-black px-8 py-3 text-sm font-medium text-white hover:bg-black/90 sm:w-auto"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}