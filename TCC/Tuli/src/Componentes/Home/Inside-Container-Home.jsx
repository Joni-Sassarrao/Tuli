export default function InsideContainerHome(){
    return(
        <>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
            <img className="relative ml-16" src={"/confiabilidade.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-1 text-2xl">Confiabilidade</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
            <img className="relative ml-20" src={"/consultas.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-5 text-2xl">Agende Consultas</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
            <img className="relative mt-8 ml-20" src={"/profissionais.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 -ml-5 text-2xl">Melhores Profissionais</p>
            </div>
        </div>
        <div className="mt-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
            <img className="relative mt-3 ml-24" src={"/servicos.svg"}/>
            <div className="flex flex-col mt-5">
                <p className="font-prompt text-texto2 text-center -ml-20 text-2xl w-80">Diversas Opções de Serviços</p>
            </div>
        </div>
        </>
    )
}