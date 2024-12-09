import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateUpdAuthor({children}) {
    const token = useSelector(state => state.authStore?.token);
    const role = useSelector(state => state.authStore.user?.role);

    if (token && role !== 1)
        return <Navigate to="/home" replace></Navigate>
    else 
        return children
    



}

export default PrivateUpdAuthor