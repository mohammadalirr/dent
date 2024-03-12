import type { ReduxState } from "../../store";
export const selectProducts = (state: ReduxState) => state.cart.productsId
export const selectDetails = (state: ReduxState) => state.cart.details
export const selectQty = (state: ReduxState) => state.cart.cartQty
export const selectPrice = (state: ReduxState) => state.cart.cartPrice
export const selectAllProducts = (state: ReduxState) => state.cart.allProducts
