export default function InsideContainerBeneficios(){
    return(
        <>
        <div className="flex">
            <img className="max-desktop5:w-[20rem] max-desktop8:w-[18rem] max-desktop9:hidden" src={'/mulherbeneficio.svg'}/>
            <div className="flex justify-center w-screen items-center">
                <h1 className="font-nunito font-semibold text-texto1 text-8xl w-[36rem] max-desktop5:text-6xl max-desktop5:w-[26rem] max-desktop5:ml-[15rem] max-desktop8:ml-[5rem] max-desktop8:w-[25rem] max-desktop9:text-5xl max-desktop9:py-16 max-desktop9:text-black max-desktop9:ml-0 max-desktop9:w-[18rem] max-desktop10:text-4xl max-desktop10:w-[14rem]">
                    BENEFÍCIOS DE SER 
                    <span className="text-fundo4 max-desktop9:text-texto2"> TULI</span>
                </h1>
            </div>
        </div>
        </>
    )
}