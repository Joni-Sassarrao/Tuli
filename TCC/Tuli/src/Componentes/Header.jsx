import NavBar from "./NabvBar"
import Logo from "/Tuli.svg"

export default function Header(){
    return(
        <>
        <div className="flex w-full bg-fundo1 font-josefin text-white p-7 justify-between items-center max-desktop90:h-[10rem] max-desktop110:h-[8rem] max-desktop125:h-[7rem] max-desktop150:h-[5rem] max-desktop175:h-[3rem]">
            <div>
                <div className="flex flex-row items-center">
                    <h1 className="text-7xl mr-5 mb-[-10px] max-desktop110:text-6xl max-desktop125:text-5xl max-desktop150:text-4xl max-desktop175:text-3xl">tuli</h1>
                    <img className="w-6 mt-[-10px] max-desktop125:w-5 max-desktop150:w-4 max-desktop150:-ml-3 max-desktop175:w-3 max-desktop175:mt-0 max-desktop175:-ml-3 " src={Logo}/>
                </div>
                <div className="flex-col">
                    <h1 className="text-2xl max-desktop110:text-xl max-desktop125:text-base max-desktop175:text-sm">tratamentos estéticos</h1>
                </div>
            </div>
            <NavBar/>
        </div>
        </>
    )
}