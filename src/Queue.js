import { useState } from "react";

function Queue(){
    const [serial, setSerial]= useState(0);
    const [name, setName]= useState();
    const [people, setPeople] = useState(["Nayeem", "Mahmud", "Mesbah", "Amin", "Rokon"]);
    return(
        <div className="mt-40">
            <button 
            type="button"
            onClick={()=> setSerial(serial + 1)}
            className="text-center text-2xl text-white font-bold h-[80%] w-[56%] ml-14 bg-blue-600 hover:text-blue-300 p-3 border rounded-md m-3"
            >Next</button>

            {people[serial]}
            <input 
                            type="text" 
                            value= {name} 
                            onChange={e => setName(e.target.value)} 
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
            <button 
                            type="button"
                            onClick={()=> setPeople([...people, name])} 
                            className="text-center text-2xl text-white font-bold h-[80%] w-[56%] ml-14 bg-blue-600 hover:text-blue-300 p-3 border rounded-md m-3">Submit</button>
        </div>
    );
}
export default Queue;