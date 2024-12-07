import logo from '/images/logo.png';
import SidebarMenu from './SidebarMenu';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-auto py-3.5 bg-transparent flex justify-between px-10 fixed top-0 z-50">
            <SidebarMenu>
            </SidebarMenu>
            <button onClick={() => navigate("/Home")} className="hover:bg-pink-600">
                <img className="h-14" src={logo} alt="" />
            </button>
        </div>
    );
}

export default Header;
