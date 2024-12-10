import React, { useState } from "react";
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
            >
                <img
                    src="/images/MenuImage.png"
                    alt="Menu"
                    className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[88px] lg:h-[88px]"
                />
            </button>

            <div
                className={`fixed top-0 left-0 h-full z-40 bg-pink-300 transition-transform duration-300  flex justify-center ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } ${window.innerWidth < 768 ? "w-full" : "w-64"}`}
            >
                <div className="flex flex-col justify-start  items-center h-full space-y-8 text-white w-full">
                    <button
                        onClick={toggleMenu}
                        className="absolute top-4 right-4 text-white  text-3xl bg-pink-400  w-8 h-8 flex justify-center items-center pb-2 rounded-full hover:bg-pink-600"
                    >
                        x
                    </button>
                    {(user) ? (
                        <div className="flex  items-start justify-start space-y-2 w-full py-4  h-[10%]">
                            <div className="flex w-full h-full ">
                                <img
                                    className="w-16 h-16 rounded-full object-cover"
                                    src={user.photo || "/images/defaultProfile.png"}
                                    alt="User Profile"
                                />
                                <div>
                                    <p className="text-md text-center ">{user.email}</p>

                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="flex  items-start justify-start space-y-2 w-full py-4  h-[25%]">

                        </div>
                    )
                    }

                    <div className=" w-[75%] h-[70%] flex flex-col space-y-8 mt-10">
                        <button
                            onClick={() => navigate("/Home")}
                            className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => navigate("/mangas")}
                            className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                        >
                            Mangas
                        </button>
                        {
                            (!requiredAuth || token) && (
                                <button
                                    onClick={() => navigate(`/manager`)}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Manager
                                </button>

                            )
                        }
                        {
                            (role === 1 && token) && (
                                <button
                                    onClick={() => navigate("/profile")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Profile
                                </button>

                            )
                        }
                        {
                            (!requiredAuth || token) && (
                                <button
                                    onClick={() => navigate("/favourites")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Favorites
                                </button>

                            )
                        }
                        {
                            (token && role === 0) && (
                                <button
                                    onClick={() => navigate("/new-role")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Select-Role
                                </button>

                            )
                        }
                        {
                            (role === 3 && token) && (
                                <button
                                    onClick={() => navigate("/admin-panel")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Admin-Panel
                                </button>

                            )
                        }

                        {
                            (unrequiredAuth || !token) && (
                                <button
                                    onClick={() => navigate("/welcome")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Register
                                </button>
                            )
                        }
                        {
                            (unrequiredAuth || !token) && (
                                <button
                                    onClick={() => navigate("/welcomeback")}
                                    className="bg-white text-pink-500 px-10 py-3 rounded-full text-lg shadow-md hover:shadow-lg hover:bg-pink-100"
                                >
                                    Sign In
                                </button>
                            )
                        }
                    </div>


                    <div className="">
                        {
                            (!requiredAuth || token) && (
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-200 text-black px-10 py-3 rounded-lg text-lg shadow-lg hover:shadow-lg hover:bg-pink-100 text-pretty"
                                >
                                    Logout
                                </button>
                            )
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;
