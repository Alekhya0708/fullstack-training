import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

const PollingComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lastFetched, setLastFetched] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const jsonResult = await response.json();
                setData(jsonResult);
                const currentTime = new Date().toLocaleTimeString();
                setLastFetched(currentTime);
                console.log("Data fetched at: ", currentTime);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>18. Polling with useEffect</h1>
            <h2>Fetching Data Every 5 Seconds</h2>
            {loading && <CircularProgress />}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {data && (
                <div>
                    <h2>Title : {data.title}</h2>
                    <p>Body : {data.body}</p>
                </div>
            )}
            {lastFetched && <p>Last fetched at: {lastFetched}</p>}
        </div>
    );
};

export default PollingComponent;
