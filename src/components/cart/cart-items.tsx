'use client'
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { decreaseQty, increaseQty, removeCart } from "@/redux/slice/cart"
import Image from "next/image"
import Link from "next/link"

const CartItems: React.FC = () => {
    const dispatch = useAppDispatch()
     const carts = useAppSelector((state) => state.cart.carts)
    return (
       <div className="lg:col-span-2 space-y-4 px-4 py-2 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold">Cart Items</h2>
                    {carts.length >0 ? carts.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-start sm:justify-between p-4 border border-gray-200 rounded-lg gap-4"
                        >
                            <div className="flex items-center gap-4 flex-1">
                               <Image alt={item.title} width={20} height={50} src={item.image} className="w-auto h-14 object-contain"/>
                                <div>
                                    <Link href={`/products/${item.id}`} className="text-gray-800 hover:text-blue-600 transition font-semibold line-clamp-1">
                                        {item.title}
                                    </Link>
                                    <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                            {item.category}
                                        </span>
                                        <span className="text-yellow-500 text-sm">★</span>
                                        <span className="text-sm text-gray-600">
                                            {/* {item.rating.rate} ({item.rating.count}) */}
                                            dfdf
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end gap-2">
                                <span className="font-semibold">
                                    ${(item.price * item.qty).toFixed(2)}
                                </span>
                                <div className="flex items-center border rounded">
                                    <button
                                        onClick={() => dispatch(decreaseQty(item.id))}
                                        className="px-2 py-1 cursor-pointer"
                                        disabled={item.qty===1}
                                    >
                                        -
                                    </button>
                                    <span className="px-3">{item.qty}</span>
                                    <button
                                         onClick={() => dispatch(increaseQty(item.id))}
                                        className="px-2 py-1 cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => dispatch(removeCart(item.id))}
                                    className="text-sm text-red-600 hover:underline cursor-pointer"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    )):<p>No item found!</p>}
                </div>
    )
}

export default CartItems