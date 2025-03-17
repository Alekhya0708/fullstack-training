import React, { useState, useEffect } from "react";
import { Modal, Button } from "@mui/material";

const ModalWithDataFetch=()=>{
    const [open,setOpen] = useState(false);
    const [data,setData] = useState(null);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        if(open){
            const fetchData=async()=>{
                try{
                    const response= await fetch("https://jsonplaceholder.typicode.com/posts/1");
                    const jsonResult = await response.json();
                    setData(jsonResult);
                    setLoading(false);
                }catch(error){
                    console.log("Error Fetching Data:", error);
                }
            };
            fetchData();
            return ()=>{
                console.log("Clean Up Data");
                setLoading(true);
                setData(null);
            };
        }
    },[open]);
    const handleOpen =()=>setOpen(true);
    const handleClose=()=>setOpen(false);
    return (
        <div>
            <h1>19.	Unmounting Effects in a Modal</h1>
            <Button variant="contained" onClick={handleOpen}>Open MOdel</Button>
            <Modal open={open} onClose={handleClose}>
                <div style={{padding: "20px", background:"white", margin:"100px auto",width:"300px"}}>
                    <h2>Data Fetching Modal</h2>
                    {loading?(
                        <p>Loading..</p>
                    ):(
                        <div>
                            <p><strong>Title:</strong> {data?.title}</p>
                            <p><strong>Body:</strong> {data?.body}</p>
                        </div>
                    )}
                    <Button variant="contained" onClick={handleClose}>Close Model</Button>
                </div>
            </Modal>
        </div>
    )
}
export default ModalWithDataFetch;