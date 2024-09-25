export default function InsideContainerEspecialista(){
    return(
        <>
            <div className="flex justify-between">
                <div>
                    <div className="flex flex-col p-10 mt-44">
                        <h1 className="text-texto1 font-nunito font-bold text-6xl w-[40rem]">QUER FAZER PARTE DA NOSSA EQUIPE?</h1>
                        <div className="flex justify-center w-[35rem] mt-20">
                            <img src={"/setarosa.svg"}/>
                        </div>
                    </div>
                </div>
                <div className="flex items-end">
                    <img className="w-4/5" src={'/medica.svg'}/>
                </div>
            </div>
        </>
    )
}