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
		addToBasket: (state: ProductState, action: PayloadAction<Products>) => {
			state.cart = [...state.cart, action.payload];
		},
		removeFromBasket: (state: ProductState, action) => {
			// const index = state.cart.findIndex(
			// 	(item) => item.id === action.payload.id
			// );
			// let newBasket = [...state.cart];
			// if (index >= 0) {
			// 	// the item is in the basket
			// 	newBasket.splice(index, 1);
			// } else {
			// 	console.warn(
			// 		`cant remove (id:${action.payload}) as its not in the basket `
			// 	);
			// }
			// state.cart = newBasket;
			state.cart.splice(
				state.cart.findIndex((item) => item.id === action.payload),
				1
			);
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = cartSlice.actions;

export default cartSlice.reducer;
