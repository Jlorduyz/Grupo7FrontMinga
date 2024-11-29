import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="max-w-screen min-h-screen flex flex-col">
            <Header />
            {/* Aquí irán las rutas hijas */}
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Agregar el Footer */}
            <Footer />
        </div>
    );
}

export default Root;
