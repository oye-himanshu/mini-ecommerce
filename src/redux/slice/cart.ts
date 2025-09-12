import { ProductType } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export interface CartItem extends ProductType {
    qty: number;
}

export interface CartType {
    carts: CartItem[];
}

const initialState: CartType = {
    carts: [],
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const cartItem = action.payload;
            const existingItem = state.carts.find(item => item.id === cartItem.id);
            if (state.carts.length > 0 && existingItem) {
                existingItem.qty += 1;
                toast.success('quantity increased by 1')
            } else {
                state.carts = [...state.carts, { ...cartItem, qty: 1 }]
                toast.success('Item successfully added to cart')
            }

        },
        removeCart: (state, action) => {
            const filterItems = state.carts.filter((item) => item.id !== action.payload);
            state.carts = filterItems
        },
        increaseQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.carts.find(item => item.id === cartId);
            if (existingItem) {
                existingItem.qty += 1;
                toast.success('quantity increased by 1')
            }
        },
        decreaseQty: (state, action) => {
            const cartId = action.payload;
            const existingItem = state.carts.find(item => item.id === cartId);
            if (existingItem) {
                existingItem.qty -= 1;
                toast.success('quantity decreased by 1')
            }
        },
        removeAllQty: (state, action) => {
            state.carts = action.payload
            toast.success('All items removed successfully!')
        },
    },
});

export const { addCart, removeCart, decreaseQty, increaseQty, removeAllQty } = CartSlice.actions;

export default CartSlice.reducer;