export default function Footer(){
    return(
        <>
        <div className="bg-fundo1 w-screen">
            <div className="flex justify-between p-20 -ml-9">
                <div className="flex">
                    <h1 className="text-white text-5xl font-josefin mr-5">tuli</h1>
                    <img className="w-[1.5rem] -mt-[1.5rem]" src={'/Tuli.svg'}/>
                </div>
                <div className="flex justify-end">
                    <div className="flex justify-between w-[10rem]">
                        <img className="w-[1.6rem]" src={'/whatsapp.svg'}/>
                        <img className="w-[2rem]" src={'/instagram.svg'}/>
                        <img className="w-[2rem]" src={'/linkedin.svg'}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between font-josefin text-white text-2xl px-12">
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
            <h1 className="flex justify-center font-josefin text-white text-sm mt-4">www.tuli.com.br © 2024</h1>
        </div>
        </>
    )
}