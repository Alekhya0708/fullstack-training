import { useState } from 'react';
import './App.css';
import { Button } from '@mui/material';

const Grandparent=()=>{
    const [theme, setTheme] = useState("light");
    const toggleTheme=()=>{
        setTheme((previousThem)=>(previousThem==="light"?"dark":"light"))
    }
    return (
        <div className='container'>
            <h2>10. State Management and Prop Drilling</h2>
            <h3>Grandparent Component</h3>
            <Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>
            <Parent theme={theme} />
        </div>
    );

}
const Parent=({theme})=>{
    return(
        <div className='container'>
            <h2>Parent Component</h2>
            <Child theme={theme} />
        </div>
    )
    
}
const Child=({theme})=>{
    return(
        <div>
            <h3>Child Component</h3>
            <p>The current theme is <b>{theme}</b></p>
        </div>
    )
}

export default Grandparent;