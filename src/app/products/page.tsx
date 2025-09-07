import Filters from "@/components/filters"
import ProductCard from "@/components/product-card";
import ProductSkeletonList from "@/skeleton/product-listing-skeleton";
import { ProductType } from "@/types/product";
import { axiosInstance } from "@/utils/axios-instance";
import { Suspense } from "react";

interface ProductListingPageProps { searchParams: Promise<{ search?: string; sortBy?: string; category?: string }>; }

const ProductListingPage: React.FC<ProductListingPageProps> = async ({ searchParams }) => {
    const { search, sortBy, category } = await searchParams
    const { data } = await axiosInstance.get(`/api/products?category=${category || ''}&search=${search || ''}&sortBy=${sortBy || ''}`);
    const productList: ProductType[] = data;

    return (
        <Suspense fallback={<ProductSkeletonList />}>
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