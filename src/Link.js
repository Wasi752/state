import { Link } from "react-router-dom";

function Links() {
    return (
        <div className="w-full h-screen flex">
            <div className="w-[25%] h-full"></div>
            <div className="flex flex-col justify-center m-5 w-[50%] h-[70%] mt-20 bg-gray-100">
                <Link to="/form" className="border border-blue-300 w-[70%] p-5 ml-20 mb-2 text-xl hover:text-blue-600">Form</Link>
                <Link to="/counter" className="border border-blue-300 w-[70%] ml-20 mb-2 p-5 text-xl hover:text-blue-600">Counter</Link>
                <Link to="/fetch" className="border border-blue-300 w-[70%] p-5 ml-20 mb-2 text-xl hover:text-blue-600">Fetch</Link>
                <Link to="/time" className="border border-blue-300 w-[70%] p-5 ml-20 mb-2 text-xl hover:text-blue-600">Current Time</Link>
                <Link to="/queue" className="border border-blue-300 w-[70%] p-5 ml-20 mb-2 text-xl hover:text-blue-600">Next Serial</Link>
            </div>
            <div className="w-[25%] h-full"></div>
        </div>
    )
};
export default Links;