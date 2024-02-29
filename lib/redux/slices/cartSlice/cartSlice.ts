import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit";

// interface cartState {
//     // products: [{id: number, qty: number}],
//     products: [number],
// }

const initialState: CartSliceState = {
  products: [],
  details: [],
  cartPrice: 0,
  cartQty: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ price: number; id: number }>
    ) => {
      let payload = action.payload;
      const { price, id } = payload;
      console.log("id", id, "price", price);
      const find = state.products.find((p: any) => p === action.payload);
      console.log(find);
      if (find === undefined) {
        state.products.push(id);
        state.details.push({ id: id, qty: 1, price: price });
        console.log(current(state));
      }
    },
    increment: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const foundIndex = state.details.findIndex((p: any) => p.id === payload);
      if (state.details) {
        state.details[foundIndex].qty += 1;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const foundIndex = state.details.findIndex((p: any) => p.id === payload);
      if (state.details) {
        state.details[foundIndex].qty -= 1;
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const payload = action.payload;
      const filteredP = state.products.filter((p: any) => p !== payload);
      const filteredD = state.details.filter((p: any) => p.id !== payload);
      state.products = filteredP;
      state.details = filteredD;
    },
    calculator: (state) => {
      const priceArr = state.details.map((item: any) => item.qty * item.price);
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
  },
});

// export const {addToCart} = cartSlice.actions;
// export default cartSlice.reducer;

export interface CartSliceState {
  products: any;
  details: any;
  cartPrice: number;
  cartQty: number;
}
