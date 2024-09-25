import { Link } from "react-router-dom"

export default function BotaoEspecialista(){
    return(
        <>
            <Link className="mb-20" to="/especialista/cadastro">
                <button className="flex items-center w-[60rem] bg-fundo1(o) rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                    <img className="w-24" src={'/estetoscopio.svg'}/>
                    <div className="flex justify-center w-[44rem]">
                        <h1 className="font-prompt text-texto2 text-2xl">CADASTRE-SE</h1>
                    </div>
                </button>
            </Link>
        </>
    )
}