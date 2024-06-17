import NavBar from "./NavBar";
import Logo from "/Tuli.svg"

function Header() {
    return ( 
        <header className="flex flex-row bg-black p-7 text-white justify-between items-center">
            <div className="flex flex-row">
                <h1 className="font-josefin text-6xl mr-5">tuli</h1>
                <img className="w-5 mb-3" src={Logo}/>  
                <div>
                    <h1>tratamentos estéticos</h1></div>
                </div>
            <NavBar/>
        </header>
    )
}

export default Header;