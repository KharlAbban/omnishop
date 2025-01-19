export type SessionPayload = {
    userId: string;
    expiresAt: Date;
};

export interface ProductType {
  _id: string,
  name: string,
  description: string,
  category: string,
  pricePerPound: number,
  inStock: boolean,
  poundsLeft: number,
  images: string[],
  storageInstructions: string,
  origin: string,
  expiryDate: string,
  __v: number,
  createdAt: string,
  updatedAt: string
}

export interface ProductsStateType {
  items: ProductType[],
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

export interface CartStateType {
  items: CartItemType[],
  selected: string[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null
}

export interface CartItemType {
  productId: string,
  name: string,
  price: number,
  quantity: number,
  image: string
}