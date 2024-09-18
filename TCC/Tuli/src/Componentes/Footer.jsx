export default function Footer(){
    return(
        <>
        <div className="bg-fundo1 w-screen h-[34rem]">
            <div className="p-20 -ml-9">
                <div className="flex">
                    <h1 className="text-white text-9xl font-josefin mr-5">tuli</h1>
                    <img className="w-[45px] mt-[-35px]" src={'Tuli.svg'}/>
                </div>
                <div className="flex justify-end -mt-[6rem]">
                    <div className="flex justify-between w-[22rem]">
                        <img className="w-1/5" src={'/whatsapp.svg'}/>
                        <img className="w-1/4" src={'/instagram.svg'}/>
                        <img className="w-1/4" src={'/linkedin.svg'}/>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center font-josefin text-white text-4xl">
                <div>
                    <h1>Limpeza de pele</h1>
                    <h1>Peeling químico</h1>
                    <h1>Microagulhamento facial</h1>
                    <h1>Tratamentos de estrias</h1>
                </div>
                <div>
                    <h1>Tratamento de microvasos</h1>
                    <h1>Eletrolifting</h1>
                    <h1>Drenagem linfática</h1>
                    <h1>Harmonização facial</h1>
                </div>
                <div>
                    <h1>Toxina Botulínica</h1>
                    <h1>Preenchimento Facial</h1>
                    <h1>Bichectomia</h1>
                    <h1>Preenchimento Labial</h1>
                    <h1>Outros...</h1>
                </div>
            </div>
            <h1 className="flex justify-center font-josefin text-white text-2xl mt-4">www.tuli.com.br © 2024</h1>
        </div>
        </>
    )
}