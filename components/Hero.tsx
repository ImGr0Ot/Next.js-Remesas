import Image from "next/image";
import CalculatorRemesas from "./CalculatorRemesas";
import CalculatorRecargas from "./CalculatorRecargas";

const Hero = ({ NavValue }: { NavValue: any }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row -z-10 bg-[url('/4.jpg')] bg-cover items-center justify-between">
        {/*<Image
          className="w-full h-full object-cover blur-[2px]"
          src="/4.jpg"
          alt="background image"
          layout="fill"
        />
 		 */}

        <div className="flex flex-col lg:pl-10 lg:mt-12 lg:ml-28 mt-24 items-left mx-10">
          <h1 className="text-[48px] font-semibold font-candara text-white ">
            Envía dinero de manera <br />
            segura y fácil.
          </h1>

          <p className="text-[27px] text-white mt-4">
            {" "}
            -Realice su pago a través de nuestra calculadora.
            <br />
            -Su dinero estará listo en menos de 10 minutos.
            <br />
            -Tenemos los mejores precios del mercado. <br />{" "}
          </p>
        </div>
        <div className="flex lg:mt-36 mt-20 mb-36">
          {NavValue === "Recargas Moviles" ? (
            <CalculatorRemesas />
          ) : (
            <CalculatorRecargas />
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
