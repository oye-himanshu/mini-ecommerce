import { ProductType } from "@/types/product"
import Link from "next/link"
import RatingComponent from "./rating"

const ProductCard: React.FC<{ product: ProductType }> = ({ product }) => {
    return (
        <div className="shadow-md flex flex-col gap-2 bg-white">
            <img src={product?.image} alt={product?.title} height={150} width={200} className="aspect-video object-contain m-auto" />
            <div className="flex flex-col gap-2 px-4 py-2">
                <Link href={`/products/${product?.id}`} className="font-semibold hover:text-blue-600 duration-200 cursor-pointer line-clamp-1">{product?.title}</Link>
                <p className="text-xs font-semibold">{product?.category}</p>
                <p className="text-xs line-clamp-2">
                    {product?.description}
                </p>
                <div className="flex items-center gap-2">
                    <RatingComponent count={product.rating.rate}/>
                <p className="text-xs">({product?.rating.count})</p>
                </div>
                <p className="text-sm font-semibold">${product?.price}</p>
            </div>
        </div>
    )
}
export default ProductCard