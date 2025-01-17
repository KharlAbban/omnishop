import { ProductImageGallery } from "@/components"
import { ProductQuantitySelector } from "@/components"
import { Badge } from '@/components/ui/badge'
import axios from "axios";

export default async function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const {productId} = await params;
  const productInfo = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/api/products/${productId}`);

  if (!productInfo) {
    return <p>Product not found</p>;
  }

  const {category, description, images, inStock, name, poundsLeft, pricePerPound, origin, expiryDate, storageInstructions} = productInfo.data;

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductImageGallery images={images} />

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">{name}</h1>
              <p className="mt-2 text-sm text-muted-foreground flex items-center gap-6">{inStock && <Badge className='bg-green-500'>In Stock</Badge>} {category}</p>
              <p className="mt-4 text-2xl font-bold">${pricePerPound.toString()} /lb</p>
            </div>

            <p className="text-muted-foreground">{description}</p>

            <div className="max-lg:space-y-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div>
                <h2 className="font-bold">STORAGE INSTRUCTIONS:</h2>
                <p className="text-muted-foreground">{storageInstructions}</p>
              </div>

              <div>
                <h2 className="font-bold">ORIGIN:</h2>
                <p className="text-muted-foreground">{origin}</p>
              </div>

              <div>
                <h2 className="font-bold">EXPIRY DATE:</h2>
                <p className="text-muted-foreground">{expiryDate}</p>
              </div>
            </div>

              <ProductQuantitySelector
                productName={name}
                productImageUrl={images[0]}
                pricePerPound={pricePerPound}
                poundsLeft={poundsLeft}
                productId={productId}
              />
          
          </div>
        </div>

        <div className="mt-16 border-t pt-16">
          {/* <RelatedProducts /> */}
        </div>
      </main>
    </div>
  )
}