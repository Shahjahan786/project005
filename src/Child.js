import { useContext } from "react";
import CounterContext from "./CounterContext";
import GrandChild from "./GrandChild";

export default function Child(){

    const counterState = useContext(CounterContext);
    

    return (

        
        <div>
        <h1>Context counter value {counterState[0]}</h1>
        <button onClick={()=> { counterState[1](++counterState[0])}}>Increment Context counter</button>
        <button onClick={()=> { counterState[1](--counterState[0])}}>Decrement Context counter</button>

        <GrandChild/>
        </div>

        


        
        )
    
}