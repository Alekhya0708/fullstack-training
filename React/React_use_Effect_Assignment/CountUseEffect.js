import { useEffect, useState } from "react";
import {Button} from "@mui/material"
const UseEffectCount =()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
            console.log(`Updating count:${count}`)
        },[count])
    return (
        <div>
            <h1>2.	Count Component with useEffect:</h1>
            <h2>Count : {count}</h2>
            <Button variant="contained" onClick={()=>setCount(count+1)}>Increment</Button>
        </div>
    )
}

export default UseEffectCount;