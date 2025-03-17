import React,{useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';
const Count=()=>{
        const [count,setCount]=useState(0);
        return(
            <div className="container">
                <h2>1. State Management - Counter Component</h2>
                <h2>Count:{count}</h2>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={()=>setCount(count-1)}>Decrement</Button>
                    <Button variant="contained" onClick={()=>setCount(0)}>Reset</Button>
                    <Button variant="contained" onClick={()=>setCount(count+1)}>Increment </Button>
                </Stack>
            </div>
        );
}
export default Count;