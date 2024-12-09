import { useSelector } from "react-redux"
import { Navigate, useFetcher } from "react-router-dom";

function PrivateRoute({children}) {
    const token = useSelector(state => state.authStore?.token);
    const loading = useSelector(state => state.authStore?.loading);


    
    

    if (!token && loading === false) 
        return <Navigate to="/welcomeback" replace></Navigate>
    
    else 
        return children

}
export default PrivateRoute