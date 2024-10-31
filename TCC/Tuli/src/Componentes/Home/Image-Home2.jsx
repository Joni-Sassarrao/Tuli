export default function ImageHome2(){
    return(
        <>
        <div className="flex justify-center mb-28 max-desktop8:hidden">
            <img className="relative w-1/3 -mt-20 p-5" src={"/idosa.svg"}/>
            <div className="flex flex-col ml-[70px] p-14 w-[30rem] max-desktop3:ml-[50px] max-desktop3:-mt-10 max-desktop8:py-10 max-desktop8:justify-center max-desktop8:mt-2 max-desktop12:w-[55rem] max-desktop12:mt-14 max-desktop1.1:ml-[70px] max-desktop1.1:p-14 max-desktop1.1:w-[30rem] max-desktop1.1:-mt-5 max-desktop1.1:mb-10">
                <h1 className="text-texto2 mb-10 font-nunito font-bold text-4xl max-desktop5:text-3xl max-desktop5:mb-7 max-desktop12:text-7xl max-desktop12:mb-20 max-desktop1.1:text-4xl max-desktop1.1:mb-10">A beleza ao seu alcance</h1>
                <p className="font-prompt text-texto1 mb-8 text-lg max-desktop5:text-base max-desktop8:text-sm max-desktop12:text-3xl max-desktop12:mb-16 max-desktop1.1:mb-8 max-desktop1.1:text-lg">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                <p className="font-prompt text-texto1 text-lg max-desktop5:text-base max-desktop8:text-sm max-desktop12:text-3xl max-desktop1.1:text-lg">Para melhorar sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
            </div>
        </div>
        <div className="p-5 desktop8:hidden">
            <div className="flex flex-col max-desktop8:py-10 max-desktop8:justify-center max-desktop8:mt-2">
                <h1 className="flex justify-center text-texto2 mb-10 font-nunito font-bold text-3xl max-desktop11:text-center">A beleza ao seu alcance</h1>
                <div className="px-10">
                    <p className="mb-8 font-prompt text-texto1 text-base text-center">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                    <p className="font-prompt text-texto1 text-base text-center">Para melhorar sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
                </div>
            </div>
        </div>
        </>
    )
}