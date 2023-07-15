"use client";
import React, { useState } from "react";
import '../globals.css'
import Link from "next/link";

import Menu from "../assets/Menu";



export default function BurguerMenu() {
    const [active, setMode] = useState(false);

    const toggleMode = () => {
        setMode(!active)
    }

    return (
        <button className="flex font-sans font-normal text-base" onClick={toggleMode}>
            
            <Menu/>

            <ul className={active 
                ? 'flex-col absolute top-full left-0 w-64' 
                : 'hidden'}>
                <li className="flex items-center justify-start p-4 bg-skin-white text-skin-orange font-bold">Categorias</li>

                <li className="flex items-center justify-start bg-skin-white">
                    <Link href="/home" className="bg-gradient-to-r from-blue1 to-blue2 text-transparent bg-clip-text uppercase p-4">PROGRAMAÇÃO</Link>
                </li>

                <li className="flex items-center justify-start bg-skin-white">
                    <Link href="#" className="bg-gradient-to-r from-blue1 to-blue2 text-transparent bg-clip-text uppercase p-4">FRONT-END</Link>
                </li>

                <li className="flex items-center justify-start bg-skin-white">
                    <Link href="#" className="bg-gradient-to-r from-blue1 to-blue2 text-transparent bg-clip-text uppercase p-4">INFRAESTRUTURA</Link>
                </li>

                <li className="flex items-center justify-start bg-skin-white">
                    <Link href="#" className="bg-gradient-to-r from-blue1 to-blue2 text-transparent bg-clip-text uppercase p-4">BUSINESS</Link>
                </li>

                <li className="flex items-center justify-start bg-skin-white">
                    <Link href="#" className="bg-gradient-to-r from-blue1 to-blue2 text-transparent bg-clip-text uppercase p-4">DESING & UX</Link>
                </li>
            </ul>
        </button>
    )
}
