import Footer from "../Componentes/Footer"

export default function beneficios(){
    return(
        <>
        <div>
            <img className="w-full" src={"/fundotela5.svg"}/>
            <div className="flex justify-end">
                <h1 className="absolute mr-[50px] top-[550px] w-[800px] font-josefin text-9xl text-[#CA1C63]">BENEFÍCIOS DE SER TULI</h1>
            </div>
        </div>
        <div>
            <div className="flex justify-center">
                <h1 className="relative mt-[200px] font-josefin text-7xl text-[#CA1C63]">Planos de Fidelidade para Médicos</h1>
            </div>
            <div>
                <div className="relative top-[150px]">
                    <div className="p-4 m-4 flex justify-evenly">
                        <div className="flex items-start flex-col w-[400px] h-[400px] shadow-ShadowCard rounded-2xl bg-[#FBFBFB]">
                            <div className="m-4">
                                <h1 className="text-5xl text-[#CA1C63] mb-[50px]">Plano Bronze</h1>
                                <div className="m-5">
                                    <div className="text-2xl">
                                        <li>Divulgação básica;</li>
                                        <li>Agendamento simples;</li>
                                        <li>Alertas pré-consulta;</li>
                                        <li>Suporte técnico.</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start flex-col w-[400px] h-[400px] shadow-ShadowCard rounded-2xl bg-[#FBFBFB]">
                            <div className="m-5">
                                <h1 className="text-5xl text-[#CA1C63] mb-[50px]">Plano Prata</h1>
                                <div className="text-2xl">
                                    <li>Divulgação avançada;</li>
                                    <li>Agendamento direto;</li>
                                    <li>Notificações automáticas;</li>
                                    <li>Feedback e avaliações;</li>
                                    <li>Suporte preferencial;</li>
                                    <li>Consultoria de marketing;</li>
                                    <li>Relatórios mensais.</li>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start flex-col w-[490px] h-[400px] shadow-ShadowCard rounded-2xl bg-[#FBFBFB]">
                            <div className="m-5">
                                <h1 className="text-5xl text-[#CA1C63] mb-[50px]">Plano Ouro</h1>
                                <div className="text-2xl">
                                    <li>Máxima visibilidade;</li>
                                    <li>Agendamento automático;</li>
                                    <li>Análise de desempenho;</li>
                                    <li>Suporte VIP;</li>
                                    <li>Teleconsultas;</li>
                                    <li>Campanhas de marketing exclusivas.</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="top-[250px] relative w-full h-[200px] bg-rosa flex items-center justify-center">
                    <div>
                        <h1 className="text-6xl text-[#CA1C63] font-josefin">BENEFÍCIOS</h1>
                    </div>
                </div>
                <div className="relative">
                    <div>
                        <img className="absolute w-full" src={"/tulipafundo.svg"}/>
                    </div>
                    <div className="flex flex-row justify-center items-center h-[1200px]">
                        <div>
                            <div className="flex flex-col relative rounded-2xl text-center bg-cinza m-4">
                                <div className="m-4">
                                    <h1 className="text-3xl mb-10 font-josefin text-[#CA1C63]">MAIOR DIVULGAÇÃO</h1>
                                    <div className="flex justify-center mb-10">
                                        <img className="w-[100px]" src={"/compartilhar.svg"}/>
                                    </div>
                                    <div className="font-josefin text-[#796E6C] text-lg">
                                        <p>Visibilidade Garantida</p>
                                        <p>Campanhas de Marketing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col relative rounded-2xl text-center bg-cinza m-4">
                                <div className="m-4 w-[330px] h-[286px]">
                                    <h1 className="text-3xl mb-10 font-josefin text-[#CA1C63]">MARKETING MÉDICO EFICIENTE</h1>
                                    <div className="flex justify-center mb-6">
                                        <img className="w-[100px]" src={"/grafico.svg"}/>
                                    </div>
                                    <div className="font-josefin text-[#796E6C] text-lg">
                                        <p>Consultoria Especializada</p>
                                        <p>Análises e Relatórios</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col relative rounded-2xl text-center bg-cinza m-4">
                                <div className="m-4 w-[350px] h-[286px]">
                                    <h1 className="text-3xl w-[350px] mb-10 font-josefin text-[#CA1C63]">CONTATO DIRETO COM PACIENTES</h1>
                                    <div className="flex justify-center mb-6">
                                        <img className="w-[100px]" src={"/mensagem.svg"}/>
                                    </div>
                                    <div className="font-josefin text-[#796E6C] text-lg">
                                        <p>Sistema de Agendamento</p>
                                        <p>Alertas e Notificações</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-[-350px]">
                        <div className="w-[400px]">
                            <div className="flex flex-col relative rounded-2xl text-center bg-cinza m-4">
                                <div className="m-4 w-[350px] h-[286px]">
                                    <h1 className="text-3xl mb-10 font-josefin text-[#CA1C63]">GERENCIAMENTO SIMPLIFICADO</h1>
                                    <div className="flex justify-center mb-5">
                                        <img className="w-[100px]" src={"/calendario.svg"}/>
                                    </div>
                                    <div className="font-josefin text-[#796E6C] text-lg">
                                        <p>Controle Total</p>
                                        <p>Suporte Técnico</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[400px]">
                            <div className="flex flex-col relative rounded-2xl text-center bg-cinza m-4">
                                <div className="m-4 w-[350px] h-[286px]">
                                    <h1 className="text-3xl mb-10 font-josefin text-[#CA1C63]">TELECONSULTAS</h1>
                                    <div className="flex justify-center mb-20">
                                        <img className="w-[100px]" src={"/pccelular.svg"}/>
                                    </div>
                                    <div className="font-josefin text-[#796E6C] text-xl">
                                        <p>Flexibilidae</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="relative top-[300px]">
            <Footer/>
        </div>
        </>
    )
}