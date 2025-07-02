import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";
import Default from "./Defaultusername.";
function Parent(){
    // let username="I am default usename";
    // var ages=23;


    let obj1={
        name:"Sainis",
        age: 20,
        address:"Sekhpura,narnaul",
        HomeNo: 112
    }
    let obj2={
        name:"Rahul",
        age: 21,
        address:"Sekhpura,narnaul",
        HomeNo: 113
    }
    // const[state,setState]=useState();
    const[state,setState]=useState("usestae");
    return(
        <>
        <h1>Props in react jsx</h1>
        <hr />



        {/* <hr /> */}
        {/* <Child1 name={username}/>           first way to pass  */}
        {/* { state && <Child1 name={obj1} p={state}/>} */}
        {/* <hr /> */}
        {/* <Child2 name="sunny" age="23" />     second way to pass */}
        {/* <Child2 name2={obj2}/> */}
        {/* <hr /> */}

        <Default name="hii saini" />
        <Default />
        </>
    )

}
export default Parent;