import { useState } from 'react'
import './App.css'
import { FormControl, FormHelperText, TextField, Button } from "@mui/material";
const InputForm=()=>{
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [error,setError]=useState();
    const [submitButton,setSubmitButton]= useState(null);
    const handleSubmitButton=(event)=>{
        event.preventDefault();
        if(!name || !age){
                setError("Both fields are required.");
                setSubmitButton(null);
        }else{
                setError("");
                setSubmitButton({name,age})
        }
    }
    return (
    <div className='container'>
        <h2>9. Handling Form Input State</h2>
        <FormControl component="form" onSubmit={handleSubmitButton} fullWidth>
            <TextField label="Name" variant='outlined' value={name} onChange={(e)=>setName(e.target.value)} />
            <TextField label="age" type="number" variant='outlined' value={age} onChange={(e)=>setAge(e.target.value) } />
            {error && <FormHelperText error>{error}</FormHelperText>}
            <Button type='submit' variant='contained' sx={{ mt: 2 }}>Submit</Button>
           {setError? submitButton && (<h3>Hi! My Name is {submitButton.name}. My Age is {submitButton.age}</h3>):setError}
        </FormControl>
    </div>
    );
}
export default InputForm;