import { Link } from "react-router-dom"

export default function BotaoEspecialista(){
    return(
        <>
        <Link className="mb-20" to="/especialista/cadastro">
            <button className="flex items-center w-[60rem] bg-texto2 rounded-2xl p-5 shadow-Botao hover:shadow-Botao-ativado hover:duration-150">
                <div className="w-screen p-7">
                    <h1 className="font-prompt text-white text-4xl">CADASTRE-SE</h1>
                </div>
            </button>
        </Link>
        </>
    )
}