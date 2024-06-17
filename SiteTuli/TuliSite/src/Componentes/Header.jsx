import NavBar from "./NavBar";
import Logo from "../../public/Tuli.svg"

function Header() {
    return ( 
        <header className="flex flex-row bg-black p-7 text-white justify-between items-center">
            <img className="" src={Logo}/>
            <NavBar/>
        </header>
    )
}

export default Header;