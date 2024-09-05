export default function Home(){
    return(
        <>
        <div className="flex">
            <div className="text-texto1 p-14">
                <h2 className="text-3xl font-prompt mb-5">Bem-vindo à Tuli</h2>
                <h1 className="text-5xl font-nunito font-bold w-[700px] mb-5">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
                <p className="text-xl font-prompt w-[400px]">Transforme sua Beleza com Confiança e Praticidade.</p>
            </div>
            <img className="w-2/5 mt-[3px] ml-[8px]" src={"/mulheres1tela.svg"}/>
        </div>
        <div className="bg-fundo1 h-[299px]"></div>
        <div className="flex">
            <img className="relative -mt-20 ml-28" src={"/idosa.svg"}/>
            <div className="flex flex-col ml-[70px] p-14 w-[30rem]">
                <h1 className="text-texto2 mb-10 font-nunito font-bold text-4xl">A beleza ao seu alcance</h1>
                <p className="mb-8 font-prompt text-texto1 text-lg">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                <p className="font-prompt text-texto1 text-lg">Para melhor sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
            </div>
        </div>
        <div className="bg-fundo2 h-[100px]">
            <div>
                
            </div>
        </div>
        </>
    )
}