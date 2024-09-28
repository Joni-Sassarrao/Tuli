import { Link } from "react-router-dom"

export default function BotaoEspecialista2(){
    return(
        <>
        <Link to="/especialista/beneficios">
            <button className="flex items-center w-[60rem] bg-texto2 rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                <div className="w-screen p-7">
                    <h1 className="flex justify-center font-prompt text-white text-4xl">BENEFÍCIOS</h1>
                </div>
            </button>
        </Link>
        </>
    )
}