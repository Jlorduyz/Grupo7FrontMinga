import { useSelector } from "react-redux"
import { Navigate, useFetcher } from "react-router-dom";

function PrivateRoute({children}) {
    const loading = useSelector(state => state.authStore?.loading);
    const tokenStorage = localStorage.getItem("token");


    
    

    if (!tokenStorage) 
        return <Navigate to="/welcomeback" replace></Navigate>
    
    else 
        return children

}
export default PrivateRoute