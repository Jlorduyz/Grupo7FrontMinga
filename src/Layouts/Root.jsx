import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function Root() {

    const location = useLocation();
    const hideHeaderRoutes = ["/mangas", "/manager", "/edit-chapter"];


    return (
        <div className="max-w-screen min-h-screen flex flex-col">
            {/* Renderiza el Header solo si la ruta actual no está en `hideHeaderRoutes` */}
            {!hideHeaderRoutes.includes(location.pathname) && <Header />}
            {/* Aquí irán las rutas hijas */}
            <main className="flex-grow">
                <Outlet />
            </main>
            {/* Footer permanece visible */}
            <Footer />
        </div>
    );
}

export default Root;
