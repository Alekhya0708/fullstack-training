import {useEffect} from "react";

const TitleUpdate=()=>{
    useEffect(()=>{
        console.log("useEffect executed");
        document.title= "Welcome to My Page" 
    },[])
    return(
        <div>
            <h1>1.	Title Update on Component Mount</h1>
        </div>
    );
}

export default TitleUpdate;