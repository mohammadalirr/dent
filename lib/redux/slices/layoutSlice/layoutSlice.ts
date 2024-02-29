import { createSlice, current, type PayloadAction } from "@reduxjs/toolkit";

const initialState: layoutSliceState = {
    portal: null,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setPortal: (state, action: PayloadAction<null | "login" | "signup">) => {
            const payload = action.payload
            console.log(payload, "payload")
            if (payload === "login") {
                state.portal = payload
                console.log('chenged')
            } else if (payload === "signup") {
                state.portal = payload
            } else {
                state.portal = null
            }
            console.log(current(state));
        }
    }
})

export interface layoutSliceState {
    portal: null | "login" | "signup";
}

