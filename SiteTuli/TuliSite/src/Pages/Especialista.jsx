import Footer from "../Componentes/Footer";
import { Link, Outlet } from "react-router-dom"

export default function Especialista() {
    return ( 
        <div>
            <div className="mb-10">
                <img className="w-full" src={"/fundotela3.svg"}/>
                <div className="flex justify-center">
                    <h1 className="absolute w-[1100px] text-left top-[400px] left-1 font-josefin m-10 text-[#CA1C63] text-8xl">QUER FAZER PARTE DA NOSSA EQUIPE?</h1>
                </div>
                <div className="flex justify-center">
                    <img className="absolute top-[1150px]" src={"/seta.svg"}/>
                </div>
            </div>
            <div className="flex justify-center mb-20">
                <div className="flex flex-col">
                    <button className="w-[1700px] h-[130px] bg-[#F9EBEC] mb-20 rounded-lg shadow-ShadowButton hover:shadow-xl hover:duration-100">
                        <div className="flex flex-row items-center m-4">
                            <img className="w-16 ml-6" src={"/oscopio.svg"}/>
                            <Link className="text-[#CA1C63] text-2xl font-josefin items-end ml-[615px]" to="/especialista/cadastro">CADASTRE-SE</Link>
                            <Outlet/>
                        </div>
                    </button>
                    <button className="w-[1700px] h-[130px] bg-[#F9EBEC] mb-20 rounded-lg shadow-ShadowButton hover:shadow-xl hover:duration-100">
                        <div className="flex flex-row items-center m-4">
                            <img className="w-16 ml-6" src={"/seringa.svg"} />
                            <Link className="text-[#CA1C63] text-2xl font-josefin items-end ml-[615px]" to="/especialista/beneficios">BENEFÍCIOS</Link>
                        </div>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
}