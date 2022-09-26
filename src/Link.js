import { Link } from "react-router-dom";

function Links() {
    return (
        <div className="w-full h-screen flex">
            <div className="w-[25%] h-full"></div>
                <div className="flex flex-col justify-center m-5 w-[50%] h-[50%] mt-40 bg-gray-100">
                    <Link to="/form" className="border p-5 m-5 text-3xl hover:text-blue-600">Form</Link>
                    <Link to="/counter" className="border p-5 m-5 text-3xl hover:text-blue-600">Counter</Link>
                    <Link to="/fetch" className="border p-5 m-5 text-3xl hover:text-blue-600">Fetch</Link>
                </div>
            <div className="w-[25%] h-full"></div>
        </div>
    )
};
export default Links;