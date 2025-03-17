import { TextField } from "@mui/material";
import React, {useEffect, useState } from "react";

const LocalStorage=()=>{
    const [inputValue,setInputValue] =useState(()=>localStorage.getItem("userInput")||"");
    useEffect(()=>{
        localStorage.setItem("userInput",inputValue);
    },[inputValue])
    return(
        <div>
            <h1>14.	LocalStorage Sync</h1>
            <TextField label="Enter the Text" variant="outlined" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </div>
    )
}
export default LocalStorage;