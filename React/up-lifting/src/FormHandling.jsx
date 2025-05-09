import { Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react"

const ParentHandling=()=>{
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitButton,setSubmitButton]=useState(false);
    const handleChanges=(event)=>{
        const {name,value}=event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
    const handleSubmit = () => {
        setSubmitButton(true); 
        setTimeout(() => {
          console.log("Form Submitted:", formData);
          setSubmitButton(false); 
        }, 2000); 
      };
    
    return(
        <div>
            <h1>2. Form Handling with Lifting State</h1>
            <ChildHandling 
                formData={formData} 
                handleChange={handleChanges} 
                handleSubmit={handleSubmit} 
                submitButton={submitButton} 
            />
        </div>
    )
}
const ChildHandling=({formData, handleChange, handleSubmit,submitButton})=>{
    return(
        <div>
            <Card>
                <CardContent>
                    <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth margin="normal"/>
                    <TextField label="Email" name="email" value={formData.email} onChange={handleChange} fullWidth margin="normal"/>
                    <TextField label="Message" name="message" value={formData.message} onChange={handleChange} fullWidth margin="normal" multiline rows={4}/>
                    <Button variant="contained" color="primary" onClick={handleSubmit}  disabled={submitButton} sx={{ marginTop: 2 }}>Submit</Button>
                </CardContent>
            </Card>

        </div>
    )
}
export default ParentHandling;