import { ScrollRestoration } from 'react-router-dom'
import ContainerEspecialista from "../Componentes/Especialista/Container-Especialista"
import ContainerEspecialista2 from '../Componentes/Especialista/Container-Especialista2'
import InsideContainerEspecialista from "../Componentes/Especialista/Inside-Container-Especialista"
import BotaoEspecialista from '../Componentes/Especialista/Botao-Especialista'
import BotaoEspecialista2 from '../Componentes/Especialista/Botao-Especialista2'

export default function Especialista(){
    return(
        <>
        <ScrollRestoration/>
        <ContainerEspecialista>
        <InsideContainerEspecialista/>
        </ContainerEspecialista>
        <ContainerEspecialista2>
        <BotaoEspecialista/>
        <BotaoEspecialista2/>
        </ContainerEspecialista2>
        </>
    )
}