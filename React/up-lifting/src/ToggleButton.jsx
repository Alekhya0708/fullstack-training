import { Button } from "@mui/material";
import { useState } from "react"

const ParentToggle=()=>{
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme==="light"?"dark":"light"));
    }
    return(
        <div style={{
            backgroundColor: theme==="light"? "white":"black",
            color: theme==="light"?"black":"white",
            textAlign: "center"
        }}>
            <ChildToggle theme={theme} toggleTheme={toggleTheme} />

        </div>
    )
}
const ChildToggle=({theme,toggleTheme})=>{
    return(
        <div>
            <h1>4. Toggle Theme Button (Dark/Light Mode)</h1>
            <h2>Current Theme : {theme.toUpperCase()}</h2>
            <Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>
        </div>
    )
}
export default ParentToggle;