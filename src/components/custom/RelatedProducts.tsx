import { Button } from "@/components/ui/button"
import { ProductCard } from "./ProductCard"
import { ProductType } from "@/utils/types";
import axios from "axios";

export default async function RelatedProducts({productCategory, productId}: {productCategory: string, productId: string}) {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

  if (!backendUrl) throw new Error("No backend server url found!!");
  
  const {data} = await axios.get(`${backendUrl}/api/products/search/${productCategory}`)

  if (!data) return null;

  const products = data.filter((product: ProductType) => product._id !== productId);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium">YOU MAY BE INTERESTED</h2>
      </div>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {products.map((product: ProductType) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  )
}