'use client'
import { useAppSelector } from "@/lib/hooks"

export default function TextCard(){
// Get global state
const count = useAppSelector((state) =>  state.counter.value)

   return(
    <section>
        <p>other Calling global state : {count}</p>
    </section>
   )
}