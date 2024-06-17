import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-10 text-2xl font-josefin'>
                <li><Link to={"/"}>Início</Link></li>
                <li><Link to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link to={"especialista"}>Especialistas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;