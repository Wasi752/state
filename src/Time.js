import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
   
    useEffect(() => {
       
        setInterval(() => {
            const today = new Date();
            setTime("" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        }, 100);

        setInterval(() => {
            const day = new Date();
            setDate(day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear() + " ");
        });
    }, []);

    return (
        <div className="mt-40">
            {date} 
            {time}
            
        </div>
    );
}
export default Time;