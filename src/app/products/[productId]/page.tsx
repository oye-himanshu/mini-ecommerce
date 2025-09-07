import Divider from "@/components/divider"
import PrimaryButton from "@/components/primary-button"
import Image from "next/image"
import { Icon } from '@iconify/react';
import { axiosInstance } from "@/utils/axios-instance";
import { ProductType } from "@/types/product";

const ProductDetailPage: React.FC<{
    params: Promise<{ productId: string }>
}> = async ({
    params,
}) => {
        const { productId } = await params
        const { data } = await axiosInstance.get(`/api/products/${productId}`);
        const productDetails: ProductType = data

        return (
            <div className="flex gap-10 py-10">
                <div className="w-full">
                    <img src={productDetails.image} alt={productDetails.title} width={500} height={300} className="max-w-80 w-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <span className="bg-green-100 text-green-800 text-xs me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 font-semibold max-w-20 text-center mb-5">{productDetails.category}</span>
                    <h3 className="text-2xl font-semibold text-black/60">{productDetails.title}</h3>
                    <h5 className="font-semibold text-2xl">$ {productDetails.price}</h5>
                    <p className="text-xs">({productDetails.rating.count} reviews)</p>
                    <Divider className='my-2' />
                    <div className="flex flex-col gap-1">
                        <p className="font-semibold">Description-</p>
                        <p className="text-xs">{productDetails.description}</p>
                    </div>
                    <Divider className='my-2' />
                    <div className="flex items-center gap-5">
                        <PrimaryButton title="ADD TO CART" className="max-w-full w-full py-3 rounded-sm" />
                        <PrimaryButton title="BUY NOW" className="max-w-full w-full py-3 rounded-sm" />
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon='mdi:heart' fontSize={20} className="cursor-pointer" />
                        <p className="text-sm">Wishlist</p>
                    </div>
                </div>
            </div>
        )
    }

export default ProductDetailPage