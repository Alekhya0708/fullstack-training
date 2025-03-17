import { useEffect, useState } from "react"

const TrackingWindowSize=()=>{
    const [windowWidth, setWindowWidth]=useState(window.innerWidth);
    const [windowHeight, setWIndowHeight] = useState(window.innerHeight);
    const handleResize=()=>{
        setWindowWidth(window.innerWidth);
        setWIndowHeight(window.innerHeight)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize);
    },[])
    return (
        <div>
            <h1>5.	Tracking Window Resize</h1>
           <h2>Window Width : {windowWidth}px</h2>
           <h2>Window Height : {windowHeight}px</h2>
        </div>
    )   
}

export default TrackingWindowSize;