import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ParentUseEffect=()=>{
    const [name,setName]=useState("Alekhya")
    const changeName=()=>setName(name==="Alekhya"?"Rachana":"Alekhya")
    return (
        <div>
            <h1>7.	Effect Triggered by Props Change</h1>
            <Button variant="contained" onClick={changeName}>Change Log</Button>
            <ChildUseEffect name={name} />
        </div>
    )
}
const ChildUseEffect=({name})=>{
    useEffect(()=>{
        console.log(`Name of the component change to ${name}`)
    },[name])
    return(
        <div>
            <h2>Child Component</h2>
            <h3>Name : {name}</h3>
        </div>
    )
}

export default ParentUseEffect;