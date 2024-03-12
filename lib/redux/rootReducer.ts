import { userAPI } from "@/app/api/userApi";
import { cartSlice } from "./slices/cartSlice/cartSlice";
import { layoutSlice } from "./slices/layoutSlice/layoutSlice";
import { userSlice } from "./slices/userSlice/userSlice";
import { productAPI } from "@/app/api/store/productApi";
import { wcSlice } from "./slices/wcSlice/wcSlice";

export const reducer = {
    cart: cartSlice.reducer,
    layout: layoutSlice.reducer,
    user: userSlice.reducer,
    wc: wcSlice.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
}