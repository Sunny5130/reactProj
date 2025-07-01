import { useState } from "react";

function Operation(){
   const [fruit,setfruit]=useState("apple");
  let handlefruit=()=>{
    setfruit("banana");
   }
    return(
        <>
        <h1>States in react js</h1>
        <h1>{fruit}</h1>
    <button onClick={handlefruit}>change fruit</button>
        </>
    )
}
export default Operation;