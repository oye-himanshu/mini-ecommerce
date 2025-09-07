import CartItems from "@/components/cart/cart-items";
import OrderSummary from "@/components/cart/order-summary";

 const ShoppingCart =() => {
    return (
        <div className="mx-auto p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-gray-600 mb-6">Review and manage your cart items</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <CartItems />
                <OrderSummary/>
            </div>
        </div>
    );
}
export default ShoppingCart
