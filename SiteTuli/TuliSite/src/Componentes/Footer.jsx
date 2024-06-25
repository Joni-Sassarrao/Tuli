export default function Footer(){
    return(
        <div className="bg-[#F7F6F2]">
            <div className="flex justify-between">
                <div className="flex m-10">
                    <h1 className="text-6xl mr-5 font-josefin text-[#796E6C]">tuli</h1>
                    <img className="w-6 mt-[-24px]" src={"/tulilogo2.svg"}/>
                </div>
                <div className="flex m-10">
                    <div className="flex flex-col mt-[-8px] mr-[-181px]">
                        <div className="w-44 border-b-2 border-[#796E6C]"></div>
                    </div>
                    <img className="mr-5" src={"/whatsapp.svg"}/>
                    <img className="mr-5"src={"/instagram.svg"}/>
                    <img className="mr-5" src={"/linkedin.svg"}/>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="flex flex-col font-josefin text-2xl text-[#796E6C]">
                    <h1>Limpeza de pele</h1>
                    <h1>Peeling químico</h1>
                    <h1>Microagulhamento facil</h1>
                    <h1>Tratamentos de estrias</h1>
                </div>
                <div className="flex flex-col font-josefin text-2xl text-[#796E6C]">
                    <h1>Tratamento de microvasos do kaneto</h1>
                    <h1>Eletrolifting</h1>
                    <h1>Dreanagem linfática</h1>
                    <h1>Harmonização facil</h1>
                </div>
                <div className="flex flex-col font-josefin text-2xl text-[#796E6C]">
                    <h1>Toxina Botulínica</h1>
                    <h1>Preenchimento Facil</h1>
                    <h1>Bichectomia</h1>
                    <h1>Preenchimento Labil</h1>
                    <h1>outros...</h1>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <span className="font-josefin text-[#796E6C] text-xl">www.tuli.com.br © 2024</span>
            </div>
        </div>
    )
}