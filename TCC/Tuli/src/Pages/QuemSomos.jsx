import ImageQuemSomos from "../Componentes/QuemSomos/Image-QuemSomos"
import ImageQuemSomos2 from "../Componentes/QuemSomos/Image-QuemSomos2"
import ContainerQuemSomos from "../Componentes/QuemSomos/Container-QuemSomos"
import InsideContainerQuemSomos from "../Componentes/QuemSomos/Inside-Container-QuemSomos"

export default function QuemSomos(){
    return(
        <>
        <ImageQuemSomos/>
        <img className="w-screen absolute max-desktop11:mt-5" src={'curva.svg'}/>
        <div className="relative h-64 bg-gradient-to-r from-[69%] from-fundo1 to-white top-[70rem] max-desktop5:top-[48rem] max-desktop8:top-[35rem] max-desktop8:h-44 max-desktop9:top-[30rem] max-desktop9:h-28 max-desktop11:h-20"></div>
        <ImageQuemSomos2/>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-72 mb-32 max-desktop5:text-5xl max-desktop8:mt-64 max-desktop8:mb-20 max-desktop9:text-3xl max-desktop9:mt-48 max-desktop11:text-2xl">Pilares do nosso Cuidado</h1>
        <ContainerQuemSomos>
        <InsideContainerQuemSomos/>
        </ContainerQuemSomos>
        </> 
    )
}