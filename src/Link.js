import { Link } from "react-router-dom";

function Links() {
    const cName = "border border-blue-300 w-[50%] p-2 ml-40 mb-2 text-xl hover:text-blue-600";
    return (
        <div className="w-full h-screen flex">
            <div className="w-[25%] h-full"></div>
            <div className="flex flex-col justify-center m-5 w-[50%] h-[70%] mt-20 bg-gray-100">
                <Link to="/form" className={cName}>Form</Link>
                <Link to="/counter" className={cName}>Counter</Link>
                <Link to="/fetch" className={cName}>Fetch</Link>
                <Link to="/time" className={cName}>Current Date & Time</Link>
                <Link to="/color" className={cName}>Change Color</Link>
                <Link to="/bulb" className={cName}>Change Bulb</Link>
            </div>
            <div className="w-[25%] h-full"></div>
        </div>
    )
};
export default Links;