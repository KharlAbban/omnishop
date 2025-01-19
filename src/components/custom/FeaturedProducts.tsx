import { ProductCard } from "@/components"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { meatCategoriesOnly } from "@/utils/constants"
import { ProductType } from "@/utils/types"

interface FeaturedProductsProps {
  featuredPoultry: ProductType[],
  featuredSeafood: ProductType[],
  featuredRuminants: ProductType[],
}

export function FeaturedProducts({featuredPoultry, featuredRuminants, featuredSeafood}: FeaturedProductsProps) {
  return (
    <section className="space-y-8 py-16 px-8">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <Tabs defaultValue={meatCategoriesOnly[0]}>
          <TabsList className="mb-8">
            {meatCategoriesOnly.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
            <TabsContent value={meatCategoriesOnly[0]}>
              <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar">
                {featuredPoultry.map((product) => (
                  <div key={product._id} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5">
                    <ProductCard key={product._id} product={product} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value={meatCategoriesOnly[1]}>
              <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar">
                {featuredRuminants.map((product) => (
                  <div key={product._id} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5">
                    <ProductCard key={product._id} product={product} />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value={meatCategoriesOnly[2]}>
              <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar">
                {featuredSeafood.map((product) => (
                  <div key={product._id} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5">
                    <ProductCard key={product._id} product={product} />
                  </div>
                ))}
              </div>
            </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

