"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
} from "lucide-react";

const slides = [
  "/images/produtos/acerola1.JPG",
  "/images/produtos/alface.JPG",
  "/images/produtos/banana.JPG",
  "/images/produtos/manga.JPG",
  "/images/produtos/limao.JPG",
  "/images/produtos/maca1.JPG",
  "/images/produtos/melao1.JPG",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[75vh] min-h-[600px] overflow-hidden">
      {/* Imagens */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt="Produtos frescos do Mercadinho Belmonte"
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl text-center text-white px-6">
          <span className="mb-6 block text-sm font-semibold uppercase tracking-[0.3em] text-green-300">
            Mercadinho Belmonte
          </span>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Mais perto
            <br />
            de você.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-white/90 md:text-xl">
            Produtos frescos, atendimento próximo e a
            confiança de quem faz parte da comunidade de
            Boa Viagem.
          </p>

        </div>
      </div>

      {/* Setas */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-6
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-white/20
          p-3
          backdrop-blur
          transition
          hover:bg-white/30
        "
      >
        <ChevronLeft size={24} color="white" />
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute
          right-6
          top-1/2
          z-20
          -translate-y-1/2
          rounded-full
          bg-white/20
          p-3
          backdrop-blur
          transition
          hover:bg-white/30
        "
      >
        <ChevronRight size={24} color="white" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}