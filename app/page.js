"use client";

import Image from "next/image";
import Optimus from "../public/optimus.png";
import Netflix from "../public/netflix.png";
import WaveCast from "../public/wavecast.png";

import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";

export default function App() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="flex flex-col gap-5 row-start-2 items-start via-zinc-600/20">
          <p className="lg:text-2xl">Olá! Meu nome é Eduardo e sou</p>
          <h1 className="text-4xl lg:text-5xl font-bold">
            Desemvolvedor Frontend
          </h1>
          <p className="lg:text-xl">
            Transformo ideias em soluções digitais modernas, focados em
            usabilidade, desempenho e design responsivo.
          </p>
          <div className="flex gap-4 items-center">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar comigo
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-3 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-40"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width={16}
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              download CV
            </a>
          </div>
        </main>
      </div>
      <Particles />

      <section className="flex flex-col justify-center bg-black w-svw py-16 xl:py-20 !h-full" id="projects">
        <div className="flex justify-center mb-5">
          <a
            className="rounded-full w-full max-w-xs border border-solid border-slate-600 transition-colors flex items-center justify-center gap-3 hover:border-white bg-black hover:bg-black/90 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/eduardomendes117"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 496 512"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
            Repositorio Github
          </a>
        </div>

        <section className="max-w-screen-xl backdrop-blur-sm rounded-2xl mt-10 mx-10 xl:mx-auto grid justify-items-center grid-cols-1 sm:grid-cols-2 gap-16 xl:grid-cols-3">
          <div className="flex flex-col gap-3">
            <ul className="flex gap-2">
              <li className="text-green-500 border border-green-500 w-max px-5 rounded-full">
                website
              </li>

              <li className="text-blue-500 border border-blue-500 w-max px-5 rounded-full">
                alura
              </li>
            </ul>

            <Image
              className="bg-white rounded-md"
              src={Optimus}
              alt="Imagem Landing Page"
            />
            <h2 className="text-2xl lg:text-3xl font-medium">Landing Page</h2>
            <p>
              O Optimus Tech é uma landing page institucional criada para uma
              empresa fictícia de recrutamento tech
            </p>
            <div className="flex gap-5">
              <a
                href=""
                className="rounded-full border border-solid text-white border-white transition-colors flex items-center justify-center text-background gap-2 hover:bg-gray-950 text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Repositorio
              </a>

              <a
                href=""
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Deploy
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex gap-2">
              <li className="text-green-500 border border-green-500 w-max px-5 rounded-full">
                website
              </li>
              <li className="text-red-500 border border-red-500 w-max px-5 rounded-full">
                clone
              </li>
            </ul>

            <Image
              className="bg-white rounded-md"
              src={Netflix}
              alt="Imagem Landing Page"
            />
            <h2 className="text-2xl lg:text-3xl font-medium">Landing Page</h2>
            <p>
              O Optimus Tech é uma landing page institucional criada para uma
              empresa fictícia de recrutamento tech
            </p>
            <div className="flex gap-5">
              <a
                href=""
                className="rounded-full border border-solid text-white border-white transition-colors flex items-center justify-center text-background gap-2 hover:bg-gray-950 text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Repositorio
              </a>

              <a
                href=""
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Deploy
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex gap-2">
              <li className="text-green-500 border border-green-500 w-max px-5 rounded-full">
                website
              </li>
              <li className="text-blue-500 border border-blue-500 w-max px-5 rounded-full">
                alura
              </li>
            </ul>

            <Image
              className="bg-white rounded-md"
              src={WaveCast}
              alt="Imagem Landing Page"
            />
            <h2 className="text-2xl lg:text-3xl font-medium">Landing Page</h2>
            <p>
              O Optimus Tech é uma landing page institucional criada para uma
              empresa fictícia de recrutamento tech
            </p>
            <div className="flex gap-5">
              <a
                href=""
                className="rounded-full border border-solid text-white border-white transition-colors flex items-center justify-center text-background gap-2 hover:bg-gray-950 text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Repositorio
              </a>

              <a
                href=""
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4 sm:px-5"
              >
                Deploy
              </a>
            </div>
          </div>
        </section>
      </section>


      <section className="bg-gray-200 h-svh p-16">
        <h1 className="text-black text-5xl font-semibold">Contato</h1>

      </section>

    </>
  );
}
