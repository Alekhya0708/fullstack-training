import { useEffect, useState } from "react"

const ScrollEvent=()=>{
    const [scrollListener,setScrollListener] = useState(window.scrollY)
    useEffect(()=>{
        const handleScrollEvent=()=>{
            const currentScrollPosition = window.scrollY;
            setScrollListener(currentScrollPosition)
            console.log(`The Current Scroll Position is ${currentScrollPosition}`);
        }
        window.addEventListener("scroll",handleScrollEvent);
        return ()=> window.removeEventListener("scroll",handleScrollEvent);
    },[])
    return(
        <div>
            <h1>15.	Event Listener for Scroll</h1>
            <h2>Scroll Down and Up to see the Position</h2>
            <h2>Current Scroll Position is {scrollListener}px</h2>
        </div>
    )
}
export default ScrollEvent;