import { Button } from "@mui/material";
import { useEffect, useState } from "react";

 const DelayState=()=>{
    const [isLoading,setIsLoading]=useState(null);
    useEffect(()=>{
        if(isLoading===true){
        const waitTime=setTimeout(()=>{
            setIsLoading(false);
        },3000);
        return ()=>clearTimeout(waitTime);
    }
    },[isLoading])
    const onButtonClick=()=>{
        if(isLoading===null || isLoading===false){
        setIsLoading(true);
        }
    }
    return(
        <div>
            <h1>4. Update State After Delay</h1>   
            <Button variant="contained" onClick={onButtonClick}>
            {isLoading?"isLoading":"Start"}
            </Button> 
            {isLoading===null?null:<h3>{isLoading===null?null:<h3>{isLoading?<h3>Loading...</h3>:<h3>Loading Completed</h3>}</h3>}</h3>}
        </div>
    )
 }
 export default DelayState;