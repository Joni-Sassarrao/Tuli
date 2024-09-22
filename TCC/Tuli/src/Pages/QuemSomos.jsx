export default function QuemSomos(){
    return(
        <>
        <div className="flex p-10 mt-10">
            <img src=""/>
            <div className="grid grid-cols-1 justify-items-end w-screen">
                <h1 className="font-nunito font-bold text-texto1 text-6xl mb-16">QUEM SOMOS</h1>
                <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium mb-10">Explore nossa essência e descubra como nosso APP redefine a beleza e os procedimentos estéticos.</p>
                <p className="font-prompt text-texto1 text-2xl w-[35rem] text-end font-medium">Role para baixo e conheça mais sobre nós.</p>
            </div>
        </div>
        <img className="w-screen absolute" src={'curva.svg'}/>
        <div className="relative h-64 bg-gradient-to-r from-fundo2 to-white top-[70rem]"></div>
        <div className="flex justify-around relative mt-24">
            <img className="w-[30rem]" src={'mulherseringa.svg'}/>
            <div className="mt-24">
                <h1 className="font-nunito font-semibold text-texto2 text-6xl w-[42rem] mb-20">A Tuli Conecta Você Aos Melhores Profissionais De Estética</h1>
                <p className="font-prompt text-texto4 text-3xl w-[45rem] mb-16">Na Tuli, entendemos a importância de cuidar da sua beleza e autoestima.</p>
                <p className="font-prompt text-texto4 text-3xl w-[41rem]">Nosso aplicativo conecta você aos melhores profissionais de estética, permitindo que você encontre e agende tratamentos de forma rápida e segura.</p>
            </div>
        </div>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-72 mb-32">Pilares do nosso Cuidado</h1>
        <div className="grid grid-cols-3 justify-items-center mb-24">
            <div>
                <img src={'borboleta.svg'}/>
                <h1 className="flex justify-center mt-10 font-nunito text-texto1 text-3xl">Renascimento</h1>
            </div>
            <div>
                <img src="flor.svg"/>
                <h1 className="flex justify-center mt-[1.4rem] font-nunito text-texto1 text-3xl">Leveza</h1>
            </div>
            <div>
                <img src="2coracoes.svg"/>
                <h1 className="flex justify-center mt-10 font-nunito text-texto1 text-3xl">Amor-Próprio</h1>
            </div>
        </div>
        </> 
    )
}