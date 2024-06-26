import { useNavigate } from 'react-router-dom'
import Footer from '../Componentes/Footer'

    const Cadastro = () =>{
        const navigate = useNavigate()

        const Voltar = () =>{
            return navigate("/especialista")
        }
        
        return(
        <div>
            <div>
                <img className="w-full" src={"/fundotela4.svg"}/>
            </div>
            <div className="absolute m-10 top-[200px]">
                <div className="mb-20">
                    <button onClick={Voltar} className="text-xl underline font-bold text-white">Voltar</button>
                </div>
                <div className="text-[#CA1C63] font-josefin mb-10 text-4xl w-[500px]">
                    <h1>Faça parte do nosso trabalho:</h1>
                </div>
                <form className="mb-16">
                <div className="mb-5 font-josefin">
                    <div className="mb-5">
                        <label type="name" className="block mb-1 text-xl font-medium text-[#CA1C63]">Nome Completo:</label>
                        <input type="nome" className="bg-white shadow-ShadowCard border text-sm rounded-[5px] w-[400px] p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black" placeholder="Ex: Julia Silva"/>
                    </div>
                    <div className="mb-5">
                        <label type="phone" className="block mb-1 text-xl font-medium text-[#CA1C63]">Celular:</label>
                        <input type="phone" className="bg-white shadow-ShadowCard border text-sm rounded-[5px] w-[400px] p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black" placeholder="Ex: 11 99999-9999"/>
                    </div>
                    <div className="mb-5">
                        <label type="email" className="block mb-1 text-xl font-medium text-[#CA1C63]">Nome Completo:</label>
                        <input type="email" className="bg-white shadow-ShadowCard border text-sm rounded-[5px] w-[400px] p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black" placeholder="Ex: juliasilva@email.com"/>
                    </div>
                    <div className="mb-5">
                        <label type="name" className="block mb-1 text-xl font-medium text-[#CA1C63]">Currículo PDF:</label>
                        <input type="nome" className="bg-white shadow-ShadowCard border text-sm rounded-[5px] w-[400px] p-2.5 dark:bg-white dark:placeholder-gray-400 dark:text-black" placeholder="Ex: Documento"/>
                    </div>
                </div>
                </form>
                <button className="flex justify-center w-[250px] p-4 bg-[#44403F] opacity-90 rounded-md hover:shadow-xl hover:duration-150">
                    <h1 className="font-josefin text-2xl text-white">Enviar</h1>
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default Cadastro