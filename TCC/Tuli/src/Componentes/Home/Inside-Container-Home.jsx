export default function InsideContainerHome(){
    return(
        <>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24"></div>
            <img className="relative ml-16 max-desktop6.1:w-24" src={"/confiabilidade.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-1 text-2xl max-desktop6.1:text-xl">Confiabilidade</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24"></div>
            <img className="relative ml-20 max-desktop6.1:w-[5.5rem]" src={"/consultas.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-5 text-2xl max-desktop6.1:text-center max-desktop6.1:text-xl">Agende Consultas</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24"></div>
            <img className="relative mt-8 ml-20 max-desktop6.1:w-24" src={"/profissionais.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-5 text-2xl max-desktop4:w-[12rem] max-desktop4:text-center max-desktop5:w-[12rem] max-desktop5:text-center max-desktop6.1:text-xl">Melhores Profissionais</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24"></div>
            <img className="relative mt-3 ml-24 max-desktop6.1:w-20" src={"/servicos.svg"}/>
            <div className="flex flex-col mt-5">
                <p className="font-prompt text-texto2 text-center -ml-20 text-2xl w-80 max-desktop6.1:text-xl max-desktop6.1:w-[17rem] max-desktop6.1:text-center">Diversas Opções de Serviços</p>
            </div>
        </div>
        </>
    )
}