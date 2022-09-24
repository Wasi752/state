import { Link } from "react-router-dom";

function Links() {
    return (
        <div className="flex flex-col justify-center m-5">
            <Link to="/form" className="border p-5 m-5">Form</Link>
            <Link to="/counter" className="border p-5 m-5">Counter</Link>
        </div>
    )
};
export default Links;