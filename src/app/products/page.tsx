import Filters from "@/components/filters"
import LoadMore from "@/components/load-more";
import ProductCard from "@/components/product-card";
import { ProductType } from "@/types/product";
import { Suspense } from "react";

interface ProductListingPageProps { searchParams: Promise<{ search?: string; sortBy?: string; category?: string,page?: string }>; }

const ProductListingPage: React.FC<ProductListingPageProps> = async ({ searchParams }) => {
    const { search, sortBy, category ,page} = await searchParams
    const data = await fetch(`${process.env.NEXT_BASE_URL}/api/products?category=${category || ''}&search=${search || ''}&sortBy=${sortBy || ''}&page=${page||1}`).then(r => r.json())
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
            <LoadMore />
        </div>
        </Suspense>
    )
}
export default ProductListingPage