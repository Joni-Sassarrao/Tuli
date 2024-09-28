export default function InsideContainerBeneficios42(){
    return(
        <>
        <div className="flex justify-evenly px-52 py-10">
            <div className="grid grid-cols-1 justify-items-center bg-fundo5 p-5 rounded-3xl shadow-Card">
                <h1 className="text-texto2 font-josefin font-semibold text-3xl w-[20rem] text-center">GERENCIAMENTO SIMPLIFICADO</h1>
                <img src="/calendario.svg"/>
                <p className="text-texto4 font-josefin text-xl text-center">Controle Total e Suporte Técnico</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center bg-fundo5 p-5 rounded-3xl shadow-Card">
                <h1 className="text-texto2 font-josefin font-semibold text-3xl w-[20rem] text-center">TELECONSULTAS</h1>
                <img src="/maocelular.svg"/>
                <p className="text-texto4 font-josefin text-xl w-[15rem] text-center">Flexibilidade</p>
            </div>
        </div>
        </>
    )
}