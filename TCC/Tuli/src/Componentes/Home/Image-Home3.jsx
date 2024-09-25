export default function ImageHome3(){
    return(
        <>
        <div className="flex">
            <img className="w-screen" src={'/grupotuli.svg'}/>
            <div className="absolute flex flex-col right-20 mt-[23rem] w-[30rem]">
                <h1 className="font-nunito font-semibold text-texto2 text-6xl mb-24">Faça o download do nosso App!</h1>
                <h2 className="font-nunito font-medium text-texto1 text-4xl">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
            </div>
        </div>
        </>
    )
}