export default function InsideContainerHome3(){
    return(
        <>
        <div className="flex flex-col justify-between mr-10 max-desktop5:hidden">
            <div className="w-[320px] rounded-[1.4rem] shadow-Card max-desktop12:w-[420px] max-desktop1.1:w-[320px]">
                <img className="w-full" src={'/drenagem.svg'}/>
                <div className="p-3">
                    <h2 className="text-texto2 font-prompt text-xl mb-2 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-2">Drenagem linfática</h2>
                    <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Massagem especializada que estimula o sistema linfático, reduz inchaços e melhora a circulação de fluidos corporais.</p>
                </div>
            </div>
            <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card max-desktop12:h-[200px] max-desktop12:w-[420px] max-desktop1.1:h-[140px] max-desktop1.1:w-[320px]">
                <div className="flex justify-start w-full">
                    <img className="w-auto" src={'/mamoplastia.svg'}/>
                </div>
                <div className="mr-2 max-desktop5:p-3 max-desktop12:mr-4 max-desktop12:py-3 max-desktop1.1:mr-2 max-desktop1.1:py-0">
                    <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px] max-desktop12:text-3xl max-desktop12:mb-6 max-desktop1.1:text-xl max-desktop1.1:mt-3 max-desktop1.1:w-[210px]">Mamoplastia</h2>
                    <p className="text-texto3 font-prompt text-lg mt-1 w-[220px] max-desktop12:text-[1.4rem] max-desktop12:w-[270px] max-desktop1.1:text-lg max-desktop1.1:-mt-4 max-desktop1.1:w-[220px]">Cirurgia para alterar o tamanho, forma ou posição das mamas.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between mr-10 max-desktop5:hidden">
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop12:w-[560px] max-desktop1.1:w-[420px]">
                <div className="flex justify-start w-full">
                    <img className="w-auto" src={'/lipospiracao.svg'}/>
                </div>
                <div className="p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Lipoaspiração</h2>
                    <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Em cirurgia, emove excesso de gordura localizada através de sucção.</p>
                </div>
            </div>
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop12:w-[560px] max-desktop1.1:w-[420px]">
                <div className="p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Microagulhamento Capilar</h2>
                    <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Estimulação do crescimento capilar por meio de agulhas pequenas.</p>
                </div>
                <div className="flex justify-end">
                    <img className="w-[303px] max-desktop12:w-[430px] max-desktop1.1:w-[303px]" src={'/capilar.svg'}/>
                </div>
            </div>
        </div>
        <div className="w-[350px] h-[460px] rounded-3xl shadow-Card max-desktop5:hidden max-desktop12:w-[450px] max-desktop12:h-[600px] max-desktop1.1:w-[350px] max-desktop1.1:h-[460px]">
            <img className="w-full" src={'/limpeza.svg'}/>
            <div className="flex flex-col justify-center p-5 max-desktop12:py-10 max-desktop1.1:p-5 max-desktop1.1:py-4">
                <h2 className="text-texto2 font-prompt text-xl mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Limpeza de Pele </h2>
                <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Procedimento estético para remover impurezas da pele e promover sua revitalização.</p>
            </div>
        </div>
        </>
    )
}