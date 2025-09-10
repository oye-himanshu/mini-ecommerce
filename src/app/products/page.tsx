import Filters from "@/components/filters"
import ProductCard from "@/components/product-card";
import { ProductType } from "@/types/product";
import { Suspense } from "react";

interface ProductListingPageProps { searchParams: Promise<{ search?: string; sortBy?: string; category?: string }>; }

const ProductListingPage: React.FC<ProductListingPageProps> = async ({ searchParams }) => {
    const { search, sortBy, category } = await searchParams
    const data = await fetch(`${process.env.NEXT_BASE_URL}/api/products?category=${category || ''}&search=${search || ''}&sortBy=${sortBy || ''}`).then(r => r.json())
    const productList: ProductType[] = data;

    return (
        <Suspense>
            <div className="sm:py-5 flex flex-col gap-5">
            <Filters />
            <div className="grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 items-stretch">
                {
                    productList.map((product) => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </div>
        </Suspense>
    )
}
export default ProductListingPage