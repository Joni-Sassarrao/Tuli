import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex gap-3 text-2xl'>
                <li><Link to={"/"}>Início</Link></li>
                <li><Link to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link to={"especialista"}>Especialistas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;