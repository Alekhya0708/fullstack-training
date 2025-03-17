import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const RunningDataOnce=()=>{
    const [data, setData]=useState(null);
    const [loading, setLoading]= useState(true);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await fetch("https://jsonplaceholder.typicode.com/posts/1")
                const jsonResult= await response.json();
                setData(jsonResult);
        }catch(error){
                console.log("Fetching the Error",error.message);
            }finally{
                setLoading(false);
            }
        };
        fetchData();
    },[])

    return(
        <div>
            <h1>24.	Effect that Runs Once</h1>
            {loading?(<CircularProgress />):data?(
                <div>
                    <h1>Title : {data?.title}</h1>
                    <p>Body : {data?.body}</p>
                </div>
            ):(
                <p>Error fetching data. Please try again later.</p>
            )}
        </div>
    )
}
export default RunningDataOnce;