
import { useState } from "react";
import data from "./data";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState(data);

    const submit = ()=>{
        const user = {
            name: name, 
            email: email, 
            phone: phone, 
            password: password
        };
        setUsers([...users, user]);
    };
    return(
        <div className="w-full h-screen flex-col">
            <div className="w-full h-1/6"></div>
            <div className="w-full h-[70%] flex">
                <div className="w-[25%] h-full"></div>    
                <div className="w-[50%] h-[80%] bg-gray-100 p-5 divide-x-2 divide-x-2">        
                    <p className="mt-1 ml-5 text-left underline mr-10">Sign Up/Registration</p>
                    <div className="mt-1"><label className="ml-6 pr-2 ">User Name :</label>    
                        <input 
                            type="text"
                            value= {name} 
                            onChange={e => setName(e.target.value)}  
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className="ml-4 pr-3 pl-10">Email :</label>           
                        <input 
                            type="text" 
                            value= {email} 
                            onChange={e => setEmail(e.target.value)} 
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className="ml-4 pr-4 pl-8 ">Phone :</label>   
                        <input 
                            type="text" 
                            value= {phone} 
                            onChange={e => setMobileNumber(e.target.value)} 
                            className="h-[10%] w-[50%] ml-2 p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div><label className=" ml-6 pr-3">Password :</label>        
                        <input 
                            type="password" 
                            value= {password} 
                            onChange={e => setPassword(e.target.value)} 
                            className="h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-3"
                        />
                    </div>
                    <div className="ml-12 pr-3 pl-8">
                        <button 
                            type="button"
                            onClick={submit} 
                            className="text-center text-2xl text-white font-bold h-[80%] w-[56%] ml-14 bg-blue-600 hover:text-blue-300 p-3 border rounded-md m-3">Submit</button>
                    </div>
                </div>
                <div className="w-[25%] h-full"></div>
            </div>
            
            <p>{JSON.stringify(users)}</p>
        </div>
    );
}
export default Form;