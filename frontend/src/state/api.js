import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// @ts-ignore
const URL = process.env.REACT_APP_BASE_URL
// @ts-ignore
export const api = createApi({
  // @ts-ignore
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  reducerPath: "AdminApi",
  tagTypes: ["User", "Products", "Customers", "Transactions"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "client/customers",
      providesTags: ["Products"],
    }),
    getTransaction: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "client/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transactions"],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionQuery,
} = api
