import Header from "../Components/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";

function Root() {

    const location = useLocation();
    const hideHeaderRoutes = ["/mangas", "/manager", "/edit-chapter"];


    return (
        <div className="max-w-screen min-h-screen flex flex-col">
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
            <main className="flex-grow">
                <Outlet />
            </main>
  
        </div>
    );
}

export default Root;
