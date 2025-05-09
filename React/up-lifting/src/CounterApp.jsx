import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
const ParentComponent=()=>{
    const [count,setCount]=useState(0);
    const increment=()=>setCount(count+1);
    const decrement=()=>setCount(count-1);
    return(
        <div>
            <h1>1. Counter App with Parent-Child State Lifting</h1>
            <ChildComponent counter={count} increase={increment} decrease={decrement}/>
        </div>
    )
}
const ChildComponent=({counter,increase,decrease})=>{
    return(
        <div>
            <h1>Count : {counter}</h1>
            <Stack spacing={2} direction={'row'}>
                <Button variant='contained' onClick={increase}>Increase</Button>
                <Button variant='contained' onClick={decrease} >Decrease</Button>
            </Stack>
        </div>
    )
}
export default ParentComponent;