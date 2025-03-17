import { Button } from "@mui/material"
import { useEffect, useState } from "react"

const SyncMultipleEffects=()=>{
    const[onButtonClick, setIsButtonClick]=useState(false)
    useEffect(()=>{
        console.log("Component is Mounted")
    },[])
    useEffect(()=>{
        if(onButtonClick){
            console.log("Button was clicked!")
        }
    },[onButtonClick])
    return(
        <div>
            <h1>21.	Synchronizing Multiple Effects:</h1>
            <Button variant="contained" onClick={()=>setIsButtonClick(!onButtonClick) }>Button</Button>
        </div>
    )
}
export default SyncMultipleEffects;