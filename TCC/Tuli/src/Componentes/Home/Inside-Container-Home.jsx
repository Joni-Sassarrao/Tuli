export default function InsideContainerHome(){
    return(
        <>
        <div className="mt-5 max-desktop7.1:mt-0 max-desktop7.1:mb-5">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24 max-desktop10:h-20 max-desktop10:w-20"></div>
            <img className="relative ml-16 max-desktop6.1:w-24 max-desktop10:w-20 max-desktop10:ml-12" src={"/confiabilidade.svg"}/>
            <div className="flex flex-col mt-4">
                <p className="font-prompt text-texto2 text-2xl max-desktop8:text-base max-desktop8:ml-5 max-desktop10:ml-0">Confiabilidade</p>
            </div>
        </div>
        <div className="mt-5 max-desktop7.1:mt-0">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24 max-desktop10:h-20 max-desktop10:w-20"></div>
            <img className="relative ml-20 max-desktop6.1:w-[5.5rem] max-desktop10:w-[4.6rem] max-desktop10:ml-14" src={"/consultas.svg"}/>
            <div className="flex flex-col mt-4 max-desktop8:mt-[0.85rem]">
                <p className="font-prompt text-texto2 -ml-3 text-2xl max-desktop6.1:text-center max-desktop8:text-base max-desktop8:-ml-2">Agende Consultas</p>
            </div>
        </div>
        <div className="mt-5 max-desktop7.1:mt-0">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24 max-desktop7.1:ml-2 max-desktop10:h-20 max-desktop10:w-20 max-desktop10:ml-4"></div>
            <img className="relative mt-8 ml-20 max-desktop6.1:w-24 max-desktop10:w-20 max-desktop10:ml-14" src={"/profissionais.svg"}/>
            <div className="flex flex-col mt-4 max-desktop8:mt-[0.85rem]">
                <p className="font-prompt text-texto2 -ml-7 text-2xl max-desktop4:w-[12rem] max-desktop4:text-center max-desktop5:w-[12rem] max-desktop5:text-center max-desktop5:ml-1 max-desktop6.1:text-xl max-desktop8:text-base max-desktop8:w-[10rem] max-desktop8:ml-0">Melhores Profissionais</p>
            </div>
        </div>
        <div className="mt-5 max-desktop7.1:mt-0">
            <div className="bg-fundo2 h-32 w-32 rounded-full absolute max-desktop8:h-24 max-desktop8:w-24 max-desktop10:h-20 max-desktop10:w-20 max-desktop10:ml-4"></div>
            <img className="relative mt-3 ml-[6rem] max-desktop6.1:w-20 max-desktop7.1:ml-20 max-desktop10:w-[4rem] max-desktop10:ml-[4.5rem]" src={"/servicos.svg"}/>
            <div className="flex flex-col mt-5 max-desktop10:mt-[1.6rem]">
                <p className="font-prompt text-texto2 text-center -ml-7 text-2xl w-[15rem] max-desktop8:text-base max-desktop8:w-[10rem] max-desktop8:ml-0">Diversas Opções de Serviços</p>
            </div>
        </div>
        </>
    )
}