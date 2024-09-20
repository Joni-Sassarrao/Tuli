import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'
import emailjs from '@emailjs/browser'

export default function Cadastro(){

    const navigate = useNavigate()

    const Voltar = () => {
        return navigate('/especialista')
    }

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[tel, setTel] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === null || email === null || tel === null){
            alert('Preencha todos os campos');
            return;
        }

        const TemplateParam = {
            from_name = name,
            from_email = email,
            from_tel = tel,
        }
        
    }

    return(
        <>
        <ScrollRestoration/>
        <button className='p-10 font-fira text-texto2 text-2xl underline mb-10' onClick={Voltar}>{'<-Voltar'}</button>
        <div className='bg-gradient-to-t from-fundo1 h-[45rem]'>
            <h1 className='flex justify-center text-texto1 text-6xl font-nunito'>FAÇA PARTE DO</h1>
            <h1 className='flex justify-center text-texto2 text-6xl font-nunito'>NOSSO TRABALHO:</h1>
            <form className='grid grid-cols-1 justify-items-center mt-[8rem]' onSubmit={sendEmail}>
                <div className='flex flex-col'>
                    <label className='font-prompt text-texto1 text-3xl mb-2'>Nome:</label>
                    <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2' onChange={(e) => setName(e.target.value)} value={name} type="text"/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-prompt text-texto1 text-3xl mb-2'>Email:</label>
                    <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2' onChange={(e) => setEmail(e.target.value)} value={email} type="email"/>
                </div>
                <div className='flex flex-col mb-20'>
                    <label className='font-prompt text-texto1 text-3xl mb-2'>Telefone:</label>
                    <input className='w-[40rem] p-1 rounded-lg border-fundo1 border-2' onChange={(e) => setTel(e.target.value)} value={tel} type="tel"/>
                </div>
                <button className='bg-texto2 text-white text-lg font-prompt p-5 w-48 rounded-lg hover:shadow-Botao active:shadow-Botao-ativado'>Solicitar contato</button>
            </form>
        </div>
        </>
    )
}