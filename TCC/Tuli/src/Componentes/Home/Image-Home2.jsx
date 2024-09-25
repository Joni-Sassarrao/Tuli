export default function ImageHome2(){
    return(
        <>
        <div className="flex mb-28">
            <img className="relative w-1/3 -mt-20 ml-60" src={"/idosa.svg"}/>
            <div className="flex flex-col ml-[70px] p-14 w-[30rem]">
                <h1 className="text-texto2 mb-10 font-nunito font-bold text-4xl">A beleza ao seu alcance</h1>
                <p className="mb-8 font-prompt text-texto1 text-lg">Em um único aplicativo, encontre o melhor profissional de estética, agende suas consultas de forma prática e receba cuidados personalizados.</p>
                <p className="font-prompt text-texto1 text-lg">Para melhor sua autoestima, junte-se a nós e descubra um novo jeito de cuidar da sua beleza.</p>
            </div>
        </div>
        </>
    )
}