import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function FormularioCadastro(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[tel, setTel] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(name === null || email === null || tel === null){
            alert('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            from_tel: tel
        }

        emailjs.send('service_odiaamu', 'template_r0fxyok', templateParams, '3yRqw9XZ68Ns8sLlQ')
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setName('')
            setEmail('')
            setTel('')
        }, (err) =>{
            console.log('Erro: ', err)
        })
    }

    return(
        <>
        <form className='grid grid-cols-1 justify-items-center mt-[8rem] max-desktop9:mt-[6rem] max-desktop11:mt-[5rem]' onSubmit={sendEmail}>
            <div className='flex flex-col'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Nome:</label>
                <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' onChange={(e) => setName(e.target.value)} value={name} type="text"/>
            </div>
            <div className='flex flex-col'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Email:</label>
                <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' onChange={(e) => setEmail(e.target.value)} value={email} type="email"/>
            </div>
            <div className='flex flex-col mb-20'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Telefone:</label>
                <input className='w-[40rem] p-1 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' onChange={(e) => setTel(e.target.value)} value={tel} type="tel"/>
            </div>
            <button className='bg-texto2 text-white text-lg font-prompt font-medium p-5 w-48 rounded-lg  hover:shadow-Botao active:shadow-Botao-ativado' type='submit' value='Enviar'>Solicitar contato</button>
        </form>
        </>
    )
}