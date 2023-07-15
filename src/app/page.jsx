import React from "react"
import './globals.css'

import Navbar from "./components/Navbar"
import Banner from "./components/Banner"

export default function Home() {
  return (
    <main className="bg-skin-primary h-[100vh]">
    <Navbar/>
    <Banner/>
    </main>
  )
}
