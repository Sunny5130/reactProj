import { useState } from "react";
import Colleage from "./Colleage";
import { Data } from "./Data";
function Contextapi(){
    const[subjects,setSubject]=useState();

    return(<div style={{backgroundColor:'red',padding:'10px'}}>
    <Data.Provider value={subjects}> 
        <h3>select language</h3> 
        <select defaultValue={subjects} onChange={(event)=>(setSubject(event.target.value))}>
            <option value="">select option</option>
            <option value="english">English</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="ss">Social Science</option>
            </select>   
            <button onClick={()=>(setSubject(''))}>Clear subject</button>
    <h1>Context api</h1>
    <Colleage/>

    </Data.Provider>
    </div>
    )
}
export default Contextapi;