import { useState } from "react";



function ChangeBulb(){
    const [serial, setSerial]= useState(0)
    const [bulb, setBulb] = useState(["pic_bulboff.jpeg", "pic_bulbon.jpeg", "downloa3d.jpeg", "image3s.jpeg", "download2.jpeg", "pic_bulboff.jpeg", "pic_bulbon.jpeg"]);
    
    const walk = "w-full h-[50%] flex";
    const sit = "w-[20%] h-[80%] ml-12 mt-10 border border-green-600";
    return(
        <div className="w-full h-screen flex-col">
            <div className={walk}>
            <img src={bulb[serial]} className={sit}/> <img src={bulb[serial]} className={sit}/> <img src={bulb[serial]} className={sit}/> <img src={bulb[serial]} className={sit}/> 
            </div>
            <div className="w-full h-[50%] bg-gray-100">
                    <button 
                            type="button"
                            onClick={()=> setSerial((serial + 1) % 5)}
                            className="text-center text-2xl font-bold h-[20%] w-[30%] mt-5 m-5 border-green-600 hover:text-blue-500 p-3 border rounded-md"
                            >Change Bulb
                    </button>
            </div>
            
        </div>
    );
}
export default ChangeBulb;