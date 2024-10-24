export default function ImageHome3(){
    return(
        <>
        <div className="flex max-desktop5.1:justify-center max-desktop5.1:mb-20">
            <img className="w-screen max-desktop5.1:w-0" src={'/grupotuli.svg'}/>
            <div className="absolute flex flex-col right-20 mt-[23rem] w-[30rem] max-desktop2:mt-[20rem] max-[1250px]:mt-[19rem] max-desktop4:mt-[17rem] max-desktop4:right-10 max-desktop5:right-2 max-desktop5:mt-[16rem] max-desktop5.1:relative max-desktop5.1:mt-1 max-desktop5.1:px-10 max-desktop5.1:py-10">
                <h1 className="font-nunito font-semibold text-texto2 text-6xl mb-24 max-desktop4:text-5xl">Faça o download do nosso App!</h1>
                <h2 className="font-nunito font-medium text-texto1 text-4xl max-desktop4:text-3xl">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
            </div>
            <div className="desktop5.1:hidden">
                <button className="bg-red-600 p-5 rounded-2xl mt-[7rem] w-[15rem] active:bg-red-700 shadow-Botao-Dw active:shadow-Botao-DwAC duration-200"> 
                    <a className="text-3xl active:text-white font-nunito" href="https://tuli-eight.vercel.app/">
                        Clique aqui para fazer o Download!
                    </a>
                </button>
            </div>
        </div>
        </>
    )
}