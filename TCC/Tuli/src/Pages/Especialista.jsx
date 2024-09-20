import { Link } from "react-router-dom"

export default function Especialista(){
    return(
        <>
        <div className="h-[35rem] bg-gradient-to-t from-fundo2(1) to-fundo3">
            <div className="flex justify-between">
                <div>
                    <div className="flex flex-col p-10 mt-44">
                        <h1 className="text-texto1 font-nunito font-bold text-6xl w-[40rem]">QUER FAZER PARTE DA NOSSA EQUIPE?</h1>
                        <div className="flex justify-center w-[35rem] mt-20">
                            <img src={"/setarosa.svg"}/>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <img className="w-4/5" src={'/medica.svg'}/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 justify-items-center mt-20 mb-20">
            <Link className="mb-20" to="/especialista/cadastro">
                <button className="flex items-center w-[60rem] bg-fundo1(o) rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                    <img className="w-24" src={'/estetoscopio.svg'}/>
                    <div className="flex justify-center w-[44rem]">
                        <h1 className="font-prompt text-texto2 text-2xl">CADASTRE-SE</h1>
                    </div>
                </button>
            </Link>
            <Link to="/especialista/beneficios">
                <button className="flex items-center w-[60rem] bg-fundo1(o) rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                    <img className="w-24" src={'/seringa.svg'}/>
                    <div className="flex justify-center w-[42.5rem]">
                        <h1 className="font-prompt text-texto2 text-2xl">BENEFÍCIOS</h1>
                    </div>
                </button>
            </Link>
        </div>
        </>
    )
}