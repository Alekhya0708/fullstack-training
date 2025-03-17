import { Button } from "@mui/material";
import { use, useEffect, useState } from "react"

const MultiDependencies=()=>{
    const [searchTerm , setSearchTerm ] = useState("A");
    const [pageNumber,setPageNumber]= useState(0);
    useEffect(()=>{
        console.log(`SearchTerm is ${searchTerm}`)
        console.log(`PageNumber is ${pageNumber}`)
    },[searchTerm,pageNumber])
    const changeSearchTerm=()=>setSearchTerm(searchTerm==="A"?"B":"A");
    const changePageNumber=()=>setPageNumber(pageNumber===0?1:0);
    return (
        <div>
            <h1>12.	Effect with Multiple Dependencies:</h1>
            <Button variant="contained" onClick={changeSearchTerm} sx={{marginRight:2}}>SearchTerm</Button>
            <Button variant="contained" onClick={changePageNumber}>PageNumber</Button>
            <h3>PageNumber : {pageNumber}</h3>
            <h3>SearchTerm : {searchTerm}</h3>
        </div>
    )
}
export default MultiDependencies;