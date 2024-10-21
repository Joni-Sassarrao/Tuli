export default function InsideContainerHome3(){
    return(
        <>
        <div className="flex flex-col justify-between mr-10 max-desktop5:ml-[8.9rem]">
            <div className="w-[320px] h-[300px] rounded-[1.4rem] shadow-Card max-desktop5:w-[300px] max-desktop5:h-[200px]">
                <img className="w-auto max-desktop5:w-0" src={'/drenagem.svg'}/>
                <div className="p-3">
                    <h2 className="text-texto2 font-prompt text-xl mb-2">Drenagem linfática</h2>
                    <p className="text-texto3 font-prompt text-lg">Massagem especializada que estimula o sistema linfático, reduz inchaços e melhora a circulação de fluidos corporais.</p>
                </div>
            </div>
            <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card max-desktop5:w-[300px] max-desktop5:h-[200px]">
                <div className="flex justify-start w-full max-desktop5:w-0">
                    <img className="w-auto max-desktop5:w-0" src={'/mamoplastia.svg'}/>
                </div>
                <div className="mr-2 max-desktop5:p-3 max-desktop5:-mt-2">
                    <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px] max-desktop5:w-auto">Mamoplastia</h2>
                    <p className="text-texto3 font-prompt text-lg mt-1 w-[220px] max-desktop5:w-auto">Cirurgia para alterar o tamanho, forma ou posição das mamas.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between mr-10 max-desktop5:ml-[0.8rem]">
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop5:w-[300px] max-desktop5:h-[200px] max-desktop5:mb-7">
                <div className="flex justify-start w-full max-desktop5:w-0">
                    <img className="w-auto max-desktop5:w-5" src={'/lipospiracao.svg'}/>
                </div>
                <div className="p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5">Lipoaspiração</h2>
                    <p className="text-texto3 font-prompt text-lg">Em cirurgia, emove excesso de gordura localizada através de sucção.</p>
                </div>
            </div>
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop5:w-[300px] max-desktop5:h-[200px]">
                <div className="p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5">Microagulhamento Capilar</h2>
                    <p className="text-texto3 font-prompt text-lg">Estimulação do crescimento capilar por meio de agulhas pequenas.</p>
                </div>
                <div className="flex justify-end max-desktop5:w-0">
                    <img className="w-[303px] max-desktop5:w-0" src={'/capilar.svg'}/>
                </div>
            </div>
        </div>
        <div className="w-[350px] h-[460px] rounded-3xl shadow-Card max-desktop5:w-[300px] max-desktop5:h-[200px] max-desktop5:ml-[20.5rem] max-desktop5:mt-10 max-desktop5.1:ml-[20rem]">
            <img className="w-auto max-desktop5:w-0" src={'/limpeza.svg'}/>
            <div className="flex flex-col justify-center p-5">
                <h2 className="text-texto2 font-prompt text-xl mb-5">Limpeza de Pele </h2>
                <p className="text-texto3 font-prompt text-lg">Procedimento estético para remover impurezas da pele e promover sua revitalização.</p>
            </div>
        </div>
        </>
    )
}