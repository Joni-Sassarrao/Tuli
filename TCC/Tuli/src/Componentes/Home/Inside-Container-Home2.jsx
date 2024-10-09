export default function InsideContainerHome2(){
    return(
        <>
        <div className="w-[350px] h-[450px] rounded-3xl shadow-Card max-desktop5:w-[300px] max-desktop5:h-[250px]">
            <img className="w-auto max-desktop5:w-0" src={'/toxina.svg'}/>
            <div className="flex flex-col justify-center p-5">
                <h2 className="text-texto2 text-xl font-prompt mb-5">Toxina Botulínica</h2>
                <p className="text-texto3 text-lg font-prompt">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
            </div>
        </div>
        <div className="flex flex-col justify-between ml-10 max-desktop5:flex-row justify-inicial max-desktop5:-ml-20">
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop5:w-[200px] max-desktop5:h-[250px]">
                <div className="flex justify-start w-full max-desktop5:w-0">
                    <img className="w-auto max-desktop5:w-0" src={'/bichectomia.svg'}/>
                </div>
                <div className="p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5">Bichectomia</h2>
                    <p className="text-texto3 text-lg font-prompt">Cirurgia para remoção das bolsas de gordura nasbochechas, visando afinar o rosto.</p>
                </div>
            </div>
            <div className="flex w-[420px] rounded-[1.4rem] shadow-Card max-desktop5:w-[200px] max-desktop5:h-[250px]">
                <div className="p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5">Preenchimento Labial</h2>
                    <p className="text-texto3 text-lg font-prompt">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                </div>
                <div className="flex justify-end w-full max-desktop5:w-0">
                    <img className="w-auto max-desktop5:w-0" src={'/labial.svg'}/>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-between ml-10 max-desktop5:flex-row">
            <div className="w-[320px] rounded-[1.4rem] shadow-Card">
                <img className="w-auto max-desktop5:w-0" src={'peeling.svg'}/>
                <div className="p-3">
                    <h2 className="text-texto2 font-promtp text-xl mb-4">Peeling Químico</h2>
                    <p className="text-texto3 font-prompt text-lg">Usa ácidos para esfoliar a pele, melhorando a textura e reduzindo imperfeições.</p>
                </div>
            </div>
            <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card max-desktop5:w-[200px] max-desktop5:h-[250px]">
                <div className="flex justify-start w-full max-desktop5:w-0">
                    <img className="w-auto max-desktop5:w-0" src={'/microagulhamento.svg'}/>
                </div>
                <div className="mr-2 max-desktop5:p-3 max-desktop5:-mt-2">
                    <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px] max-desktop5:w-auto">Microagulhamento</h2>
                    <p className="text-texto3 font-prompt text-lg mt-1 w-[220px] max-desktop5:w-auto">Utiliza agulhas finas para estimular a produção de colágeno na pele</p>
                </div>
            </div>
        </div>
        </>
    )
}