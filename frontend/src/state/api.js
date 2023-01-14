import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// @ts-ignore
const URL = process.env.REACT_APP_BASE_URL
// @ts-ignore
export const api = createApi({
  // @ts-ignore
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  reducerPath: "AdminApi",
  tagTypes: ["User", "Products"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
  }),
})

export const { useGetUserQuery, useGetProductsQuery } = api
