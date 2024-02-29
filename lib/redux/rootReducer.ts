import { userAPI } from "@/app/api/userApi";
import { cartSlice } from "./slices/cartSlice/cartSlice";
import { layoutSlice } from "./slices/layoutSlice/layoutSlice";
import { userSlice } from "./slices/userSlice/userSlice";

export const reducer = {
    cart: cartSlice.reducer,
    layout: layoutSlice.reducer,
    user: userSlice.reducer,
    [userAPI.reducerPath]: userAPI.reducer
}