import React from "react";

export default function Banner () {
  const lupe = require("../assets/lupe.svg").default;
  
  return (
    <section className="
      bg-gradient-to-r from-blue1 to-blue2 text-skin-white 
      font-sans py-10 px-8 text-center
      ">
      <h2 className="font-bold text-lg my-4">
        Já sabe por onde começar?
      </h2>

      <p className="font-medium text-base my-4">
        Encontre em nossa estante o que precisa para seu desenvolvimento!
      </p>

      <input type="search" placeholder="Qual será sua próxima leitura?"
       className="
        bg-transparent border-2 border-solid border-white rounded-3xl w-full p-4 
        placeholder:font-sans placeholder:text-skin-white placeholder:font-normal placeholder:text-center bg-no-repeat
        "  style={{
          backgroundImage: `url(${lupe})`,
        }}/>
    </section>
  )
}
