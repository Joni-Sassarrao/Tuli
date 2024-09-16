export default function Footer(){
    return(
        <>
        <div className="bg-fundo1 w-screen h-[30rem]">
            <div className="p-20">
                <div className="flex">
                    <h1 className="text-white text-9xl font-josefin mr-5">tuli</h1>
                    <img className="w-[45px] mt-[-35px]" src={'Tuli.svg'}/>
                </div>
                <div className="flex justify-end -mt-[5rem]">
                    <div className="flex justify-between w-[12rem]">
                        <img src={'/whatsapp.svg'}/>
                        <img src={'/instagram.svg'}/>
                        <img src={'/linkedin.svg'}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}