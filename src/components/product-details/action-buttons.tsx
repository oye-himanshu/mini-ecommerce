'use client'
import PrimaryButton from "../primary-button"
import { ProductType } from "@/types/product"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { addCart } from "@/redux/slice/cart"
import toast from "react-hot-toast"
import { addToWishList } from "@/redux/slice/wish-list"
import Image from "next/image"

const ActionButtons: React.FC<{ productDetails: ProductType }> = ({ productDetails }) => {
    const dispatch = useAppDispatch()
    const wishlistItems = useAppSelector((state) => state.Wishlist.wishlist)
    const isWishlisted = wishlistItems.includes(productDetails.id)

    const handleAddToCart = () => {
        dispatch(addCart(productDetails))
    }
    
    const handleAddToWishlist = () => {
        if (isWishlisted) {
            const filterItems = wishlistItems.filter((id) => id !== productDetails.id)
            dispatch(addToWishList(filterItems))
            toast.success('Removed from wishlist')
        } else {
            const items = [...wishlistItems, productDetails.id]
            dispatch(addToWishList(items))
            toast.success('Successfully added to wishlist')
        }
    }

    return (
        <>
            <div className="flex items-center gap-5">
                <PrimaryButton title="ADD TO CART" className="max-w-full w-full py-3 rounded-sm" onClick={handleAddToCart} />
                <PrimaryButton title="BUY NOW" className="max-w-full w-full py-3 rounded-sm" />
            </div>
            <button className="flex items-center gap-1 cursor-pointer" onClick={handleAddToWishlist}>
                <Image width={10} height={10} alt="wishlist" src={!isWishlisted ? '/images/heart-outline.svg' : '/images/heart-contained.svg'} className="w-5" />
                <span className="text-sm">Wishlist</span>
            </button></>
    )
}

export default ActionButtons;