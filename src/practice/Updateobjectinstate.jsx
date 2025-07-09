import { useState } from "react";
function UpdatobjectInState(){
const[data,setName]=useState({
            name:'Sunny',
            address:{
            city:'Narnaul',
            village:'Sekhpura',
        }
    });
    const handleName=(val)=>{
        data.name=val;
    setName({...data});
}
        return(
        <>
            <input type="text" placeholder="input name" onChange={(event)=>{handleName(event.target.value)}}/>
            <button>Click</button>
            <h1>Name: {data.name}</h1>
            <h2>City:{data.address.city}</h2>
            </>
    )}
export default UpdatobjectInState;
