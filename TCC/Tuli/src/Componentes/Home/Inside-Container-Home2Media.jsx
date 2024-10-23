export default function InsideContainerHome2Media(){
    return(
        <>
        <div className="flex desktop5:hidden justify-evenly px-10 mb-10">
            <div className="w-[15rem] rounded-3xl shadow-Card">
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5">Toxina Botulínica</h2>
                    <p className="text-texto3 text-base font-prompt">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5">Bichectomia</h2>
                    <p className="text-texto3 text-base font-prompt">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5">Preenchimento Labial</h2>
                    <p className="text-texto3 text-base font-prompt">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                </div>
            </div>
        </div>
        </>
    )
}