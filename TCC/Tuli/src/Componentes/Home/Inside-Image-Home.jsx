export default function InsideImageHome(){
    return(
        <>
        <div className="text-texto1 p-14 -mt-10 absolute max-desktop3:-mt-1 max-desktop4:-mt-8 max-desktop8:hidden">
            <h2 className="text-3xl font-prompt mt-12 mb-5 max-desktop3:mt-3 max-[930px]">Bem-vindo à Tuli</h2>
            <h1 className="text-6xl font-nunito font-bold w-[60rem] mb-5 max-desktop1:w-[52rem] max-desktop2:w-[40rem] max-desktop2:text-5xl max-desktop4:w-[30rem] max-desktop4:text-5xl max-[930px]:w-[20rem] max-[930px]:text-4xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
            <p className="text-2xl font-prompt w-[30rem] max-desktop4:w-[27rem] max-[930px]:text-xl max-[930px]:w-[20rem]">Transforme sua Beleza com Confiança e Praticidade.</p>
        </div>
        <div className="w-full flex justify-end max-desktop8:hidden">
            <img className="relative w-[35rem] max-desktop4:w-[30rem]" src={"/mulheres1tela.svg"}/>
        </div>
        <div className="text-texto1 py-14 px-8 -mt-10 desktop8:hidden max-desktop9:py-3 max-desktop9:px-5">
            <h2 className="text-2xl font-prompt mt-12 mb-5 max-desktop9:text-base">Bem-vindo à Tuli</h2>
            <h1 className="text-5xl font-nunito font-bold mb-5 w-[30rem] max-desktop9:text-2xl max-desktop9:w-[20rem] max-desktop10:w-[15rem]">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
            <p className="text-xl font-prompt w-[30rem] max-desktop9:text-sm max-desktop9:w-[20rem] max-desktop10:w-[15rem]">Transforme sua Beleza com Confiança e Praticidade.</p>
        </div>
        <div>
            <img className="desktop8:hidden max-desktop9:w-[4rem] max-desktop9:absolute max-desktop8:mr-20 max-desktop8:mt-28 max-desktop9:-ml-[5.5rem] max-desktop9:mt-16 max-desktop11:hidden" src={"/Tuli2.svg"}/>
        </div>
        </>
    )
}