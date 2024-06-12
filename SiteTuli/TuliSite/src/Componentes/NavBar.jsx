import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <nav>
            <ul className='flex flex-row text-black'>
                <li><Link to={"/"}>Início</Link></li>
                <li><Link to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link to={"especialista"}>Especialistas</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;