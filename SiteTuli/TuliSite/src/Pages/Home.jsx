import Footer from "../Componentes/Footer"

export default function Home() {
    return (
        <>
        <div>
            <img className="w-full" src={"/fundotela1.svg"}/>
            <h1 className="absolute top-[600px] right-1 font-josefin m-10 w-[1200px] text-end text-[#CA1C63] text-6xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
            <img className="absolute bottom-[-70px] right-[500px]" src={"/seta2.svg"}/>
        </div>
        <div className="absolute w-full h-48 bg-[#CA1C63] opacity-60"></div>
        <div className="flex justify-center mt-40 mb-20">
            <img className="relative rounded-xl" src={'/mulherskincare.svg'} alt="" />
            <div className="ml-10 mt-10 w-[600px]">
                <h1 className="text-2xl w-48 font-josefin text-[#CA1C63] mb-8">A Beleza Ao Seu Alcance</h1>
                <div className="text-lg font-prompt text-[#796E6C]">
                    <p className="mb-4">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                    <p>Para melhorar sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
                </div>
            </div>
        </div>
        <div className="w-full bg-rosa mb-36">
            <div className="p-10 flex justify-evenly">
                <img src={"/grupo1.svg"}/>
                <img src={"/grupo2.svg"}/>
                <img src={"/grupo3.svg"}/>
                <img src={"/grupo4.svg"}/>
            </div>
        </div>
        <h1 className="flex justify-center text-6xl text-[#CA1C63] font-josefin mb-20">Nossos serviços especializados incluem:</h1>
        <div className="flex justify-center">
            <div className="bg-white shadow-ShadowCard w-[353px] h-[596px] rounded-3xl">
                <img className="mb-7 w-full" src="/mulher1.svg"/>
                <div className="m-4 font-prompt">
                    <h1 className="mb-7 text-xl text-gray-900">Toxina Botulínica</h1>
                    <p className="text-[#333333] text-lg">Reduz rugas e linhas de expressão ao relaxar temporariamente os músculos faciais.</p>
                </div>
            </div>
            <div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[290px] rounded-3xl ml-10 mb-4">
                    <img className="absolute w-[200px] h-[290px] ml-[-2px]" src={"/mulher2.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt">
                        <h1 className="text-xl text-gray-900 mb-6">Bichectomia</h1>
                        <p className="text-[#333333] w-[150px] ml-[178px] text-[16px]">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[290px] rounded-3xl ml-10">
                    <div className="w-[100px] m-4 font-prompt">
                        <h1 className="text-xl text-gray-900 mb-2">Preenchimento Labial</h1>
                        <p className="text-[#333333] text-[15px]">Aumenta o volume dos lábios usando substâncias como ácido hialurônico.</p>
                    </div>
                    <div className="flex justify-end items-center w-full">
                        <img className="w-[210px] h-[292px] mr-[-3px] absolute" src={"/mulher3.svg"}/>
                    </div>
                </div>
            </div>
            <div className="mb-10">
                <div className="bg-white shadow-ShadowCard w-[353px] h-[340px] rounded-3xl ml-10 mb-6">
                    <div className="flex items-start w-full">
                        <img className="w-full" src={"/mulher4.svg"}/>
                    </div>
                    <div className="m-4 font-prompt">
                        <h1 className="flex justify-center mb-2 text-xl text-gray-900">Peeling Químico</h1>
                        <p className="flex justify-center text-[#333333] text-base">Usa ácidos para esfoliar a pele, melhorando a textura e reduzindo imperfeições.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[230px] rounded-[30px] ml-10">
                    <img className="absolute w-[136px] h-[231px] ml-[-2px]" src={"/mulher5.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt">
                        <h1 className="text-[23px] mb-4 text-gray-900">Microagulhamento</h1>
                        <p className="text-base w-[200px] ml-[125px] text-[#333333]">Utiliza agulhas finas para estimular a produção de colágeno na pele.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-36">
            <div>
                <div className="bg-white shadow-ShadowCard w-[353px] h-[340px] rounded-3xl mb-6">
                    <div className="flex items-start w-full">
                        <img className="w-full" src={"/mulher6.svg"}/>
                    </div>
                    <div className="m-4 font-prompt">
                        <h1 className="flex justify-center mb-2 text-xl text-gray-900">Drenagem linfática</h1>
                        <p className="flex justify-center text-[#333333] text-base">Massagem especializada que estimula o sistema linfático para reduzir inchaços e melhorar a circulação de fluidos corporais.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[230px] rounded-[30px]">
                    <img className="w-[135px]" src={"/mulher7.svg"}/>
                    <div className="flex flex-col items-center m-4 font-prompt ml-[12px]">
                        <h1 className="text-xl mb-4 text-gray-900">Mamoplastia</h1>
                        <p className="text-base text-[#333333]">Cirurgia para alterar o tamanho, forma ou posição das mamas.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[290px] rounded-3xl ml-10 mb-4">
                    <img className="absolute w-[211px] ml-[-3px] h-[291px]" src={"/mulher8.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt">
                        <h1 className="text-[20px] text-gray-900 mt-10 mb-8">Lipoaspiração</h1>
                        <p className="text-[#333333] w-[160px] ml-[160px] text-[15px]">Em cirurgia, remove excesso de gordura localizada através de sucção.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[290px] rounded-3xl ml-10">
                    <div className="absolute w-[133px] m-4 ml-[10px] font-prompt">
                        <h1 className="text-[22px] text-gray-900 mb-2">Microagulhamento Capilar</h1>
                        <p className="text-[#333333] text-[18px]">Estimulação do crescimento capilar por meio de agulhas pequenas.</p>
                    </div>
                    <div className="flex justify-end items-center w-full">
                        <img className="w-[207px] h-[290px] mr-[-10px]" src={"/mulher9.svg"}/>
                    </div>
                </div>
            </div>
            <div className="ml-10">
                <div className="bg-white shadow-ShadowCard w-[353px] h-[596px] rounded-3xl">
                    <img className="mb-10 w-full" src="/mulher10.svg"/>
                    <div className="m-4 font-prompt flex flex-col">
                        <h1 className="mb-10 text-xl text-gray-900">Limpeza de Pele </h1>
                        <p className="text-[#333333] text-lg">Procedimento estético para remover impurezas da pele e promover sua revitalização..</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center shadow-md">
            <div>
                <div>
                    <img className="relative" src={"/retangulo.svg"}/>
                </div>
            </div>
            <div className="absolute font-josefin">
                <div>
                    <h1 className="mt-14 text-6xl text-white">FAÇA DOWNLOAD</h1>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="hover:shadow-ShadowButton hover:duration-100 hover:bg-[#a11f5a] p-4 w-48 bg-[#B22D69] text-white text-3xl rounded-md">Baixar</button>
                </div>
            </div>
        </div>
        <div className="bg-white h-[100px]"></div>
        <Footer/>
        </>
    )
}