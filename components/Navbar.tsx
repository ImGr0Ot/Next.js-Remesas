"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = ({
  setShowRecargas,
  setShowRemesas,
  setNavValue,
  NavValue,
}: {
  setShowRecargas: any;
  setShowRemesas: any;
  setNavValue: any;
  NavValue: any;
}) => {
  const handleNavValue = () => {
    NavValue === "Recargas Moviles"
      ? setNavValue("Remesas")
      : setNavValue("Recargas Moviles");
  };

  const handleShow = (e: any) => {
    e.preventDefault();
    setShowRecargas(true);
    setShowRemesas(false);
    handleNavValue();
  };
  const isBrowser = () => typeof window !== "undefined";

  const ScrollToAboutUs = (x: number) => {
    if (!isBrowser()) return;

    window.scrollTo({ top: x, behavior: "smooth" });
  };
  const ScrollToFaq = (x: number) => {
    if (!isBrowser()) return;
    window.scrollTo({ top: x, behavior: "smooth" });
  };
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full  absolute z-10">
      <nav className="max-w-[1440px] flex justify-between items-center px-16 text-white mx-auto">
        <Link href={"/"}>
          <Image
            src={"/GROOTLOGO-removebg--WHITE-VECTORIZADO-ARREGLADOsvg.svg"}
            width={80}
            height={80}
            alt="logo"
          />
        </Link>
        <div className="navbar">
          <button onClick={() => ScrollToAboutUs(2800)}>Sobre Nosotros</button>
          <button onClick={() => ScrollToFaq(1600)}>
            Preguntas frecuentes
          </button>
          <Link href="/" onClick={(e) => handleShow(e)}>
            {NavValue}
          </Link>
        </div>
        <div
          onClick={handleNav}
          className={`sm:hidden pr-10 pt-2 cursor-pointer ${
            menuOpen && "hidden"
          }`}
        >
          <AiOutlineMenu size={25} className="hover:scale-110 duration-300" />
        </div>
      </nav>
      <div
        className={
          menuOpen
            ? "fixed sm:hidden right-12 top-5 w-[200px] h-[150px] duration-500"
            : "fixed left-[-100%]"
        }
      >
        {" "}
        <div className="flex flex-col text-[12px] bg-sky-100 rounded-md text-white">
          <div className="flex w-full justify-end items-center pt-2 pr-2">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose
                size={20}
                className="hover:scale-125 duration-300 text-slate-500"
              />
            </div>
          </div>

          <div className="flex flex-col text-[18px] navbar-sm p-2 gap-4 border-b-gray-800 text-slate-500">
            <button className="navbar-sm" onClick={() => ScrollToAboutUs(4300)}>
              Sobre Nosotros
            </button>
            <button className="navbar-sm" onClick={() => ScrollToAboutUs(2500)}>
              Preguntas frecuentes
            </button>
            <button className="navbar-sm" onClick={(e) => handleShow(e)}>
              {NavValue}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
