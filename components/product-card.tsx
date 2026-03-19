"use client"
import { useGetProductsQuery } from "@/lib/features/products/productApi"

export default function ProductCard(){
   const {data , isLoading} = useGetProductsQuery();
   console.log('log data from RTK' , data )
    return isLoading ? <p> data is loading....</p> : <p>data is ready</p>
    
}