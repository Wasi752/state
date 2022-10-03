import { useState } from "react";

function ColorChange (){
    const [colorIndex, setColorIndex] = useState(0);
    let color;
    if (colorIndex === 0) {
        color = "bg-blue-500";
    } else if(colorIndex === 1) {
        color = "bg-red-500";
    } else if (colorIndex === 2) {
        color = "bg-yellow-500";
    } else if (colorIndex === 3) {
        color = "bg-pink-600";
    } else {
        color = "bg-black";
    }

    const wa = `w-[50%] h-full ${color}`; 
    return(
        <div className="w-full h-screen flex">
            <div className={wa}>{colorIndex}</div>
            <div className="w-[50%] h-full bg-gray-200">
                    <button 
                            type="button"
                            onClick={()=> setColorIndex ((colorIndex + 1) % 5)}
                            className="text-center text-2xl text-white font-bold h-[10%] w-[60%] mt-40 ml-40 bg-blue-600 hover:text-blue-300 p-3 border rounded-md"
                            >Color Change
                    </button>
            </div>
            <div className="w-[25%] h-full bg-green-200"></div>
        </div>
    );
}
export default ColorChange;