import NavBar from "./NabvBar"
import Logo from "/Tuli.svg"

export default function Header(){
    return(
        <>
        
        <div className="flex w-full bg-fundo1 font-josefin text-white p-7 justify-between items-center">
            <div>
                <div className="flex flex-row items-center">
                    <h1 className="text-7xl mr-5 mb-[-10px]">tuli</h1>
                    <img className="w-6 mt-[-10px]" src={Logo}/>
                </div>
                <div className="flex-col">
                    <h1 className="text-2xl">tratamentos estéticos</h1>
                </div>
            </div>
            <NavBar/>
        </div>
        </>
    )
}