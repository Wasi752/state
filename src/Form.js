import { useState } from "react";

function Form(){
    const [name, setName] = useState("");
    return(
        <div className="flex">
            
        <input 
            type="text" 
            value= {name} 
            onChange={e=> setName(e.target.value)} 
            className="border"
        />
        </div>
    );
}
export default Form;