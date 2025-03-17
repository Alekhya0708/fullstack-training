import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import './App.css';

const DarkMode=()=>{
    const [darkMode,setDarkMode]=useState(false);
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("dark-Mode")
        }else{
            document.body.classList.remove("dark-Mode")
        }
    },[darkMode]);
    return(
        <div className="dark-mode">
            <h1>20.	Toggling Dark Mode</h1>
            <h2>{darkMode?"Dark Mode":"Light Mode"}</h2>
            <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
        </div>
    )
}
export default DarkMode;