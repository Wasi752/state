import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
   
    useEffect(() => {
       
        setInterval(() => {
            const today = new Date();
            setTime(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        }, 100);
    }, []);

    return (
        <div className="mt-40">
            {time}
        </div>
    );
}
export default Time;