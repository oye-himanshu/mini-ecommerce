'use client'
import Link from "next/link"
import PrimaryButton from "../primary-button"
import { useAppSelector } from "@/redux/hooks"

const OrderSummary: React.FC = () => {
     const carts = useAppSelector((state) => state.cart.carts)
     const subtotal = carts.reduce((sum, item) => sum + item.price * item.qty, 0);
     const tax = subtotal*0.01;
     const totalAmount = subtotal+tax

    return (
       <div className="p-4 rounded-lg h-fit border border-gray-300">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg border-t pt-2">
                            <span>Total</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <PrimaryButton title="Proceed to Checkout" className="py-3 font-semibold" />
                        <Link href='/products' className="w-full mt-2 border py-2 text-xs font-semibold rounded-lg hover:bg-gray-100 transition text-center">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
    )
}

export default OrderSummary