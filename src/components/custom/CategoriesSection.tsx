import { meatCategoryPlusDescription } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"

export function CategoriesSection() {
  return (
    <section className="bg-muted py-16 px-8">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meatCategoryPlusDescription.map((category) => (
            <Link
              key={category.title}
              href="/home"
              className="group relative aspect-square overflow-hidden rounded-lg border"
            >
              <Image
                src={category.image || "/omnishop-logo.png"}
                alt={category.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 p-4">
                <div className="flex h-full flex-col justify-end">
                  <div className="bg-theme-black/95 px-2 py-4 text-gray-50 rounded">
                    <h3 className="mb-2 text-2xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

