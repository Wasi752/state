import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Effect (){
    const [counter, setCounter] = useState(0);
    setCounter(counter + 1);

    return(
        <div className="mt-40">Amar
            {counter}
        </div>
    );
}
export default Effect;