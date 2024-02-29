import { ReduxState } from "@/lib/redux";
import {
  UserSliceState,
  userSlice,
} from "@/lib/redux/slices/userSlice/userSlice";
import {
  RootState,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://partsdental.com/bac/wp-json/wp/v2/",
    prepareHeaders: (headers, { getState }) => {
      //   const token = (getState() as UserSliceState).tkn;
      const token = (getState() as ReduxState).user.tkn;
      console.log(token, "IN API");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => ({
        // mode: "no-cors",
        url: `users/me`,
        method: "GET",
        params: {
          context: "edit",
        },
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery, useCreateUserMutation } = userAPI;
