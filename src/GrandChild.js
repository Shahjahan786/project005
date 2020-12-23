import { useReducer } from "react"
import CounterReducer from "./CounterReducer"

export default function GrandChild(){

    let [count, dispatch] = useReducer(CounterReducer, 1)

    return (
        <div>
        <h1>Reducer counter value {count}</h1>
        <button onClick={()=> { dispatch("INCREMENT")}}>Increment Reducer counter</button>
        <button onClick={()=> { dispatch("DECREMENT")}}>Decrement Reducer counter</button>
        </div>
        
        )
    
}