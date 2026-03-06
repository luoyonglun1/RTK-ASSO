'use client'
import { increment } from "@/lib/features/counter/counterSlice"
import { decrement } from "@/lib/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"

export default function Card(){
// Get global state
const count = useAppSelector((state) =>  state.counter.value)

// dispatch action
const dispatch = useAppDispatch()

   return(
    <section className=" flex-col items-center justify-center">
        <p>Calling global state : {count}</p>
        
        <button onClick={() => dispatch(increment())} className="bg-amber-400"> increase Button</button>
        <button onClick={() => dispatch(decrement())} className="bg-blue-300"> decrease Button</button>
      
        
       
        
    </section>
   )
}