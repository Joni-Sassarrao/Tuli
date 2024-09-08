export default function Home(){
    return(
        <>
        <div className="flex justify-between">
            <div className="text-texto1 p-14">
                <h2 className="text-3xl font-prompt mb-5">Bem-vindo à Tuli</h2>
                <h1 className="text-5xl font-nunito font-bold w-[700px] mb-5">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
                <p className="text-xl font-prompt w-[400px]">Transforme sua Beleza com Confiança e Praticidade.</p>
            </div>
            <img className="w-[35%] mt-[3px]" src={"/mulheres1tela.svg"}/>
        </div>
        <div className="bg-fundo1 h-[180px] w-auto"></div>
        <div className="flex mb-28">
            <img className="relative w-1/3 -mt-20 ml-60" src={"/idosa.svg"}/>
            <div className="flex flex-col ml-[70px] p-14 w-[30rem]">
                <h1 className="text-texto2 mb-10 font-nunito font-bold text-4xl">A beleza ao seu alcance</h1>
                <p className="mb-8 font-prompt text-texto1 text-lg">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                <p className="font-prompt text-texto1 text-lg">Para melhor sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
            </div>
        </div>
        <div className="flex justify-evenly bg-fundo2(o) h-[260px] p-5">
            <div className="mt-5">
                <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
                <img className="relative ml-16" src={"/confiabilidade.svg"}/>
                <div className="flex flex-col mt-4">
                    <p className="font-prompt text-texto2 -ml-1 text-2xl">Confiabilidade</p>
                </div>
            </div>
            <div className="mt-5">
                <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
                <img className="relative ml-20" src={"/consultas.svg"}/>
                <div className="flex flex-col mt-4">
                    <p className="font-prompt text-texto2 -ml-5 text-2xl">Agende Consultas</p>
                </div>
            </div>
            <div className="mt-5">
                <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
                <img className="relative mt-8 ml-20" src={"/profissionais.svg"}/>
                <div className="flex flex-col mt-4">
                    <p className="font-prompt text-texto2 -ml-5 text-2xl">Melhores Profissionais</p>
                </div>
            </div>
            <div className="mt-5">
                <div className="bg-fundo2 h-32 w-32 rounded-full absolute"></div>
                <img className="relative mt-3 ml-24" src={"/servicos.svg"}/>
                <div className="flex flex-col mt-5">
                    <p className="font-prompt text-texto2 text-center -ml-20 text-2xl w-80">Diversas Opções de Serviços</p>
                </div>
            </div>
        </div>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-44 mb-20">Nossos serviços especializados incluem:</h1>
        <div className="flex justify-center mb-10">
            <div className="w-1/4 rounded-3xl shadow-Card">
                <img className="w-full" src={'/toxina.svg'}/>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5">Toxina Botulíica</h2>
                    <p className="text-texto3 text-lg font-prompt">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div className="flex h-1/6 w-2/6 rounded-[3rem] shadow-Card">
                <img className="w" src={'/bichectomia.svg'}/>
                <div className="w-1/4">
                    <h2>Bichectomia</h2>
                    <p>Cirurgia para remoção das bolsas de gordura nasbochechas, visando afinar o rosto.</p>
                </div>
            </div>
        </div>
        </>
    )   
}