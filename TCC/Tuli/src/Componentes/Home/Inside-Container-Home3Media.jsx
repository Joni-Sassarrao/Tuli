export default function InsideContainerHome3Media(){
    return(
        <>
        <div className="flex desktop5:hidden justify-evenly px-10 mb-10">
            <div className="w-[15rem] rounded-[1.4rem] shadow-Card">
                <div className="p-3">
                    <h2 className="text-texto2 font-prompt text-xl mb-2">Drenagem linfática</h2>
                    <p className="text-texto3 font-prompt text-lg">Massagem especializada que estimula o sistema linfático, reduz inchaços e melhora a circulação de fluidos corporais.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card">
                <div className="mr-2 max-desktop5:p-3">
                    <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px]">Mamoplastia</h2>
                    <p className="text-texto3 font-prompt text-lg mt-1 w-[220px]">Cirurgia para alterar o tamanho, forma ou posição das mamas.</p>
                </div>
            </div>
            <div className="flex w-[15rem] rounded-[1.4rem] shadow-Card">
                <div className="p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5">Lipoaspiração</h2>
                    <p className="text-texto3 font-prompt text-lg">Em cirurgia, emove excesso de gordura localizada através de sucção.</p>
                </div>
            </div>
        </div>
        </>
    )
}