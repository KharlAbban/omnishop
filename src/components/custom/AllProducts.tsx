import { ProductCard } from "@/components"
import { ProductType } from "@/utils/types"

export function AllProducts({meatProducts}: {meatProducts: ProductType[]}) {
  return (
    <section className="space-y-8 py-16 px-8">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">All Products</h2>
        
        {/* Products List */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {meatProducts.map((product) => (
            // <div key={product._id} className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/5">
              <ProductCard key={product._id} product={product} />
            // </div>
          ))}
        </div>

        {/* Products List */}
      </div>
    </section>
  )
}

