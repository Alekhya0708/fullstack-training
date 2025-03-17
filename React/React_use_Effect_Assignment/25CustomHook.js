import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const useFetchData=(url)=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]= useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const jsonResult = await response.json();
            setData(jsonResult);
        } catch(error){
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }
    fetchData();
    },[url]);
    return {data,loading,error}
}


const DataFetchingComponent=()=>{
    const {data,loading,error} =useFetchData("https://jsonplaceholder.typicode.com/posts/1");
    return(
    <div>
        <h1>25.	Custom Hook for Fetching Data</h1>
        <h1>Custom Hook: Fetch Data</h1>
        {loading && <CircularProgress />}
        {error && <p style={{color:"red"}}>Error:{error}</p>}
        {data && (
            <div>
                <h2>Title : {data.title}</h2>
                <p>Body : {data.body}</p>
            </div>)}
    </div>
    )
}

export default DataFetchingComponent;