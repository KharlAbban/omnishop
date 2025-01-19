import { ProductCard } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductType } from "@/utils/types";
import axios from "axios";
import { Search } from "lucide-react";

export default async function SearchResultsPage ({searchParams}: {searchParams: Promise<{searchQuery?: string}>}) {
    const searchQuery = (await searchParams).searchQuery;
    let products: ProductType[];
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL;

    if (!backendUrl) throw new Error("No backend server url found!!");

    if (searchQuery == undefined || searchQuery == "") {
        products = [];
      } else {
        const searchResults = await axios.get(`${backendUrl}/api/products/search/${searchQuery}`);
        products = searchResults.data;
    }

    return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-sm mb-4">Search Results for</h1>
          <h1 className="text-2xl font-bold mb-4">{searchQuery}</h1>
          <form action="/home/search" className="mb-8">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                name="searchQuery"
                type="search"
                placeholder="Search products..."
                className="w-full pl-8"
                defaultValue={searchQuery || ""}
              />
              <Button type="submit" className="absolute right-0 top-0">
                Search
              </Button>
            </div>
          </form>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {products.length > 0 ?
                products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                )) :
                <div className="h-60vh w-screen relative flex items-center justify-center">
                    <h1 className="text-2xl font-semibold">No products found for {searchQuery}</h1>
                </div>
            }
          </div>
        </div>
      )
}