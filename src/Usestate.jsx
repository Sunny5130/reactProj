import {useState } from "react";

function ChangeState(){

    const [name,setName]=useState("Saini");
    const fitName=()=>{
        setName("Sunny");
    }
    const [count,setcount]=useState(0);
    const updatecount=()=>{
        setcount(count+1);
    }
    const [rcount,rsetcount]=useState(0);
    const rupdatecount=()=>{
        rsetcount(rcount-1);
    }

return(
    <>
    <h1>States in react Js</h1>
    <h1>{name}</h1>
    <button onClick={fitName}>Change Name</button>
    <h1>Count: {count}</h1>
    <button onClick={updatecount}>Change Name</button>
    <br />
    <h1>Count: {rcount}</h1>
    <button onClick={rupdatecount}>Change Name</button>

    </>
)
}
export default ChangeState;