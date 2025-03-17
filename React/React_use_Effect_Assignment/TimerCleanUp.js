import { Button } from "@mui/material";
import { useEffect, useState } from "react"

const TimerCleanUp=()=>{
    const [timer,setTimer]=useState(10);
    const [isRunning,setIsRunning]=useState(false);
    useEffect(()=>{
        if(!isRunning || timer === 0) return;
        const timerLeft=setInterval(()=>{
            console.log(`Timer:${timer}`)
            setTimer((prevTime)=>prevTime-1);
        },1000);
        return ()=>clearInterval(timerLeft);
    },[isRunning,timer])
    useEffect(()=>{
        if (timer === 0) setIsRunning(false); 
    },[timer])
    const handleTimer=()=>{
        if (!isRunning) {
            setTimer(10);
            setIsRunning(true); 
        }
    }
    return(
        <div>
            <h1>8.	Timer with Cleanup</h1>
            <Button variant="contained" onClick={handleTimer} disabled={isRunning}>
                {isRunning?"Running...":"Start Timer"}
            </Button>
            <h2>CountDown Timer </h2>
            <h2>Timer : {timer}</h2>
        </div>
    )
}
export default TimerCleanUp;