// import { ProductResponse } from "../types/product-type";
// import { fakeStoreApi } from "../api/api";
// // import { ProductResponse } from "../types/product-type";

import { fakeStoreApi } from "../api/api"
import { ProductResponse } from "../types/product-type"

// export const productApi = fakeStoreApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getProducts : builder.query< ProductResponse[] , void >({
//             query : () => '/products',
//         })
//     }) 
// })

// export const {useGetProductsQuery} = productApi

// import build from "next/dist/build";
// import { fakeStoreApi } from "../feature/api/api";
// import { ProdectRespone } from "../types/product";



export const productApi = fakeStoreApi.injectEndpoints({
    endpoints:(builder)=>({
        getProducts: builder.query<ProductResponse[],void>({
            query: () => '/products/${id}',
            providesTags:['Products'],
        }),
        addProduct: builder.mutation({
           query: (newProduct) => ({
                url: "/products",
                method: "POST",
                body: newProduct
            }),
            invalidatesTags:['Products']
        })
    })
})

export const {useGetProductsQuery, useAddProductMutation} = productApi