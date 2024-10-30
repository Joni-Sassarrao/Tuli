export default function ImageHome3(){
    return(
        <>
        <div className="flex max-desktop5.1:justify-center max-desktop5.1:mb-20 max-desktop9:hidden">
            <img className="w-screen max-desktop5.1:w-0" src={'/grupotuli.svg'}/>
            <div className="absolute flex flex-col right-20 mt-[23rem] w-[30rem] max-desktop2:mt-[20rem] max-[1250px]:mt-[19rem] max-desktop1:py-[2rem] max-desktop1:right-[3rem] max-desktop4:mt-[17rem] max-desktop4:right-10 max-desktop5:right-2 max-desktop5:mt-[16rem] max-desktop5.1:relative max-desktop5.1:mt-1 max-desktop5.1:px-10 max-desktop5.1:py-10 max-desktop12:py-[20rem] max-desktop12:right-[6rem] max-desktop12:w-[70rem] max-desktop13:py-[17rem] max-desktop13:right-[7rem] max-desktop13:w-[50rem] max-desktop14:py-[7rem] max-desktop14:right-[7rem] max-desktop14:w-[40rem] max-desktop1.1:right-20 max-desktop1.1:py-[0rem] max-desktop1.1:w-[30rem]">
                <h1 className="font-nunito font-semibold text-texto2 text-6xl mb-24 max-desktop4:text-5xl max-desktop7.1:text-3xl max-desktop12:text-9xl max-desktop13:text-7xl max-desktop1.1:text-6xl max-desktop1.1:mb-24">Faça o download do nosso App!</h1>
                <h2 className="font-nunito font-medium text-texto1 text-4xl max-desktop4:text-3xl max-desktop7.1:text-xl max-desktop12:text-6xl max-desktop1.1:text-4xl max-desktop13:text-4xl">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
            </div>
            <div className="desktop5.1:hidden">
                <button className="bg-red-600 p-5 rounded-2xl mt-[7rem] w-[15rem] active:bg-red-700 shadow-Botao-Dw active:shadow-Botao-DwAC duration-200 max-desktop7.1:w-[10rem] max-desktop7.1:mr-10"> 
                    <a className="text-3xl active:text-white font-nunito font-bold max-desktop7.1:text-xl" href="https://tuli-eight.vercel.app/">
                        Clique aqui para fazer o Download!
                    </a>
                </button>
            </div>
        </div>
        <div className="px-10 desktop9:hidden">
            <h1 className="font-nunito font-semibold text-texto2 text-3xl text-center">Faça o download do nosso App!</h1>
            <div className="flex justify-center py-10">
                <button className="bg-red-600 p-5 rounded-2xl w-[15rem] active:bg-red-700 shadow-Botao-Dw active:shadow-Botao-DwAC duration-200"> 
                    <a className="text-3xl active:text-white font-nunito font-bold max-desktop7.1:text-xl" href="https://tuli-eight.vercel.app/">
                        Clique aqui para fazer o Download!
                    </a>
                </button>
            </div>
            <h2 className="font-nunito font-medium text-texto1 text-xl mb-10 max-desktop11:text-base">Baixe o app e agende seus tratamentos estéticos com facilidade.</h2>
        </div>
        </>
    )
}