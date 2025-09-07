"use client";

import PrimaryButton from "@/components/primary-button";
import Link from "next/link";
import { useState } from "react";

export default function ShoppingCart() {
    const [cart, setCart] = useState([
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack",
            description: "Your perfect pack for everyday use and walks in the forest...",
            price: 109.95,
            quantity: 4,
            category: "men's clothing",
            rating: { rate: 3.9, count: 120 },
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirt",
            description: "Slim-fitting style, contrast raglan long sleeve...",
            price: 22.3,
            quantity: 1,
            category: "men's clothing",
            rating: { rate: 4.1, count: 259 },
        },
        {
            id: 3,
            title: "Mens Cotton Jacket",
            description: "Great outerwear jackets for Spring/Autumn...",
            price: 55.99,
            quantity: 6,
            category: "men's clothing",
            rating: { rate: 4.7, count: 500 },
        },
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: Math.max(1, item.quantity + delta),
                    }
                    : item
            )
        );
    };

    const removeItem = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <div className="mx-auto p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-gray-600 mb-6">Review and manage your cart items</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4 px-4 py-2 rounded-lg border border-gray-300">
                    <h2 className="text-lg font-semibold">Cart Items</h2>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row sm:items-start sm:justify-between p-4 border border-gray-200 rounded-lg gap-4"
                        >
                            {/* Left */}
                            <div className="flex gap-4 flex-1">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded"></div>
                                <div>
                                    <h3 className="font-medium text-gray-800 truncate w-56 sm:w-64">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                                            {item.category}
                                        </span>
                                        <span className="text-yellow-500 text-sm">★</span>
                                        <span className="text-sm text-gray-600">
                                            {item.rating.rate} ({item.rating.count})
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="flex sm:flex-col items-center sm:items-end gap-2">
                                <span className="font-semibold">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                                <div className="flex items-center border rounded">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="px-2 py-1"
                                    >
                                        -
                                    </button>
                                    <span className="px-3">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="px-2 py-1"
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-sm text-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

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
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <PrimaryButton title="Proceed to Checkout" className="py-3" />
                        <Link href='/products' className="w-full mt-2 border py-2 text-sm rounded-lg hover:bg-gray-100 transition text-center">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
