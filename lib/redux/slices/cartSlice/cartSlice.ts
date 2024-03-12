import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { products } from "@/src/data/products";
import { reduxStore } from "../..";

// interface cartState {
//     // products: [{id: number, qty: number}],
//     products: [number],
// }

const initialState: CartSliceState = {
  productsId: [],
  details: [],
  cartPrice: 0,
  cartQty: 0,
  allProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: (
    //   state,
    //   action: PayloadAction<{ price: number; id: number }>
    // ) => {
    //   let payload = action.payload;
    //   const { price, id } = payload;
    //   console.log("id", id, "price", price);
    //   const find = state.productsId.find((p: any) => p === action.payload);
    //   console.log(find);
    //   if (find === undefined) {
    //     state.productsId.push(id);
    //     state.details.push({ id: id, qty: 1, price: price });
    //     console.log(current(state));
    //   }
    // },
    addToCart: (state, action: PayloadAction<number>) => {
      let payload = action.payload;
      console.log(payload);

      // console.log(added);

      const find = state.productsId.find((p: any) => p === action.payload);
      console.log(find);
      //TEST
      // if (find === undefined) {
      //   state.productsId.push(payload);
      //   const product = products.find((p: any) => p.id === payload);
      //   console.log(product, "products");
      //   state.details.push({product, qty: 1});
      //   console.log(current(state));
      // }
      if (find === undefined) {
        state.productsId.push(payload);
        console.log(current(state.allProducts), "ALL");
        const product = state.allProducts.find((p: any) => p.id === payload);
        console.log(product, "products");
        state.details.push({product, qty: 1});
        console.log(current(state));
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const foundIndex = state.details.findIndex((p: any) => p.product.id === payload);
      if (state.details) {
        state.details[foundIndex].qty += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const foundIndex = state.details.findIndex((p: any) => p.product.id === payload);
      if (state.details) {
        state.details[foundIndex].qty -= 1;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const filteredP = state.productsId.filter((p: any) => p !== payload);
      const filteredD = state.details.filter((p: any) => p.product.id !== payload);
      state.productsId = filteredP;
      state.details = filteredD;
    },
    calculator: (state) => {
      const priceArr = state.details.map((item: any) => item.qty * item.product.price);
      const qtyArr = state.details.map((item: any) => item.qty);
      // console.log("Array", priceArr);
      const sumPrice = priceArr.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
      const sumQty = qtyArr.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      );
      state.cartPrice = sumPrice;
      state.cartQty = sumQty;
    },
    setAllProducts: (state, action: PayloadAction<any>) => {
      console.log("getAllProducts")
      state.allProducts = action.payload
    }
  },
});

// export const {addToCart} = cartSlice.actions;
// export default cartSlice.reducer;

export interface CartSliceState {
  productsId: any;
  details: any;
  cartPrice: number;
  cartQty: number;
  allProducts: any;
}
