export default function ImageQuemSomos(){
    return(
        <>
        <div className="relative flex -mb-20 bg-gradient-to-r from-texto2 bg-fundo3 max-desktop11:h-[270px]">
            <div className="flex mt-2 max-desktop8:mb-5 max-desktop9:mb-10">
                <img className="w-[25rem] max-desktop5:w-[20rem] max-desktop8:w-[15rem] max-desktop9:hidden" src="/mulher.svg"/>
                <div className="grid grid-cols-1 justify-items-end w-screen pr-10 max-desktop5:-mt-10 max-desktop8:-mt-14 max-desktop9:justify-items-start max-desktop9:px-5">
                    <h1 className="font-nunito font-bold text-texto1 text-6xl mt-20 max-desktop5:text-5xl max-desktop8:text-4xl max-desktop9:mb-5 max-desktop9:text-black max-desktop11:text-2xl">QUEM SOMOS</h1>
                    <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium max-desktop5:text-xl max-desktop5:w-[29rem] max-desktop8:text-base max-desktop8:w-[22rem] max-desktop9:mb-5 max-desktop9:text-start max-desktop9:text-black max-desktop11:text-sm max-desktop11:w-[18rem]">Explore nossa essência e descubra como nosso APP redefine a beleza e os procedimentos estéticos.</p>
                    <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium mb-14 max-desktop5:text-xl max-desktop5:w-[29rem] max-desktop8:text-base max-desktop8:w-[22rem] max-desktop9:text-start max-desktop9:text-black max-desktop11:text-sm max-desktop11:w-[18rem]">Role para baixo e conheça mais sobre nós.</p>
                </div>
            </div>
        </div>
        </>
    )
}