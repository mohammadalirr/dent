import { ReduxState } from "@/lib/redux";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://partsdental.com/bac/wp-json/wc/v3/",
    prepareHeaders: (headers, { getState }) => {
      //   const token = (getState() as UserSliceState).tkn;
      const token = (getState() as ReduxState).user.tkn;
      console.log(token, "IN API");

      //   if (token) {
      headers.set(
        "Authorization",
        `Bearer bW0ucmF5Mjpla2pHMlNTKVdIOEhWVmRLR09rQ21BZHQ`
      );
      //   }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
        params: {
          context: "edit",
        },
      }),
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body: body,
      }),
    }),
  }),
});
export const { useGetAllProductsQuery, useCreateProductMutation } = productAPI;
