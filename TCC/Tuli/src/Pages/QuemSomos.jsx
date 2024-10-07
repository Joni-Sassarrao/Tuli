import ImageQuemSomos from "../Componentes/QuemSomos/Image-QuemSomos"
import ImageQuemSomos2 from "../Componentes/QuemSomos/Image-QuemSomos2"
import ContainerQuemSomos from "../Componentes/QuemSomos/Container-QuemSomos"
import InsideContainerQuemSomos from "../Componentes/QuemSomos/Inside-Container-QuemSomos"

export default function QuemSomos(){
    return(
        <>
        <ImageQuemSomos/>
        <img className="w-screen absolute" src={'curva.svg'}/>
        <div className="relative h-64 bg-gradient-to-r from-[69%] from-fundo1 to-white top-[70rem]"></div>
        <ImageQuemSomos2/>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-72 mb-32">Pilares do nosso Cuidado</h1>
        <ContainerQuemSomos>
        <InsideContainerQuemSomos/>
        </ContainerQuemSomos>
        </> 
    )
}