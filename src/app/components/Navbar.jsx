import React from "react";

import Link from "next/link";

import Logo from "../assets/Logo";
import Menu from "../assets/Menu";
import Bag from "../assets/Bag";
import User from "../assets/User";
import Fav from "../assets/Fav";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center bg-skin-branco p-2">
            <nav className="flex items-center gap-8">
                <Menu/>
                
                <Link href="/"> <Logo alt="Logo da Alura Books"/> </Link>
            </nav>
            

            <nav className="flex items-center ">
                <Link href="#" > <Fav alt="Meus Favoritos"/> </Link>

                <Link href="#"> <Bag alt="Carrinho de Compras"/> </Link>

                <Link href="#"> <User alt="Meu Perfil"/> </Link>
            </nav>
        </header>
    )
}

export default Navbar;
