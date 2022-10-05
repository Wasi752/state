import { useEffect, useState } from "react";

function Time() {
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    let counter = 0;
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
       
        setInterval(() => {
            const today = new Date();
            setTime(` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
            counter = counter + 1;
            setCounter2(counter2 + 1);
        }, 100);

        setInterval(() => {
            const day = new Date();
            const month = day.getMonth() + 1;
            setDate(`${day.getDate()}/${month}/${day.getFullYear()} `);
        });
    }, [counter2]);

    return (
        <div className="mt-40">
            {date} 
            {time}
            <br></br>
            {counter}
            {counter2}
        </div>
    );
}
export default Time;