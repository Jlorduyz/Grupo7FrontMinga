import Header from "../Components/Header.jsx"
import Footer from "../Components/Footer.jsx"
import {Outlet} from "react-router-dom";

function Root(){
    return (
        <div className="flex flex-col max-w-screen min-h-screen ">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Root;