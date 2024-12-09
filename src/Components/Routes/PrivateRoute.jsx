import { useSelector } from "react-redux"
import { Navigate, useFetcher } from "react-router-dom";

function PrivateRoute({children}) {
    const token = useSelector(state => state.authStore?.token);
    if (!token) 
        return <Navigate to="/welcomeback" replace></Navigate>
    
    else 
        return children

}
export default PrivateRoute