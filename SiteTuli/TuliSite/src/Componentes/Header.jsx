import NavBar from "./NavBar";
import Logo from "/Tuli.svg"

function Header() {
    return ( 
        <>
        <header className="flex absolute w-full bg-preto p-7 text-white justify-between items-center">
            <div>
                <div className="flex flex-row items-center mb-[-10px]">
                    <h1 className="font-josefin text-7xl mr-5">tuli</h1>
                    <img className="w-5 mb-3" src={Logo}/>
                </div>
                <div className="flex-col">
                    <h1 className="font-josefin text-2xl">tratamentos estéticos</h1>
                </div>
            </div>
            <NavBar/>
        </header>
        </>
    )
}

export default Header;