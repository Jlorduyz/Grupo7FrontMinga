import Header from "../Components/Header.jsx";
import { Outlet, useLocation } from "react-router-dom";

function Root() {

  const location = useLocation();


   return (
        <div className="max-w-screen min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
  
        </div>
    );
}

export default Root;
