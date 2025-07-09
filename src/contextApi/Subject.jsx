import { useContext } from "react"
import Student from "./Student";
import { Data } from "./Data"

export default function Subject(){
const subject=useContext(Data);
    return(
    < div style={{backgroundColor:'green',padding:'10px'}}>
    <h3 >Subject: {subject}</h3>
    
    </div>
    )
}