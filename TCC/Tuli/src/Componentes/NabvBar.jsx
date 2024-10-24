import {Link} from "react-router-dom"
import { useState } from "react";

export default function NavBar(){

    const [isNavOpen, setIsNavOpen] = useState(false);

    return(
    <>
        <nav className="max-desktop9:hidden">
            <ul className='flex gap-10 text-2xl font-josefin max-desktop4:text-xl'>
                <li><Link className='hover:underline' to={"/"}>Início</Link></li>
                <li><Link className='hover:underline' to={"quemsomos"}>Quem Somos?</Link></li>
                <li><Link className='hover:underline' to={"especialista"}>Especialista</Link></li>
            </ul>
        </nav>
        <nav className="desktop9:hidden">
            <section className="flex">
                <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                </div>

                <div className={isNavOpen ? "MostrarMenu" : "EsconderMenu"}>
                <div className="absolute top-0 left-0 px-5 py-5" onClick={() => setIsNavOpen(false)}>
                    <div className="w-5 h-[1px] bg-white transform rotate-45"></div>
                    <div className="w-5 h-[1px] bg-white transform -rotate-45"></div>
                </div>
                <ul className="flex flex-col px-5 justify-between mt-14 min-h-[150px] text-white">
                    <li>
                        <Link className="underline" to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="underline" to={"quemsomos"}>Quem Somos?</Link>
                    </li>
                    <li>
                        <Link className="underline" to={"especialista"}>Especialista</Link>
                    </li>
                </ul>
                </div>
            </section>
      </nav>
      <style>{`
      .EsconderMenu {
        display: none;
      }
      .MostrarMenu {
        display: block;
        position: absolute;
        width: 40%;
        height: 13.5rem;
        top: 0;
        right: 0;
        background: #D9B1AD;
        z-index: 10;
        display: flex;
        flex-direction: column;
        border: 1px solid white;
        transition: width 2s;
      }
    `}</style>
    </>
    )
}
