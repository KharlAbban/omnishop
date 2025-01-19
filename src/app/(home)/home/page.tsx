"use client"

import { AllProducts, HeroSection } from "@/components"
import { FeaturedProducts } from "@/components"
import { CategoriesSection } from "@/components"
import { useAppSelector } from "@/lib/hooks"
import { fetchAllProducts } from "@/lib/reduxStore/reduxSlices/productsSlice"
import { AppDispatch } from "@/lib/reduxStore/reduxStore"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Loading from "./loading"
import { fetchCartItems } from "@/lib/reduxStore/reduxSlices/cartSlice"
import { useSession } from "next-auth/react"

export default function ProductsHomePage() {
  const {data: session} = useSession();
  const productDispatch = useDispatch<AppDispatch>();
  const {error, status, items : meatProducts} = useAppSelector(state => state.products);

  // Dispatch: fetch products on component mount
  useEffect(() => {
    if (status === "idle") {
      productDispatch(fetchAllProducts());
      if (session?.user?.email) {
        productDispatch(fetchCartItems(session.user.email));
      }
    }
  }, [productDispatch, status]);

  if (status === "loading") {
    Loading();
  }

  if (status === "failed") {
    console.error("Error fetching products:", error);
    return null;
  }

  const featuredPoultryProducts = meatProducts.filter(product => (
    product.category ==="Chicken" || product.category ==="Duck" || product.category ==="Turkey" || product.category ==="Guinea Fowl"
  ));
  const featuredRuminantProducts = meatProducts.filter(product => (
    product.category ==="Mutton" || product.category ==="Beef"
  ));
  const featuredSeafoodProducts = meatProducts.filter(product => (
    product.category ==="Trout" || product.category ==="Crab" || product.category ==="Tuna"
  ));

  return (
      <main>
        <HeroSection />
        <FeaturedProducts featuredPoultry={featuredPoultryProducts.slice(0, 5)} featuredRuminants={featuredRuminantProducts.slice(0, 5)} featuredSeafood={featuredSeafoodProducts.slice(0, 5)} />
        <AllProducts meatProducts={meatProducts} />
        <CategoriesSection />
      </main>
  )
}

