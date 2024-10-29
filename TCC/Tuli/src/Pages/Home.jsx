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
import InsideContainerHome2Media from "../Componentes/Home/Inside-Container-Home2Media"
import InsideContainerHome3Media from "../Componentes/Home/Inside-Container-Home3Media"
import InsideContainerHome21Media from "../Componentes/Home/Inside-Container-Home2.1Media"
import InsideContainer31Media from "../Componentes/Home/Inside-Container-Home3.1Media"

export default function Home(){
    return(
        <>
        <ImageHome>
        <InsideImageHome/>
        </ImageHome>
        <div className="bg-fundo1 h-[180px] w-auto max-desktop8:h-[100px]"></div>
        <ImageHome2/>
        <ContainerHome>
        <InsideContainerHome/>
        </ContainerHome>
        <h1 className="flex justify-center font-nunito font-semibold text-texto2 text-6xl mt-36 mb-20 max-desktop5:text-5xl max-desktop6:text-4xl max-desktop7.1:text-center max-desktop9:mb-5">Nossos serviços especializados incluem:</h1>
        <ContainerHome2>
        <InsideContainerHome2/>
        </ContainerHome2>
        <InsideContainerHome2Media/>
        <InsideContainerHome21Media/>
        <ContainerHome3>
        <InsideContainerHome3/>
        </ContainerHome3>
        <InsideContainerHome3Media/>
        <InsideContainer31Media/>
        <div className="flex justify-center mt-10 py-10 desktop5.1:hidden">
            <div className="flex justify-center h-[7px] bg-fundo4 w-[80%] rounded-2xl"></div>
        </div>
        <ImageHome3/>
        </>
    )   
}
