import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getListUsers: builder.query({
            query: () => ({
                url: '/users?per_page=10',
                method: 'GET',
            })
        }),
    }),
    overrideExisting: true
})

export const { useGetListUsersQuery } = userApi