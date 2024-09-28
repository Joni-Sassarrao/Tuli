import ContainerBeneficios from "../Componentes/Beneficios/Container-Beneficios"
import ContainerBeneficios2 from "../Componentes/Beneficios/Container-Beneficios2"
import ContainerBeneficios3 from "../Componentes/Beneficios/Container-Beneficios3"
import ContainerBeneficios4 from "../Componentes/Beneficios/Container-Beneficios4"
import InsideContainerBeneficios from "../Componentes/Beneficios/Inside-Container-Beneficios"
import InsideContainerBeneficios2 from "../Componentes/Beneficios/Inside-Container-Beneficios2"
import InsideContainerBeneficios4 from "../Componentes/Beneficios/Inside-Container-Beneficios4"
import InsideContainerBeneficios42 from "../Componentes/Beneficios/Inside-Container-42"

export default function Beneficios(){
    return(
        <>
        <ContainerBeneficios>
        <InsideContainerBeneficios/>
        </ContainerBeneficios>
        <ContainerBeneficios2>
        <InsideContainerBeneficios2/>
        </ContainerBeneficios2>
        <ContainerBeneficios3>
        <ContainerBeneficios4>
        <InsideContainerBeneficios4/>
        </ContainerBeneficios4>
        <InsideContainerBeneficios42/>
        </ContainerBeneficios3>
        </>
    )
}