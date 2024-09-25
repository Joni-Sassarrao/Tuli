import { Link } from "react-router-dom"

export default function BotaoEspecialista2(){
    return(
        <>
            <Link to="/especialista/beneficios">
                <button className="flex items-center w-[60rem] bg-fundo1(o) rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                    <img className="w-24" src={'/seringa.svg'}/>
                    <div className="flex justify-center w-[42.5rem]">
                        <h1 className="font-prompt text-texto2 text-2xl">BENEFÍCIOS</h1>
                    </div>
                </button>
            </Link>
        </>
    )
}