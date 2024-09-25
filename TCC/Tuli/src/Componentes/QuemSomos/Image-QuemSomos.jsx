export default function ImageQuemSomos(){
    return(
        <>
        <div className="relative flex -mb-20 bg-gradient-to-r from-texto2 o bg-fundo3">
            <div className="flex mt-10">
                <img className="w-[25rem]" src="/mulher.svg"/>
                <div className="grid grid-cols-1 justify-items-end w-screen pr-10">
                    <h1 className="font-nunito font-bold text-texto1 text-6xl mt-20">QUEM SOMOS</h1>
                    <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium">Explore nossa essência e descubra como nosso APP redefine a beleza e os procedimentos estéticos.</p>
                    <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium">Role para baixo e conheça mais sobre nós.</p>
                </div>
            </div>
        </div>
        </>
    )
}