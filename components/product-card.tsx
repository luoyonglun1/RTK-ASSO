"use client"
import { useAddProductMutation, useGetProductsQuery } from "@/lib/features/products/productApi"

export default function ProductCard(){
   const {data , isLoading} = useGetProductsQuery();
   console.log('log data from RTK' , data )
    // return isLoading ? <p> data is loading</p> : <p>data is ready</p>
     const [addProduct, { isLoading: isAdding }] = useAddProductMutation();

    const handleAddProduct = async () => {
        try {
            await addProduct({
                title: "New Product",
                price: 19.99,
                description: "This is a new product",
                category: "electronics",
                image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            }).unwrap();
        } catch (error) {
            console.error("Failed to add product:", error);
        }
    };
    console.log(handleAddProduct);
    console.log(data);

    return (
        <div className="flex flex-col items-center justify-center gap-8 h-screen">
            <h1 className="text-2xl font-bold">Products</h1>

            {isLoading
                ? <p className="text-center text-red-500 text-2xl">isLoading...</p>
                : <p className="text-2xl text-red-800 text-center">isRead</p>
            }

            <button onClick={handleAddProduct} disabled={isAdding}>
                {isAdding ? "Adding..." : "Add Product"}
            </button>
        </div>
    );
}