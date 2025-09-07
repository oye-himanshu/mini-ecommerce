import Divider from "@/components/divider"
import Image from "next/image"
import { axiosInstance } from "@/utils/axios-instance";
import { ProductType } from "@/types/product";
import ActionButtons from "@/components/product-details/action-buttons";
import RatingComponent from "@/components/rating";
import { Suspense } from "react";
import ProductSkeleton from "@/skeleton/product-details-skeleton";

const ProductDetailPage: React.FC<{
    params: Promise<{ productId: string }>
}> = async ({
    params,
}) => {
        const { productId } = await params
        const { data } = await axiosInstance.get(`/api/products/${productId}`);
        const productDetails: ProductType = data

        return (
            <Suspense fallback={<ProductSkeleton />}>
            <div className="flex sm:flex-row flex-col sm:gap-10 gap-5 sm:py-10 py-5">
                <div className="w-full">
                    <Image src={productDetails.image} alt={productDetails.title} width={500} height={300} className="max-w-80 w-full object-contain m-auto" />
                </div>
                <div className="flex flex-col sm:gap-2 gap-1 w-full">
                    <span className="bg-gray-100 text-xs me-2 px-2.5 py-0.5 rounded-sm font-semibold w-fit text-center mb-5">{productDetails.category}</span>
                    <h3 className="text-2xl font-semibold text-black/60">{productDetails.title}</h3>
                    <h5 className="font-semibold text-2xl">${productDetails.price}</h5>
                    <div className="flex items-center gap-2 w-full">
                        <RatingComponent count={productDetails.rating.rate}/>
                        <span className="font-semibold text-xs">{productDetails.rating.rate}</span>
                    <p className="text-xs">({productDetails.rating.count} reviews)</p></div>
                    <Divider className='my-2' />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Description-</p>
                        <p className="text-xs">{productDetails.description}</p>
                    </div>
                    <Divider className='my-2' />
                    <ActionButtons productDetails={productDetails} />
                </div>
            </div>
            </Suspense>
        )
    }

export default ProductDetailPage