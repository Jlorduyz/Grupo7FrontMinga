import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateUpdAuthor({children}) {
    const token = localStorage.getItem("token");
    const role = (JSON.parse(localStorage.getItem("user")).role)
    console.log("role", role);
    
    if (token && role !== 1)
        return <Navigate to="/home" replace></Navigate>
    else 
        return children
    



}

export default PrivateUpdAuthor