import { Button } from "@mui/material";
import { useEffect, useState } from "react"

const FetchingDataOnClick=()=>{
    const [data,setData]=useState("");
    const [fetchedData,setFetchedData] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${data}`)
                .then((responce)=>responce.json())
                .then(json=>setFetchedData(json))
                .catch((error)=>console.error(`Getting Error while Fetching the Data : ${data}`))
    },[data]);
    return(
        <div>
            <h1>11.	Fetching Data with Dependencies</h1>
            <Button variant="contained" onClick={()=>setData("posts")} sx={{marginRight:2}}>Posts</Button>
            <Button variant="contained" onClick={()=>setData("comments")} sx={{marginRight:2}}>Comments</Button>
            <Button variant="contained" onClick={()=>setData("users")} sx={{marginRight:2}}>Users</Button>
            <h2>{data?`Fetching ${data} : ...`:"Click a button to fetch the Data"}</h2>
            {fetchedData && 
            <ul>
               {fetchedData.map((item)=><li>{JSON.stringify(item)}</li>)}
            </ul>
            }
        </div>
    )
}
export default FetchingDataOnClick;