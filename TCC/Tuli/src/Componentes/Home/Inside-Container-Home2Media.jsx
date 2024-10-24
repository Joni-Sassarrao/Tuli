export default function InsideContainerHome2Media(){
    return(
        <>
        <div className="flex desktop5:hidden justify-evenly px-10 mb-10">
            <div className="w-[15rem] rounded-3xl shadow-Card max-desktop8:w-[12rem]">
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base">Toxina Botulínica</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card max-desktop8:w-[12rem]">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base">Bichectomia</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card max-desktop8:w-[12rem]">
                <div className="p-5">
                    <h2 className="text-texto2 text-lg font-prompt mb-5 max-desktop8:text-base">Preenchimento Labial</h2>
                    <p className="text-texto3 text-base font-prompt max-desktop8:text-sm">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                </div>
            </div>
        </div>
        </>
    )
}