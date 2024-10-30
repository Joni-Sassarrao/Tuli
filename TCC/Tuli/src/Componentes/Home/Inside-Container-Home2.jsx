export default function InsideContainerHome2(){
    return(
        <>
        <div className="w-[350px] h-[450px] rounded-3xl shadow-Card max-desktop5:hidden max-desktop12:w-[450px] max-desktop12:h-[600px] max-desktop1.1:w-[350px] max-desktop1.1:h-[450px]">
            <img className="w-full" src={'/toxina.svg'}/>
            <div className="flex flex-col justify-center p-5 max-desktop12:py-10 max-desktop1.1:p-5">
                <h2 className="text-texto2 font-prompt text-xl mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Toxina Botulínica</h2>
                <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
            </div>
        </div>
        <div className="flex flex-col justify-between ml-10 max-desktop5:hidden">
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop12:w-[560px] max-desktop1.1:w-[420px]">
                <div className="flex justify-start w-full">
                    <img className="w-auto" src={'/bichectomia.svg'}/>
                </div>
                <div className="p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Bichectomia</h2>
                    <p className="text-texto3 text-lg font-prompt max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
                </div>
            </div>
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop12:w-[560px] max-desktop1.1:w-[420px]">
                <div className="p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-5">Preenchimento Labial</h2>
                    <p className="text-texto3 text-lg font-prompt max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                </div>
                <div className="flex justify-end w-full">
                    <img className="w-full" src={'/labial.svg'}/>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between ml-10 max-desktop5:hidden">
            <div className="w-[320px] rounded-[1.4rem] shadow-Card max-desktop12:w-[420px] max-desktop1.1:w-[320px]">
                <img className="w-full" src={'/peeling.svg'}/>
                <div className="p-3 max-desktop12:p-5 max-desktop1.1:p-3">
                    <h2 className="text-texto2 font-prompt text-xl mb-4 max-desktop12:text-3xl max-desktop1.1:text-xl max-desktop1.1:mb-4">Peeling Químico</h2>
                    <p className="text-texto3 font-prompt text-lg max-desktop12:text-[1.4rem] max-desktop1.1:text-lg">Usa ácidos para esfoliar a pele, melhorando a textura e reduzindo imperfeições.</p>
                </div>
            </div>
            <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card max-desktop12:h-[200px] max-desktop12:w-[420px] max-desktop1.1:h-[140px] max-desktop1.1:w-[320px]">
                <div className="flex justify-start w-full">
                    <img className="w-auto" src={'/microagulhamento.svg'}/>
                </div>
                <div className="mr-2 max-desktop12:mr-4 max-desktop12:py-3 max-desktop1.1:mr-2 max-desktop1.1:py-0">
                    <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px] max-desktop12:text-3xl max-desktop12:mb-6 max-desktop1.1:text-xl max-desktop1.1:mt-3 max-desktop1.1:w-[210px]">Microagulhamento</h2>
                    <p className="text-texto3 font-prompt text-lg mt-1 w-[220px] max-desktop12:text-[1.4rem] max-desktop12:w-[270px] max-desktop1.1:text-lg max-desktop1.1:-mt-3 max-desktop1.1:w-[220px]">Utiliza agulhas finas para estimular a produção de colágeno na pele</p>
                </div>
            </div>
        </div>
        </>
    )
}