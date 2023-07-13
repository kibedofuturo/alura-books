import React from "react";
import '../globals.css'

import Link from "next/link";

import Logo from "../assets/Logo";
import BurguerMenu from "./BurguerMenu";
import Bag from "../assets/Bag";
import User from "../assets/User";
import Fav from "../assets/Fav";

const Navbar = () => {
    return (
        <header className="flex justify-between items-center bg-skin-white p-2 relative">
            <nav className="flex items-center gap-8">
                <BurguerMenu/>
                
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
