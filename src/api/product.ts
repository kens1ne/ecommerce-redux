import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../interfaces/IProduct';

const productApi = createApi({
    reducerPath: 'product',
    tagTypes: ['Product'],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => '/products',
            providesTags: ['Product']
        }),

        getOneProduct: builder.query<IProduct, number>({
            query: (id) => `/products/${id}`,
            providesTags: ['Product']
        }),

        addProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: '/products',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['Product']
        }),

        updateProduct: builder.mutation<IProduct, IProduct>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product
            }),
            invalidatesTags: ['Product']
        })
    })
})

export const { useGetAllProductsQuery, useGetOneProductQuery, useAddProductMutation, useUpdateProductMutation } = productApi;

export const productReducer = productApi.reducer;
export default productApi;
