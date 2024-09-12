import Footer from "../Componentes/Footer"

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
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-36 mb-20">Nossos serviços especializados incluem:</h1>
        <div className="flex justify-center mb-10">
            <div className="w-[350px] h-[450px] rounded-3xl shadow-Card">
                <img className="w-auto" src={'/toxina.svg'}/>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 text-xl font-prompt mb-5">Toxina Botulínica</h2>
                    <p className="text-texto3 text-lg font-prompt">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div className="flex flex-col justify-between ml-10">
                <div className="flex w-[420px] rounded-[1.4rem] shadow-Card">
                    <div className="flex justify-start w-full">
                        <img className="w-auto" src={'/bichectomia.svg'}/>
                    </div>
                    <div className="p-5">
                        <h2 className="text-texto2 text-xl font-prompt mb-5">Bichectomia</h2>
                        <p className="text-texto3 text-lg font-prompt">Cirurgia para remoção das bolsas de gordura nasbochechas, visando afinar o rosto.</p>
                    </div>
                </div>
                <div className="flex w-[420px] rounded-[1.4rem] shadow-Card">
                    <div className="p-5">
                        <h2 className="text-texto2 text-xl font-prompt mb-5">Preenchimento Labial</h2>
                        <p className="text-texto3 text-lg font-prompt">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                    </div>
                    <div className="flex justify-end w-full">
                        <img className="w-auto" src={'/labial.svg'}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between ml-10">
                <div className="w-[320px] rounded-[1.4rem] shadow-Card">
                    <img className="w-auto" src={'peeling.svg'}/>
                    <div className="p-3">
                        <h2 className="text-texto2 font-promtp text-xl mb-4">Peeling Químico</h2>
                        <p className="text-texto3 font-prompt text-lg">Usa ácidos para esfoliar a pele, melhorando a textura e reduzindo imperfeições.</p>
                    </div>
                </div>
                <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card">
                    <div className="flex justify-start w-full">
                        <img className="w-auto" src={'/microagulhamento.svg'}/>
                    </div>
                    <div className="mr-2">
                        <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px]">Microagulhamento</h2>
                        <p className="text-texto3 font-prompt text-lg mt-1 w-[220px]">Utiliza agulhas finas para estimular a produção de colágeno na pele</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-10">
            <div className="flex flex-col justify-between mr-10">
                <div className="w-[320px] rounded-[1.4rem] shadow-Card">
                    <img className="w-auto" src={'/drenagem.svg'}/>
                    <div className="p-3">
                        <h2 className="text-texto2 font-prompt text-xl mb-4">Drenagem linfática</h2>
                        <p>Massagem especializada que estimula o sistema linfático para reduzir inchaços e melhorar a circulação de fluidos corporais.</p>
                    </div>
                </div>
                <div className="flex h-[140px] w-[320px] rounded-[1.4rem] shadow-Card">
                    <div className="flex justify-start w-full">
                        <img className="w-auto" src={'/mamoplastia.svg'}/>
                    </div>
                    <div className="mr-2">
                        <h2 className="text-texto2 font-prompt text-xl mt-3 w-[210px]">Mamoplastia</h2>
                        <p className="text-texto3 font-prompt text-lg mt-1 w-[220px]">Cirurgia para alterar o tamanho, forma ou posição das mamas.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between mr-10">
                <div className="flex w-[420px] rounded-[1.4rem] shadow-Card">
                    <div className="flex justify-start w-full">
                        <img className="w-auto" src={'/lipospiracao.svg'}/>
                    </div>
                    <div className="p-5">
                        <h2 className="text-texto2 font-prompt text-xl mb-5">Lipoaspiração</h2>
                        <p className="text-texto3 font-prompt text-lg">Em cirurgia, emove excesso de gordura localizada através de sucção.</p>
                    </div>
                </div>
                <div className="flex w-[420px] rounded-[1.4rem] shadow-Card">
                    <div className="p-5">
                        <h2 className="text-texto2 font-prompt text-xl mb-5">Microagulhamento Capilar</h2>
                        <p className="text-texto3 font-prompt text-lg">Estimulação do crescimento capilar por meio de agulhas pequenas.</p>
                    </div>
                    <div className="flex justify-end">
                        <img className="w-[303px]" src={'/capilar.svg'}/>
                    </div>
                </div>
            </div>
            <div className="w-[350px] h-[450px] rounded-3xl shadow-Card">
                <img className="w-auto" src={'/limpeza.svg'}/>
                <div className="flex flex-col justify-center p-5">
                    <h2 className="text-texto2 font-prompt text-xl mb-5">Limpeza de Pele </h2>
                    <p className="text-texto3 font-prompt text-lg">Procedimento estético para remover impurezas da pele e promover sua revitalização.</p>
                </div>
            </div>
        </div>
        <div className="flex">
            <div>
                <img className="w-full absolute" src={'/rosa.svg'}/>
                <img className="relative w-[65rem]" src={'/maocelular.svg'}/>
            </div>
            <div className="absolute flex flex-col right-44 mt-[25rem] w-[50rem]">
                <h1 className="font-nunito text-texto2 text-8xl mb-24">Faça o download do nosso App!</h1>
                <h2 className="font-nunito text-texto1 text-6xl ml-16">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
            </div>
        </div>
        <Footer/>
        </>
    )   
}