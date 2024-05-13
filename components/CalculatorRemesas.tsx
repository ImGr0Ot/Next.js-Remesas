"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [cantRecibir, setCantRecibir] = useState(0);
  const [cantEnviar, setCantEnviar] = useState(100);
  const [moneda, setMoneda] = useState("Mlc");
  // Handlers para los inputs

  const handleChangeMlc = () => {
    return Number(cantEnviar * 1.15).toFixed(2);
  };
  const handleChangeCup = () => {
    return cantEnviar * 380;
  };
  const handleFormMlc = () => {
    const phone = "5358526461";
    const URL = `https://api.whatsapp.com/send?phone=${phone}&text=Hola,%20quiero%20enviar%20${cantEnviar}%20para%20recibir%20${Number(
      cantEnviar * 1.15
    ).toFixed(2)}%20${moneda}`;

    window.open(URL, "_blank");
  };
  const handleFormCup = () => {
    const phone = "5358526461";
    const URL = `https://api.whatsapp.com/send?phone=${phone}&text=Hola,%20quiero%20enviar%20${cantEnviar}%20para%20recibir%20${Number(
      cantEnviar * 380
    ).toFixed(2)}%20${moneda}`;

    window.open(URL, "_blank");
  };

  return (
    <form
      action={() => {
        moneda === "Mlc" ? handleFormMlc() : handleFormCup();
      }}
      className="sm:mr-2 md:mr-6 lg:mr-20 p-10"
    >
      <div className="flex flex-col text-center bg-white bg-opacity-10 p-8 rounded-md  text-white">
        <h1 className="animate-bounce text-3xl font-bold mb-4">
          Envío de remesas
        </h1>
        <p className="mb-2">Inserte el usd a enviar: </p>

        <div className="flex items-center justify-center gap-1 text-white my-5">
          <div className="flex items-center gap-1">
            <div
              onClick={() => {
                setCantEnviar((prev) => (prev > 100 ? prev - 10 : 100));
              }}
              className="size-10 leading-10 text-white transition hover:opacity-75 hover:cursor-pointer"
            >
              -
            </div>

            <input
              type="number"
              value={cantEnviar}
              min={100}
              max={1000}
              step={10}
              onChange={(e) => {
                setCantEnviar(Number(e.target.value));
              }}
              className="h-10 w-16 focus:outline-none bg-white bg-opacity-10 rounded border-gray-200 text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />

            <div
              onClick={() => {
                setCantEnviar((prev) => (prev < 1000 ? prev + 10 : 1000));
              }}
              className="size-10 leading-10 text-white transition hover:opacity-75 hover:cursor-pointer"
            >
              +
            </div>
          </div>
        </div>

        <hr className="bg-slate-600 h-0.5" />

        <label className="m-3" id="CantARecibir">
          Cant a recibir:{" "}
          {moneda === "Mlc" ? handleChangeMlc() : handleChangeCup()}
        </label>

        <select
          className="focus:outline-none m-3 bg-white bg-opacity-10 rounded-md text-center text-white cursor-pointer p-1 mb-5"
          onChange={(event) => {
            setMoneda(event.target.value === "Mlc" ? "Mlc" : "Cup");
          }}
        >
          <option
            defaultValue={"Mlc"}
            value="Mlc"
            id="Mlc"
            className="text-black"
          >
            Mlc
          </option>
          <option value="Cup" id="Cup" className="text-black">
            Cup
          </option>
        </select>
        <button
          type="submit"
          className="bg-white bg-opacity-10 rounded-md p-2 text-white hover:scale-105 duration-300 font-bold"
        >
          Continuar
        </button>
      </div>
    </form>
  );
};

export default Calculator;
