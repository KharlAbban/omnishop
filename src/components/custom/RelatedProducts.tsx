'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const collections = [
  "CHRISTMAS COLLECTION",
  "BASIC",
  "EXCLUSIVE",
  "ORIENTAL COLLECTION",
]

const products = [
  {
    title: "CUTLERY SET (24 PCS)",
    price: 112.00,
    image: "/placeholder.svg",
    colors: ["#D4B883", "#2A2A2A"],
  },
  {
    title: "CHRISTMAS WINE GLASSES SET (2 PCS)",
    price: 19.69,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product_details_more_section_sample-PsHfYrip37RIR1georYPumK5MxJwBP.png",
    colors: [],
  },
  {
    title: "AROMA CANDLE IN A GLASS CANDLESTICK",
    price: 9.99,
    image: "/placeholder.svg",
    colors: [],
  },
  {
    title: "CHRISTMAS TREE DECORATIONS SET (40 PCS)",
    price: 129.00,
    image: "/placeholder.svg",
    colors: ["#D4B883", "#2A2A2A"],
  },
]

export function RelatedProducts() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">YOU MAY BE INTERESTED</h2>
        <Button variant="outline" className="hidden sm:inline-flex">
          VIEW ALL
        </Button>
      </div>
      
      <Tabs defaultValue="CHRISTMAS COLLECTION" className="w-full">
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="overflow-auto pb-4">
            <TabsList className="h-auto w-full justify-start gap-4 bg-transparent p-0">
              {collections.map((collection) => (
                <TabsTrigger
                  key={collection}
                  value={collection}
                  className="whitespace-nowrap border-b-2 border-transparent px-0 pb-4 pt-0 text-sm font-medium data-[state=active]:border-primary"
                >
                  {collection}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>
      </Tabs>

      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div> */}

      <Button variant="outline" className="w-full sm:hidden">
        VIEW ALL
      </Button>
    </section>
  )
}