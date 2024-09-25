import ImageHome from "../Componentes/Home/Image-Home"
import ImageHome2 from "../Componentes/Home/Image-Home2"
import ImageHome3 from "../Componentes/Home/Image-Home3"
import InsideImageHome from "../Componentes/Home/Inside-Image-Home"
import ContainerHome from "../Componentes/Home/Container-Home"
import ContainerHome2 from "../Componentes/Home/Container-Home2"
import ContainerHome3 from "../Componentes/Home/Container-Home3"
import InsideContainerHome from "../Componentes/Home/Inside-Container-Home"
import InsideContainerHome2 from "../Componentes/Home/Inside-Container-Home2"
import InsideContainerHome3 from "../Componentes/Home/Inside-Container-Home3"

export default function Home(){
    return(
        <>
        <ImageHome>
        <InsideImageHome/>
        </ImageHome>
        <div className="bg-fundo1 h-[180px] w-auto"></div>
        <ImageHome2/>
        <ContainerHome>
        <InsideContainerHome/>
        </ContainerHome>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-36 mb-20">Nossos serviços especializados incluem:</h1>
        <ContainerHome2>
        <InsideContainerHome2/>
        </ContainerHome2>
        <ContainerHome3>
        <InsideContainerHome3/>
        </ContainerHome3>
        <ImageHome3/>
        </>
    )   
}
