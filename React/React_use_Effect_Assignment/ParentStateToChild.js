import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ParentState=()=>{
    const [message,setMessage]=useState("The Initial State is from Parent Componet")
    const updateMessage=(newMessage)=>{
        setMessage(newMessage);
    }
    return(
        <div>
            <h1>16.	Updating Parent State from Child</h1>
            <h2>{message}</h2>
            <ChildState updateMessage={updateMessage} />
        </div>
    )
}
const ChildState=({updateMessage})=>{
    const [onButtonClick,setOnButtonClick]=useState(false);
    useEffect(()=>{
        if(onButtonClick){
            updateMessage("On Button Click State Shifted to Child Compnent")
        }
    },[onButtonClick,updateMessage])
    return(
        <div>
            <h2>ChildComponent</h2>
            <Button variant="contained" onClick={()=>setOnButtonClick(true)}>Button</Button>
        </div>
    )
}
export default ParentState;
