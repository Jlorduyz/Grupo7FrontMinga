import logo from '/images/logo.png'
import menuImg from '/images/MenuImage.png'
function Header(){
    return (
        <div className="w-full h-24 py-3.5 bg-transparent flex justify-between px-10 ">
            <img className="h-14" src={menuImg} alt=""/>
            <img className="h-14" src={logo} alt=""/>
        </div>
    )
}

export default Header;