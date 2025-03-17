import React,{ useState } from 'react';
import './App.css'
import Button from '@mui/material/Button';
const Child=({count})=>{
    return(
        <h2>Count:{count}</h2>
    );
}
const Parent=()=>{
    const [count,setCount]=useState(0);
    return(
        <div className='container'>
            <h2>4. Passing Props and Handling Events</h2>
            <Child count={count} />
            <Button variant="contained" onClick={()=>setCount(count+1)}>Increment</Button>
        </div>
    );

}

export default Parent;