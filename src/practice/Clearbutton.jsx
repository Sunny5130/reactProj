import { useState } from "react";

function ClearButton(){
    const[val,setVal]=useState("");
    const[val2,setVal2]=useState("");
    const[val3,setVal3]=useState("");
return(
<>  
{/* <form action="" method="get">
    <h1>Enter form data</h1>
    <hr />
     <label >Name: </label>
    <input type="text" placeholder="give input" value={val} onChange={(event)=>(setVal)(event.target.value)}  />
    <br /><br />
     <label >Email: </label>
    <input type="text" placeholder="give input" value={val2} onChange={(event)=>(setVal2)(event.target.value)}  />
    <br /><br />
     <label >Password: </label>
    <input type="text" placeholder="give input" value={val3} onChange={(event)=>(setVal3)(event.target.value)}  />
    <br /><br />

    <h1>input values: <br/>{val}<br/>{val2}<br/>{val3}</h1>
    <button onClick={()=>setVal("")}>clear Input</button>
    <hr />
    </form> */}
    
 <form onSubmit={(e)=>e.preventDefault()}>
        <h1>Enter form data</h1>
    <hr />
     <label >Name: </label>
    <input type="text" placeholder="give name" value={val} onChange={(event)=>(setVal)(event.target.value)}  />
    <br /><br />
     <label >Email: </label>
    <input type="text" placeholder="give email" value={val2} onChange={(event)=>(setVal2)(event.target.value)}  />
    <br /><br />
     <label >Password: </label>
    <input type="text" placeholder="give password" value={val3} onChange={(event)=>(setVal3)(event.target.value)}  />
    <br /><br />

    <h1>input values: <br/>{val}<br/>{val2}<br/>{val3}</h1>
    <button>Submit Data</button>
    <button onClick={()=>{setVal(""),setVal2(""),setVal3("")}}>clear Input</button>
    <hr />
    {/*------------------------------------------- This is how we get fro m data -------------------------------*/}
    </form>
</>
)

}
export default ClearButton;