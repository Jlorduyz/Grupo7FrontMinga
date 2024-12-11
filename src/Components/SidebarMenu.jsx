import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../Store/actions/AuthActions.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const SidebarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/home");
    };
    const token = useSelector(state => state.authStore?.token);
    const role = useSelector(state => state.authStore.user?.role);
    const user = useSelector(state => state.authStore?.user);





    const requiredAuth = true
    const unrequiredAuth = false

    return (
        <div>
            <button
                onClick={toggleMenu}
                className={`fixed top-4 left-4 z-50 focus:outline-none transition-transform duration-300 ${isOpen ? "hidden" : "block"}`}
                aria-label="Abrir menú"
            >
                <img
                    src="/images/MenuImage.png"
                    alt="Menu"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                />
            </button>

            <div
                className={`fixed top-0 left-0 h-full z-40 bg-gradient-to-b from-pink-500 to-pink-700 transition-transform duration-300 flex flex-col items-center ${isOpen ? "translate-x-0" : "-translate-x-full"} ${window.innerWidth < 768 ? "w-full" : "w-80"}`}
            >
                <div className="flex flex-col justify-start items-center h-full w-full p-6 text-white relative">

                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-200 transition-colors"
                        aria-label="Cerrar menú"
                    >
                        &times;
                    </button>

                    {user ? (
                        <div className="flex items-center space-x-4 mb-8">
                            <img
                                className="w-16 h-16 rounded-full object-cover border-2 border-white"
                                src={user.photo || "/images/defaultProfile.png"}
                                alt="User Profile"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">{user.name || "User"}</span>
                                <span className="text-sm">{user.email}</span>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4  mb-[80%]">

                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">Guest</span>
                                <span className="text-sm">Please, login or register </span>
                            </div>
                        </div>
                    )}

                    <nav className="flex flex-col items-center w-full space-y-4">
                        <button
                            onClick={() => navigate("/Home")}
                            className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigate("/mangas")}
                            className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                        >
                            Mangas
                        </button>
                        {(!requiredAuth || token) && (
                            <button
                                onClick={() => navigate(`/manager`)}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Manager
                            </button>
                        )}
                        {(role === 1 && token) && (
                            <button
                                onClick={() => navigate("/profile")}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Profile
                            </button>
                        )}
                        {(!requiredAuth || token) && (
                            <button
                                onClick={() => navigate("/favourites")}
                                className="w-full text-left text-lg transition-colors flex items-center justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Favorites
                            </button>
                        )}
                        {(token && role === 0) && (
                            <button
                                onClick={() => navigate("/new-role")}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Select-Role
                            </button>
                        )}
                        {(role === 3 || role === 1 && token) && (
                            <button
                                onClick={() => navigate("/admin-panel")}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Admin-Panel
                            </button>
                        )}
                        {(unrequiredAuth || !token) && (
                            <button
                                onClick={() => navigate("/welcome")}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Register
                            </button>
                        )}
                        {(unrequiredAuth || !token) && (
                            <button
                                onClick={() => navigate("/welcomeback")}
                                className="w-full text-left text-lg transition-colors flex items-center  justify-center hover:bg-rose-50 hover:text-black"
                                >
                                Sign In
                            </button>
                        )}
                    </nav>

                    <div className="mt-auto w-full flex justify-end">
                        {(!requiredAuth || token) && (
                            <button
                                onClick={handleLogout}
                                className="w-auto text-left text-lg text-white hover:text-black transition-colors flex items-center justify-end hover:bg-slate-50 p-2 rounded-lg"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
