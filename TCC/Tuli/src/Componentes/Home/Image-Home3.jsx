export default function ImageHome3(){
    return(
        <>
        <div className="flex">
            <img className="w-screen" src={'/grupotuli.svg'}/>
            <div className="absolute flex flex-col right-20 mt-[23rem] w-[30rem] max-desktop2:mt-[20rem] max-[1250px]:mt-[19rem] max-desktop4:mt-[17rem] max-desktop4:right-10">
                <h1 className="font-nunito font-semibold text-texto2 text-6xl mb-24 max-desktop4:text-5xl">Faça o download do nosso App!</h1>
                <h2 className="font-nunito font-medium text-texto1 text-4xl max-desktop4:text-3xl">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
            </div>
        </div>
        </>
    )
}