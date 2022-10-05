import { useState } from "react";

function ColorChange (){
    const [colorIndex, setColorIndex] = useState(0);
    let color;
    if (colorIndex === 0) {
        color = "bg-blue-500";
    } else if(colorIndex === 1) {
        color = "bg-red-600";
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
            <div className={wa}></div>
            <div className="w-[50%] h-full bg-gray-100">
                    <button 
                            type="button"
                            onClick={()=> setColorIndex ((colorIndex + 1) % 5)}
                            className="text-center text-2xl font-bold h-[10%] w-[60%] mt-40 m-5 border-green-600 hover:text-blue-500 p-3 border rounded-md"
                            >Change Color
                    </button>
            </div>
            <div className={wa}></div>
        </div>
    );
}
export default ColorChange;