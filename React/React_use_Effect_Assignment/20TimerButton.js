import { Button } from "@mui/material";
import { useEffect, useState } from "react"

const TimerButton=()=>{
    const [isRunning,setIsRunning]=useState(false);
    const [timer, setTimer]=useState(0);
    useEffect(()=>{
        let timeInterval;
        if(isRunning){
            timeInterval=setInterval(()=>{
                setTimer((prevTimer)=>prevTimer+1)
            },1000);
        }else{
            clearInterval(timeInterval);
        }
        return ()=>clearInterval(timeInterval);
    },[isRunning]);
    const handleButton=()=>{
        setIsRunning((prevState)=>!prevState);
    }
    return(
        <div>
            <h1>20.	Timer Start/Stop on Button Click</h1>
            <h2>Timer : {timer}</h2>
            <Button onClick={handleButton} variant="contained">
                {isRunning?"Stop Timer":"Start Timer"}
            </Button>
        </div>
    )

}
export default TimerButton;