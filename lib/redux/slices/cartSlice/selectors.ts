import type { ReduxState } from "../../store";
export const selectProducts = (state: ReduxState) => state.cart.products
export const selectDetails = (state: ReduxState) => state.cart.details
export const selectQty = (state: ReduxState) => state.cart.cartQty
export const selectPrice = (state: ReduxState) => state.cart.cartPrice
