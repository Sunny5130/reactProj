import { useState } from "react";

function ClearButton(){
    const[val,setVal]=useState("saini");
return(
<>
    <h1>Get input Data</h1>
    <input type="text" placeholder="give input" value={val} onChange={(event)=>(setVal)(event.target.value)}  />
    <h1>{val}</h1>
    <button onClick={()=>setVal("")}>clear Input</button>
</>
)

}
export default ClearButton;