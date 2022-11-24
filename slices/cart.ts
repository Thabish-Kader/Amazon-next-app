import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../typings";

export interface ProductState {
	cart: Products[];
}

const initialState: ProductState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToBasket: (state, action) => {
			state.cart = [...state.cart, action.payload];
		},
		removeFromBasket: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = cartSlice.actions;

export default cartSlice.reducer;
