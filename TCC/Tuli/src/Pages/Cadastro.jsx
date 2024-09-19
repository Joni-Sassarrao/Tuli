import { useNavigate } from 'react-router-dom'

export default function Cadastro(){

    const navigate = useNavigate()

    const Voltar = () => {
        return navigate('/especialista')
    }

    return(
        <>
        <button className='p-10 font-fira text-texto2 text-2xl underline mb-10' onClick={Voltar}>{'<-Voltar'}</button>
        <div>
            <h1 className='flex justify-center text-texto1 text-5xl font-nunito'>FAÇA PARTE DO</h1>
            <h1 className='flex justify-center text-texto2 text-5xl font-nunito'>NOSSO TRABALHO:</h1>
            <form className='grid grid-cols-1 justify-items-center mt-[10rem]'>
                <div className='flex flex-col'>
                    <label>Nome:</label>
                    <input type="text"/>
                </div>
                <div className='flex flex-col'>
                    <label>Email:</label>
                    <input type="email"/>
                </div>
                <div className='flex flex-col'>
                    <label>Telefone</label>
                    <input type="tel" pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'/>
                </div>
                <button>Solicitar contato</button>
            </form>
        </div>
        </>
    )
}