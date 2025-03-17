import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';

const ParentProp=()=>{
    const [message,setMessage]=useState("Hello")
    const updateMessage=(message)=>setMessage("Goodbye");
    return(
        <div className='container'>
            <h2>8. Passing Functions as Props</h2>
            <h2>Message : {message}</h2>
            <ChildProp updateMessage={updateMessage} />
        </div>
    );
}
const ChildProp=({updateMessage})=>{
    return (
    <div className='container'>
        <Button variant="contained" onClick={updateMessage}>Message</Button>
    </div>
    )
}

export default ParentProp;