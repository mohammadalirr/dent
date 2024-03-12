    import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit";
    import { toast } from "react-toastify";
    import { products } from "@/src/data/products";

    // interface cartState {
    //     // products: [{id: number, qty: number}],
    //     products: [number],
    // }

    const initialState: wcStateSlice = {
      wcProducts: [],
    };

    export const wcSlice = createSlice({
      name: "wc",
      initialState,
      reducers: {
        setProducts: (state, acttion: PayloadAction<number>) => {
            state.wcProducts = acttion.payload;
        }
      },
    });

    // export const {addToCart} = cartSlice.actions;
    // export default cartSlice.reducer;

    export interface wcStateSlice {
      wcProducts: any;
    }
