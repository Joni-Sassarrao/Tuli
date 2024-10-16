import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav>
            <ul className='flex gap-10 text-2xl font-josefin max-desktop4:text-xl'>
                <li><Link className='hover:underline' to={"/"}>Início</Link></li>
                <li><Link className='hover:underline' to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link className='hover:underline' to={"especialista"}>Especialista</Link></li>
            </ul>
        </nav>
    )
}