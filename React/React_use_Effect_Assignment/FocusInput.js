import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";

const AutoFocusInput=()=>{
    const inputElement = useRef(null);
    useEffect(()=>{
        if(inputElement.current){
            inputElement.current.focus();
        }
    },[])
    return(
        <div>
            <h1>13.	Focus Input on Mount</h1>
            <TextField inputRef={inputElement} type="text" label = "Type...." variant="outlined"/>
        </div>
    )
}
export default AutoFocusInput;