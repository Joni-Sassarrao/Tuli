export default function Home() {
    return (
        <>
        <div>
            <img className="w-full" src={"/TuliFundo.png"}/>
            <h1 className="absolute bottom-1 font-josefin m-10 text-white text-6xl">A BELEZA QUE VOCÊ DESEJA, COM A SEGURANÇA QUE VOCÊ MERECE.</h1>
        </div>
        <div className="flex justify-center mt-40">
            <img src={'/mulherskincare.svg'} alt="" />
            <div className="ml-10 w-[600px]">
                <h1 className="text-2xl w-48 font-josefin text-[#D688A2] mb-8">A Beleza Ao Seu Alcance</h1>
                <div className="text-lg font-prompt text-[#796E6C]">
                    <p className="mb-4">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                    <p>Para melhorar sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
                </div>
            </div>
        </div>
        <div className="flex mt-48">
            <img src={"/grupo1.svg"}/>
            <p>Encontre o melhor profissional para você.</p>
            <img src={"/grupo2.svg"}/>
            <p>Agende e gerencie suas consultas.</p>
            <img src={"/grupo3.svg"}/>
            <p>Segurança e confiabilidade.</p>
            <img src={"/grupo4.svg"}/>
            <p>vazio</p>
        </div>
        </>
    )
}