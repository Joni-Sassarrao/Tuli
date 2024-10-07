import NavBar from "./NabvBar"
import Logo from "/Tuli.svg"

export default function Header(){
    return(
        <>
        <div className="flex w-full bg-fundo1 font-josefin text-white p-7 justify-between items-center max-desktop90:h-[10rem] max-desktop110:h-[8rem] max-desktop125:h-[7rem]">
            <div>
                <div className="flex flex-row items-center">
                    <h1 className="text-7xl mr-5 mb-[-10px] max-desktop110:text-6xl max-desktop125:text-5xl">tuli</h1>
                    <img className="w-6 mt-[-10px] max-desktop125:w-5" src={Logo}/>
                </div>
                <div className="flex-col">
                    <h1 className="text-2xl max-desktop110:text-xl max-desktop125:text-base">tratamentos estéticos</h1>
                </div>
            </div>
            <NavBar/>
        </div>
        </>
    )
}