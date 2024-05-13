"use client";
import React, { useState } from "react";
import Map from "./Map";

const QuienesSomos = () => {
  return (
    <>
      <div className="sm:flex-col flex-col justify-between p-4  bg-gradient-to-b from-[#090a11] to-zinc-500 text-white ">
        <h1
          className="
				text-3xl
				font-bold
				mb-12
                
                text-center
				mt-24"
        >
          Quienes Somos ?
        </h1>{" "}
        <div className="lg:flex-row flex flex-col gap-14">
          <div className="flex-1 p-4 bg-white bg-opacity-10 rounded-md">
            <p className="text-[23px]  p-4 leading-relaxed">
              {" "}
              Nuestra empresa nace en 2021, en aquel entonces solo se ofrecía el
              servicio de recargas internacionales y saldo móvil. Luego en 2022
              comenzamos a ofrecer el servicio de remesas con sede en
              Cienfuegos; gracias a la lealtad de nuestros clientes y a la
              calidad de los servicios pudimos expandirnos a todo el territorio
              nacional y a ofrecer otros servicios como por ejemplo los combos
              de comida.
            </p>
            {/* Al
            día de hoy nos ubicamos en Louisville, Kentucky; mantenemos un
            servicio de calidad y mucha seguridad para nuestros clientes, donde
            se destaca nuestra experiencia y competencia en el mercado. */}
          </div>
          <div className="flex-1">
            {" "}
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuienesSomos;
