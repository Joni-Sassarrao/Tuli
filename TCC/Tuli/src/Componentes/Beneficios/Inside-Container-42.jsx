export default function InsideContainerBeneficios42(){
    return(
        <>
        <div className="flex justify-evenly px-52 py-10 max-desktop8:px-20 max-desktop9:hidden">
            <div className="grid grid-cols-1 justify-items-center bg-fundo5 p-5 rounded-3xl shadow-Card max-desktop5:w-[17rem] max-desktop5:h-[17rem] max-desktop8:w-[14rem] max-desktop8:h-[14rem]">
                <h1 className="text-texto2 font-josefin font-semibold text-3xl w-[20rem] text-center max-desktop5:text-2xl max-desktop8:text-xl">GERENCIAMENTO SIMPLIFICADO</h1>
                <img className="max-desktop8:w-[8rem]" src="/calendario.svg"/>
                <p className="text-texto4 font-josefin text-xl text-center max-desktop5:text-base max-desktop8:text-sm max-desktop8:w-[12rem]">Controle Total e Suporte Técnico</p>
            </div>
            <div className="grid grid-cols-1 justify-items-center bg-fundo5 p-5 rounded-3xl shadow-Card max-desktop5:w-[17rem] max-desktop5:h-[17rem] max-desktop8:w-[14rem] max-desktop8:h-[14rem]">
                <h1 className="text-texto2 font-josefin font-semibold text-3xl w-[20rem] text-center max-desktop5:text-2xl max-desktop8:text-xl">TELECONSULTAS</h1>
                <img className="max-desktop8:w-[8rem]" src="/maocelular.svg"/>
                <p className="text-texto4 font-josefin text-xl w-[15rem] text-center max-desktop5:text-base max-desktop8:text-sm max-desktop8:w-[12rem]">Flexibilidade</p>
            </div>
        </div>
        </>
    )
}