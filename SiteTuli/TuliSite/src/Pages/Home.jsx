export default function Home() {
    return (
        <>
        <div>
            <img className="w-full" src={"/TuliFundo.png"}/>
            <h1 className="absolute bottom-1 font-josefin m-10 text-white text-6xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
        </div>
        <div className="flex justify-center mt-40">
            <img src={'/mulherskincare.svg'} alt="" />
            <div className="ml-10 w-[600px]">
                <h1 className="text-2xl w-48 font-josefin text-[#D688A2] mb-8">A Beleza Ao Seu Alcance</h1>
                <div className="text-lg font-prompt text-[#796E6C]">
                    <p className="mb-4">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                    <p>Para melhorar sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center mb-40">
            <div className="grid grid-cols-1 gap-4 mt-48">
                <div className="flex items-center mb-10">
                    <img src={"/grupo1.svg"}/>
                    <p className="ml-14 text-4xl font-josefin">Encontre o melhor profissional para você.</p>
                </div>
                <div className="flex items-center mb-10">
                    <img src={"/grupo2.svg"}/>
                    <p className="ml-14 text-4xl font-josefin">Agende e gerencie suas consultas.</p>
                </div>
                <div className="flex items-center mb-10">
                    <img src={"/grupo3.svg"}/>
                    <p className="ml-14 text-4xl font-josefin">Segurança e confiabilidade.</p>
                </div>
                <div className="flex items-center">
                    <img src={"/grupo4.svg"}/>
                    <p className="ml-14 text-4xl font-josefin"></p>
                </div>
            </div>
        </div>
        <h1 className="flex justify-center text-6xl text-[#D688A2] font-josefin mb-20">Nossos serviços especializados incluem:</h1>
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
                    <img className="w-[200px] ml-[-2px]" src={"/mulher2.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt">
                        <h1 className="text-xl mr-[25px] text-gray-900 mb-6">Bichectomia</h1>
                        <p className="text-[#333333] ml-[-10px] text-[17px]">Cirurgia para remoção das bolsas de gordura nas bochechas, visando afinar o rosto.</p>
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
                    <img className="w-[136px h-[231px]" src={"/mulher5.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt ml-[12px]">
                        <h1 className="text-xl mb-4 mr-[40px] text-gray-900">Microagulhamento</h1>
                        <p className="text-base text-[#333333]">Utiliza agulhas finas para estimular a produção de colágeno na pele.</p>
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
                    <img className="w-[211px] ml-[-2px] h-[291px]" src={"/mulher8.svg"}/>
                    <div className="flex flex-col items-end m-4 font-prompt w-[130px]">
                        <h1 className="text-xl mr-[5px] text-gray-900 mb-6">Lipoaspiração</h1>
                        <p className="text-[#333333] ml-[-10px] text-[17px]">Em cirurgia, emove excesso de gordura localizada através de sucção.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-ShadowCard w-[353px] h-[290px] rounded-3xl ml-10">
                    <div className="w-[133px] m-4 font-prompt">
                        <h1 className="text-xl text-gray-900 mb-2">Microagulhamento Capilar</h1>
                        <p className="text-[#333333] text-[18px]">Estimulação do crescimento capilar por meio de agulhas pequenas.</p>
                    </div>
                    <div className="flex justify-end items-center w-full">
                        <img className="w-[207px] h-[290px] mr-[-1px]" src={"/mulher9.svg"}/>
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
            <div className="absolute font-josefin ">
                <div>
                    <h1 className="mt-14 text-6xl text-white">FAÇA DOWNLOAD</h1>
                </div>
                <div className="flex justify-center mt-16">
                    <button className="hover:shadow-ShadowButton hover:duration-100 hover:bg-[#a11f5a] p-4 w-48 bg-[#B22D69] text-white text-3xl rounded-md">Baixar</button>
                </div>
            </div>
        </div>
        </>
    )
}