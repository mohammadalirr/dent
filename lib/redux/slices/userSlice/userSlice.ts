import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success(`! خوش آمدی ${state.userData.name} `, {
        position: "top-right"
      })

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
