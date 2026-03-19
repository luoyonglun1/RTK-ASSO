import { ProductResponse } from "../types/product-type";
import { fakeStoreApi } from "../api/api";
// import { ProductResponse } from "../types/product-type";

export const productApi = fakeStoreApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts : builder.query< ProductResponse[] , void >({
            query : () => '/products',
        })
    }) 
})

export const {useGetProductsQuery} = productApi