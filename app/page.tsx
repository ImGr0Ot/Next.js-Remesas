"use client";
import { Hero, Navbar } from "@/components";
import CalculatorRecargas from "@/components/CalculatorRecargas";
import CalculatorRemesas from "@/components/CalculatorRemesas";
import FaqSection from "@/components/FaqSection";
import QuienesSomos from "@/components/QuienesSomos";
import ReviewSection from "@/components/ReviewSection";
import { useState } from "react";

export default function Home() {
  const [ShowRemesas, setShowRemesas] = useState(true);
  const [ShowRecargas, setShowRecargas] = useState(false);
  const [NavValue, setNavValue] = useState("Recargas Moviles");

  return (
    <main>
      <Navbar
        setShowRecargas={setShowRecargas}
        setShowRemesas={setShowRemesas}
        setNavValue={setNavValue}
        NavValue={NavValue}
      />

      <Hero NavValue={NavValue} />
      <ReviewSection />
      <FaqSection />
      <div className="sm:flex sm:justify-center">
        <QuienesSomos />
      </div>
    </main>
  );
}
