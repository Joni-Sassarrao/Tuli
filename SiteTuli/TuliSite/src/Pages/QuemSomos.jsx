import Footer from "../Componentes/Footer"

export default function QuemSomos() {
    return ( 
        <div>
            <img className="w-full" src={"/fundotela2.svg"}/>
            <div className="flex items-end justify-end mb-[200px]">
                <h1 className="absolute items-end right-[500px] w-[200px] top-[450px] font-josefin m-10 text-[#CA1C63] text-9xl">Quem Somos?</h1>
                <p className="absolute items-end right-[90px] w-[600px] text-[#333333] top-[800px] font-prompt m-10 text-3xl">Explore nossa essência e descubra como nosso app redefine a beleza e os procedimentos estéticos.</p>
                <p className="absolute items-end right-[90px] w-[600px] text-[#333333] top-[940px] font-prompt m-10 text-3xl">Role para baixo e conheça mais sobre nós.</p>
                <img className="absolute right-[450px] bottom-[200px]" src={"/tulilogorosa.svg"}/>
            </div>
            <div className="absolute bottom-[-1000px] w-full h-48 bg-[#CA1C63] opacity-60 mt-[-50px]"></div>
            <div className="flex justify-center">
                <img className="relative" src={"/mulherseringa.svg"}/>
                <div className="flex flex-col m-4 w-[1000px]">
                    <h1 className="font-josefin ml-20 mb-10 text-6xl text-[#CA1C63]">A Tuli Conecta Você Aos Melhores Profissionais de Estética</h1>
                    <p className="font-prompt ml-20 mb-10 text-3xl text-[#796E6C]">Na Tuli, entendemos a importância de cuidar da sua beleza e autoestima.</p>
                    <p className="font-prompt ml-20 text-3xl text-[#796E6C]">Nosso aplicativo conecta você aos melhores profissionais de estética, permitindo que você encontre e agende tratamentos de forma rápida e segura.</p>
                </div>
            </div>
            <div className="flex justify-center mt-[300px] mb-[200px]">
                <h1 className="font-josefin text-7xl text-[#CA1C63]">Nossa essência</h1>
            </div>
            <div className="flex justify-evenly mb-20">
                <div className="flex flex-col items-center">
                    <img className="mb-16" src={"/borboleta.svg"}/>
                    <h1 className="text-3xl font-josefin text-[#796E6C]">Renascimento</h1>
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-16" src={"/tulipa.svg"}/>
                    <h1 className="text-3xl font-josefin text-[#796E6C]">Leveza</h1>
                </div>
                <div className="flex flex-col items-center">
                    <img className="mb-16" src={"/coracao.svg"}/>
                    <h1 className="text-3xl font-josefin text-[#796E6C]">Amor-Próprio</h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}