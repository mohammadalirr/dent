import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import { useSelector as useReduxSelector, useDispatch as useReduxDispatch, type TypedUseSelectorHook  } from "react-redux";
import {reducer} from "./rootReducer";  
import { userAPI } from "@/app/api/userApi";
import { productAPI } from "@/app/api/store/productApi";

export const reduxStore = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userAPI.middleware, productAPI.middleware])
})
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/*Types*/
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch;