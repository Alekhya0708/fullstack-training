import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ApiDataFetching=()=>{
    const [users,setUsers]=useState("users");
    const [usersData,setUsersData]=useState([]);
    useEffect(()=>{
        if(users){fetch(`https://jsonplaceholder.typicode.com/${users}`)
                    .then(respone=>respone.json())
                    .then(json=>setUsersData(json))
                    .catch(error=>console.error(`Error Message:${error}`))
    }},[])
    return (
        <div>
            <h1>3.	Fetching Data from an API</h1>
            {(<ul>
                {usersData.map((user)=><li key={user.id}>{JSON.stringify(user)}</li>)}
            </ul>)}
        </div>
    )
}
export default ApiDataFetching;