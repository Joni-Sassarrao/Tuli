import { ScrollRestoration } from 'react-router-dom'
import BotaoCadastro from '../Componentes/Cadastro/Botao-Cadastro'
import ContainerCadastro from '../Componentes/Cadastro/Container-Cadastro'
import InsideBotaoCadastro from '../Componentes/Cadastro/Inside-Botao-Cadastro'
import FormularioCadastro from '../Componentes/Cadastro/Formulario-Cadastro'

export default function Cadastro(){

    return(
        <>
        <ScrollRestoration/>
        <BotaoCadastro>
        <InsideBotaoCadastro/>
        </BotaoCadastro>
        <ContainerCadastro>
        <h1 className='flex justify-center text-texto1 text-6xl font-nunito font-medium'>FAÇA PARTE DO</h1>
        <h1 className='flex justify-center text-texto2 text-6xl font-nunito font-medium'>NOSSO TRABALHO:</h1>
        <FormularioCadastro/>
        </ContainerCadastro>
        </>
    )
}