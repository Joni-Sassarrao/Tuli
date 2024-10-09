export default function InsideImageHome(){
    return(
        <>
        <div className="text-texto1 p-14 absolute max-desktop3:p-10">
            <h2 className="text-4xl font-prompt mt-12 mb-5 max-desktop3:mt-3">Bem-vindo à Tuli</h2>
            <h1 className="text-6xl font-nunito font-bold w-[57rem] mb-5 max-desktop1:w-[52rem] max-desktop2:w-[40rem] max-desktop4:w-[35rem] max-desktop4:text-5xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
            <p className="text-2xl font-prompt w-[30rem] max-desktop4:w-[27rem]">Transforme sua Beleza com Confiança e Praticidade.</p>
        </div>
        <div className="w-full flex justify-end">
            <img className="relative max-desktop3:w-[35rem]" src={"/mulheres1tela.svg"}/>
        </div>
        </>
    )
}