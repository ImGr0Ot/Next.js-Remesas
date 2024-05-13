import React from "react";

const FaqSection = () => {
  return (
    <>
      <div className="space-y-10 bg-gradient-to-t from-[#090a11] to-[#5963bb] py-28">
        <hr className="h-0.5 mx-36 bg-sky-100 border-0"></hr>
        <h1 className="text-right text-4xl font-bold tracking-tight sm:text-5xl text-white pt-20 mx-28">
          Preguntas frecuentes
        </h1>
        <details
          className="group rounded-sm bg-sky-100 p-6  [&_summary::-webkit-details-marker]:hidden mx-28"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Entregan dinero en efectivo, tienen entregas en todo el país ?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 ">
            No entregamos dinero en efectivo, pagamos a tarjetas de mlc o cup,
            por lo que el servicio está disponible para todo el país.
          </p>
        </details>

        <details
          className="group rounded-sm bg-sky-100 p-6  [&_summary::-webkit-details-marker]:hidden mx-28"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Cómo es el proceso para enviar dinero ?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            1ro debe ingresar un cifra válida a enviar en nuestra calculadora,
            al presionar el botón de enviar se le rediccionará a nuetro agante
            en Cuba. Este agente le enviará una cuenta zelle e indicaciones para
            que realice el pago. Luego de realizar el pago, debe enviar la
            captura de la transacción a nuestro agente. Una vez que el agente
            recibe la captura de la transacción, se le enviará el dinero a la
            tarjeta que corresponde.
          </p>
        </details>

        <details
          className="group rounded-sm bg-sky-100 p-6  [&_summary::-webkit-details-marker]:hidden mx-28"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Qué métodos de pagos tienen disponibles y desde que país se puede
              pagar ?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 ">
            Estamos aceptando pagos desde Zelle principalemente en EEUU, puede
            pagar desde otros países a través de PayPal, pero no todos los
            países lo aceptan y la tarifa puede cambiar.
          </p>
        </details>

        <details
          className="group rounded-sm bg-sky-100 p-6  [&_summary::-webkit-details-marker]:hidden mx-28"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Cuánto tiempo demoran en realizar la transferencia luego de pagar
              el servicio ?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 ">
            Generalmente demoramos menos de 1 hora en realizar los pagos, pero
            depende de la disponiblidad de red y corriente sobre todo en Cuba.
          </p>
        </details>

        <details
          className="group rounded-sm bg-sky-100 p-6  [&_summary::-webkit-details-marker]:hidden mx-28"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
            <h2 className="font-medium">
              Qué debo hacer si el pago demora mas de lo normal y el agente no
              responde ?
            </h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 ">
            Antes de todo debe tener paciencia, si el agente no responde,
            siempre puede contactar por correo, mensaje o llamada telefónica a
            la información que se encuentra en la sección de contacto.
          </p>
        </details>
      </div>
    </>
  );
};

export default FaqSection;
