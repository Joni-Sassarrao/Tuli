import NavBar from "./NabvBar"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
        <div className="flex w-full h-[7.5rem] bg-fundo1 font-josefin text-white p-7 justify-between items-center max-desktop4:h-[6rem]">
            <div>
                <Link to={'/'}>
                    <div className="flex flex-row items-center">
                        <h1 className="text-6xl mr-5 mb-[-10px] max-desktop4:text-5xl">tuli</h1>
                        <img className="w-6 mt-[-10px] max-desktop4:w-5" src={'Tuli.svg'}/>
                    </div>
                </Link>
                <div className="flex-col">
                    <h1 className="text-2xl max-desktop4:text-xl">tratamentos estéticos</h1>
                </div>
            </div>
            <NavBar/>
        </div>
        </>
    )
}