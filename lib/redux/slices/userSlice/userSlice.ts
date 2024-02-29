import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: UserSliceState = {
  tkn: "",
  userData: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setHeaders: (state, action: PayloadAction<string>) => {
      const payload = action.payload;
      // console.log(payload, "IN SLICE");
      state.tkn = payload;
      // console.log(state.tkn, "setState");
    },
    setUserData: (state, action: PayloadAction<any>) => {
      state.userData = action.payload;
    },
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
    // setSignUpData: (state, action: PayloadAction<string>) => {
    //   const payload = action.payload;
    //   state.tkn = payload;
    // },
  },
});

export interface UserSliceState {
  tkn: string;
  userData: null | any;
  isAuth: boolean;
}
