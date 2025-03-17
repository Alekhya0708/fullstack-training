import { FormHelperText, TextField } from "@mui/material"
import { useEffect, useState } from "react"

 const ConditionalEffect = ()=>{
    const [inputField,setInputField] = useState("")

    useEffect(()=>{
        if(inputField.trim()!==""){
            console.log(`Input Value Changed to: ${inputField}`)
        }
    },[inputField])
    return(
        <div>
            <h1>6.	Conditional Effect Execution</h1>
                <TextField type="text" label = "Type...." variant="outlined" value={inputField} onChange={(e)=>setInputField(e.target.value)}/>
                    <h2>Current Input : {inputField}</h2>
        </div>
    )
 }
 export default ConditionalEffect;