import { useState } from "react"; // to ggle hide and show karne ke liye....
function Hide(){
    const[display,setHide]=useState(true);
    const[display2,setHide2]=useState(true);
    const toggle=()=>{
        setHide(!display);
    }
    const toggle2=()=>{
        setHide2(!display2);
    }
    return(
        <>
        <br />
        
        <button onClick={toggle2}>Toggle1</button>
        {display2 ?<h1>content change karo button click karke</h1> : <h1> dobare content change karne ke liye click karo</h1>}
        <br />
        <button onClick={toggle}>Toggle2</button>
        {display ?<h1>Hide kro toggle button click karke</h1> : null}
        <br />
    
        </>
    )

}
export default Hide;