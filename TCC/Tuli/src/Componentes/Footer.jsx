export default function Footer(){
    return(
        <>
        <div className="bg-fundo1 w-screen">
            <div className="flex justify-between px-20 py-10 -ml-9 max-desktop8:py-5 max-desktop11:px-[3.4rem]">
                <div className="flex">
                    <h1 className="text-white text-5xl font-josefin mr-5 max-desktop8:text-3xl max-desktop11:mr-2">tuli</h1>
                    <img className="w-[1.5rem] -mt-[1.5rem] max-desktop8:w-[1rem] max-desktop8:-mt-[1.2rem]" src={'/Tuli.svg'}/>
                </div>
                <div className="flex justify-end">
                    <div className="flex justify-between w-[10rem] max-desktop8:w-[7rem]">
                        <img className="w-[1.6rem] max-desktop8:w-[1rem]" src={'/whatsapp.svg'}/>
                        <img className="w-[2rem] max-desktop8:w-[1.4rem]" src={'/instagram.svg'}/>
                        <img className="w-[2rem] max-desktop8:w-[1.4rem]" src={'/linkedin.svg'}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-between font-josefin text-white text-2xl px-12 max-desktop8:text-[1.1rem] max-desktop9:text-sm max-desktop9:gap-6 max-desktop11:gap-3 max-desktop11:px-5">
                <div>
                    <h1>Limpeza de pele</h1>
                    <h1>Peeling químico</h1>
                    <h1 className="max-desktop9:hidden">Microagulhamento facial</h1>
                    <h1 className="max-desktop9:hidden">Tratamentos de estrias</h1>
                </div>
                <div>
                    <h1>Tratamento de microvasos</h1>
                    <h1>Eletrolifting</h1>
                    <h1 className="max-desktop9:hidden">Drenagem linfática</h1>
                    <h1 className="max-desktop9:hidden">Harmonização facial</h1>
                </div>
                <div>
                    <h1>Toxina Botulínica</h1>
                    <h1>Preenchimento Facial</h1>
                    <h1 className="max-desktop9:hidden">Bichectomia</h1>
                    <h1 className="max-desktop9:hidden">Preenchimento Labial</h1>
                    <h1>Outros...</h1>
                </div>
            </div>
            <h1 className="flex justify-center font-josefin text-white text-sm mt-4 max-desktop9:text-xs">www.tuli.com.br © 2024</h1>
        </div>
        </>
    )
}