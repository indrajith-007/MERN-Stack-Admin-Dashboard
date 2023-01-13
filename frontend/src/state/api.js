import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// @ts-ignore
const URL = process.env.REACT_APP_BASE_URL
// @ts-ignore
export const api = createApi({
  // @ts-ignore
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  reducerPath: "AdminApi",
  tagTypes: ["User"],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
})

export const { useGetUserQuery } = api
