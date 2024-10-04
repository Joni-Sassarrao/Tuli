export default function InsideImageHome(){
    return(
        <>
        <div className="text-texto1 p-14 absolute max-desktop100:mt-2">
            <h2 className="text-4xl font-prompt mt-12 mb-5 max-desktop100:text-3xl max-desktop110:text-2xl">Bem-vindo à Tuli</h2>
            <h1 className="text-6xl font-nunito font-bold w-[57rem] mb-5 max-desktop90:w-[45rem] max-desktop90:text-5xl max-desktop100:w-[40rem] max-desktop100:text-[2.7rem] max-desktop110:w-[34rem] max-desktop110:text-4xl max-[1000px]:w-[28rem] max-[1000px]:text-3xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
            <p className="text-2xl font-prompt w-[30rem] max-desktop110:w-[25rem] max-desktop110:text-xl">Transforme sua Beleza com Confiança e Praticidade.</p>
        </div>
        <div className="w-full flex justify-end">
            <img className="max-desktop100:w-1/2 mt-[3px] relative" src={"/mulheres1tela.svg"}/>
        </div>
        </>
    )
}