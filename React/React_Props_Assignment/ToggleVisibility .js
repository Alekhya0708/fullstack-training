import React,{useState} from "react";
import { Button } from "@mui/material";
import './App.css';
const ToggleVisibility =()=>{
    const [isVisible,setIsVisible]=useState(false);
    return(
        <div className="container">
            <h2>2. State Management - Toggle Visibility</h2>
            <Button variant="contained" onClick={()=>setIsVisible(!isVisible)}>
                {isVisible?"Hide":"Show"}
            </Button>
            {isVisible && <h2>Hello, world!</h2>}
        </div>
    );
}
export default ToggleVisibility;