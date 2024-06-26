export default function Footer(){
    return(
        <div className="bg-white">
            <div className="flex justify-between">
                <div className="flex m-10">
                    <h1 className="text-6xl mr-5 font-josefin text-[#CA1C63]">tuli</h1>
                    <img className="w-6 mt-[-24px]" src={"/tulilogo2.svg"}/>
                </div>
                <div className="flex m-11">
                    <div className="flex flex-col mt-[-15px] mr-[-245px]">
                        <div className="w-[246px] border-b-2 border-[#CA1C63]"></div>
                    </div>
                    <img className="mr-5" src={"/whatsapp.svg"}/>
                    <img className="mr-5"src={"/instagram.svg"}/>
                    <img className="mr-5" src={"/linkedin.svg"}/>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col font-josefin text-2xl text-[#CA1C63]">
                    <h1>Limpeza de pele</h1>
                    <h1>Peeling químico</h1>
                    <h1>Microagulhamento facil</h1>
                    <h1>Tratamentos de estrias</h1>
                </div>
                <div className="flex flex-col font-josefin text-2xl text-[#CA1C63]">
                    <h1>Tratamento de microvasos do kaneto</h1>
                    <h1>Eletrolifting</h1>
                    <h1>Dreanagem linfática</h1>
                    <h1>Harmonização facil</h1>
                </div>
                <div className="flex flex-col font-josefin text-2xl text-[#CA1C63]">
                    <h1>Toxina Botulínica</h1>
                    <h1>Preenchimento Facil</h1>
                    <h1>Bichectomia</h1>
                    <h1>Preenchimento Labil</h1>
                    <h1>outros...</h1>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <span className="font-josefin text-[#CA1C63] text-xl">www.tuli.com.br © 2024</span>
            </div>
        </div>
    )
}