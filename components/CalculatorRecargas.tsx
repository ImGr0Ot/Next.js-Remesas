"use client";
import React, { useState } from "react";

const CalculatorRecargas = () => {
  const [paquete, setPaquete] = useState("");
  // Handlers para los inputs

  const handlePaquete = () => {
    switch (paquete) {
      case "35":
        return "Sms: 35 / Minutos: 35 / Internet: 35Gb";
      case "45":
        return "Sms: 45 / Minutos: 45 / Internet: 45Gb";
    }
    return "Sms: 25 / Minutos: 25 / Internet: 25Gb";
  };

  const handleForm = () => {
    const phone = "5358526461";
    const URL = `https://api.whatsapp.com/send?phone=${phone}&text=Hola,%20quiero%20comprar%20un%20paquete%20de%20${paquete}%20usd`;

    window.open(URL, "_blank");
  };

  return (
    <form
      action={() => {
        handleForm();
      }}
      className="sm:mr-2 md:mr-6 lg:mr-20 p-10"
    >
      <div className="bg-white bg-opacity-10 p-8 rounded-md  text-white">
        <h1 className="animate-bounce text-3xl font-bold mb-8 text-center">
          Envío de recargas
        </h1>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="mb-2">Inserte el usd a enviar: </p>

          <select
            className="focus:outline-none m-3 bg-white bg-opacity-10 rounded-md text-center text-white cursor-pointer p-1 mb-5"
            onChange={(event) => {
              setPaquete(event.target.value);
            }}
          >
            <option
              className="cursor-pointer text-black"
              defaultValue={"25"}
              value="25"
              id="Option25"
            >
              25 usd
            </option>
            <option
              className="cursor-pointer text-black"
              value="35"
              id="Option35"
            >
              35 usd
            </option>
            <option
              className="cursor-pointer text-black"
              value="45"
              id="Option45"
            >
              45 usd
            </option>
          </select>
        </div>
        <hr className="bg-slate-600 h-0.5" />
        <div className="flex flex-col py-2 justify-center">
          <p className="mt-2 mb-4 text-center">Paquete a recibir: </p>

          <div className="overflow-x-auto focus:outline-none bg-white bg-opacity-10 rounded-md text-center text-white p-1 mb-5 w-full">
            {handlePaquete()}
          </div>
          <button
            type="submit"
            className="bg-white bg-opacity-10 rounded-md p-2 text-white hover:scale-105 duration-300 font-bold"
          >
            Continuar
          </button>
        </div>
      </div>
    </form>
  );
};

export default CalculatorRecargas;
