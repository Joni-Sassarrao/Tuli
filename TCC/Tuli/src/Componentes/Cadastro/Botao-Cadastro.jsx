import { useNavigate } from "react-router-dom"

export default function BotaoCadastro({children}){

    const navigate = useNavigate()

    const Voltar = () => {
        return navigate('/especialista')
    }

    return(
        <>
        <button className='p-10 text-texto2 text-2xl underline mb-10 max-desktop9:text-base' onClick={Voltar}>
            {children}
        </button>
        </>
    )
}