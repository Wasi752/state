import { useState } from "react";

function Queue(){
    const [serial, setSerial]= useState(1);
    const [name, setName]= useState();
    const [people, setPeople] = useState(["Nayeem", "Mahmud", "Mesbah", "Amin", "Rokon"]);
    return(
        <div className="flex flex-row w-full h-screen">
                <div className="w-[25%] h-full"></div>
                <div className="mt-40 flex flex-col w-[50%] h-full">

                    {people[serial]}

                    <input 
                            type="text" 
                            value= {name} 
                            onChange={e => setName(e.target.value)} 
                            className="h-[9%] w-[60%] p-2 ml-40 m-3 border border-blue-300 rounded-md "
                            />
                    <button 
                        type="button"
                        onClick={()=> setPeople([...people, name])} 
                        className="text-center text-2xl text-white font-bold h-[10%] w-[60%] ml-40 m-3 p-3 bg-blue-600 hover:text-blue-300 border rounded-md ">
                        Submit
                    </button>

                    <button 
                            type="button"
                            onClick={()=> setSerial(serial + 1)}
                            className="text-center text-2xl text-white font-bold h-[10%] w-[60%] m-3 ml-40 bg-blue-600 hover:text-blue-300 p-3 border rounded-md"
                            >Next
                    </button>
                </div>
                <div className="w-[25%] h-full"></div>
        </div>
    );
}
export default Queue;