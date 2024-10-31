import { useState } from "react";
import emailjs from '@emailjs/browser'

export default function FormularioCadastro(){

    const[nome, setNome] = useState('')
    const[mail, setMail] = useState('')
    const[telefone, setTelefone] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(nome === null || mail === null || telefone === null){
            alert('Preencha todos os campos');
            return;
        }

        const templateParams = {
            from_nome: nome,
            from_mail: mail,
            from_telefone: telefone
        }

        emailjs.send('service_odiaamu', 'template_r0fxyok', templateParams, '3yRqw9XZ68Ns8sLlQ')
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text)
            setNome('')
            setMail('')
            setTelefone('')
        }, (err) =>{
            console.log('Erro: ', err)
        })
    }

    return(
        <>
        <form className='grid grid-cols-1 justify-items-center mt-[8rem] max-desktop9:mt-[6rem] max-desktop11:mt-[5rem]' onSubmit={sendEmail} method="post" action="http://localhost:3000/usuarios">
            <div className='flex flex-col'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Nome:</label>
                <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' type="text" name="name" onChange={(e) => setNome(e.target.value)} value={nome}/>
            </div>
            <div className='flex flex-col'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Email:</label>
                <input className='w-[40rem] p-1 mb-5 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' type="email" name="email" onChange={(e) => setMail(e.target.value)} value={mail}/>
            </div>
            <div className='flex flex-col mb-20'>
                <label className='font-prompt text-texto1 text-3xl mb-2 max-desktop9:text-xl'>Telefone:</label>
                <input className='w-[40rem] p-1 rounded-lg border-fundo1 border-2 max-desktop9:w-[20rem] max-desktop11:w-[16rem]' type="tel" name="tel" onChange={(e) => setTelefone(e.target.value)} value={telefone}/>
            </div>
            <button className='bg-texto2 text-white text-lg font-prompt font-medium p-5 w-48 rounded-lg  hover:shadow-Botao active:shadow-Botao-ativado' type='submit' value='Enviar'>Solicitar contato</button>
        </form>
        </>
    )
}