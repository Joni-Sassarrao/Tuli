import { Link } from "react-router-dom"

export default function NavBar() {
    return ( 
        <nav>
            <ul className="flex flex-row gap-3">
                <li><Link to="/">Início</Link></li>
                <li><Link to="">Quem somos?</Link></li>
                <li><Link to="">Especialistas</Link></li>
            </ul>
        </nav>
    );
}