import { createSlice } from "@reduxjs/toolkit";

export interface WishlistType {
    wishlist: number[];
}

const initialState: WishlistType = {
    wishlist: [],
};

export const Wishlist = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            const cartItem = action.payload;
            state.wishlist = cartItem
        },
    },
});

export const { addToWishList } = Wishlist.actions;

export default Wishlist.reducer;