import Link from "next/link";
import Switch from "@/components/Interruptor";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";

export default function Portfolio() {
  return (
    <>
      <header className="flex justify-between items-center py-5 px-7 lg:px-10">
        <Link className="rounded-full p-5 hover:bg-white/10" href="/">
          <FaArrowLeft className="text-2xl " />
        </Link>

        <nav className="flex items-center gap-5 p-2">
          <Link
            className="text-white/50 hover:text-white text-xl"
            href="/contact"
          >
            Contato
          </Link>

          <Switch />
        </nav>
      </header>

      <section className="max-w-screen-xl mx-7 2xl:mx-auto my-20">
        <h1 className="text-4xl font-black pb-5">Projetos</h1>
        <p className="text-white/50">
          Alguns projetos desemvolvidos em Cursos e Pessoal.
        </p>

        <hr className="opacity-10 my-14" />

        <ul className="flex justify-center flex-wrap gap-10">
          <li className="rounded-xl border border-white/50 hover:border-white w-96 p-5">
            <h2 className="font-bold text-lg flex justify-between">
              {"AluraBooks"}
              <ul className="flex items-center gap-3">
                <Link href="https://github.com/eduardomendes117/alurabooks" target="_blank">
                  <RiGithubLine className="fill-white/50 hover:fill-white text-2xl" />
                </Link>
                <Link href="https://alurabooks-eduu.vercel.app/" target="_blank">
                  <FaExternalLinkAlt className="fill-white/50 hover:fill-white" />
                </Link>
              </ul>
            </h2>

            <p className="text-ellipsis text-white/40 py-3">
              Alura Plus é um projeto desenvolvido como parte do curso da Alura,
              focado em aprimorar habilidades de front-end.
            </p>

            <span className="flex gap-2">
              <div className="border border-blue-500 rounded-full px-2">
                website
              </div>
              <div className="border border-blue-500 rounded-full px-2">
                alura
              </div>
            </span>
          </li>

          <li className="rounded-xl border border-white/50 hover:border-white w-96 p-5">
            <h2 className="font-bold text-lg flex justify-between">
              {"OptimusTech"}
              <ul className="flex items-center gap-3">
                <Link href="https://github.com/eduardomendes117/optimustech"  target="_blank">
                  <RiGithubLine className="fill-white/50 hover:fill-white text-2xl" />
                </Link>
                <Link href="https://optimustech-eduu.vercel.app/" target="_blank">
                  <FaExternalLinkAlt className="fill-white/50 hover:fill-white" />
                </Link>
              </ul>
            </h2>

            <p className="text-ellipsis text-white/40 py-3">
              O Optimus Tech é uma landing page institucional criada para uma
              empresa fictícia de recrutamento tech
            </p>

            <span className="flex gap-2">
              <div className="border border-blue-500 rounded-full px-2">
                landing page
              </div>
              <div className="border border-blue-500 rounded-full px-2">
                alura
              </div>
            </span>
          </li>

          <li className="rounded-xl border border-white/50 hover:border-white w-96 p-5">
            <h2 className="font-bold text-lg flex justify-between">
              {"Netflix Clone"}
              <ul className="flex items-center gap-3">
                <Link href="https://github.com/eduardomendes117/netflix-clone" target="_blank">
                  <RiGithubLine className="fill-white/50 hover:fill-white text-2xl" />
                </Link>
                <Link href="https://netflixclone-eduu.vercel.app/" target="_blank">
                  <FaExternalLinkAlt className="fill-white/50 hover:fill-white" />
                </Link>
              </ul>
            </h2>

            <p className="text-ellipsis text-white/40 py-3">
              O Netflix Clone é um projeto de replicação da interface da
              plataforma de streaming, desenvolvido com foco em HTML, CSS.
            </p>

            <span className="flex gap-2">
              <div className="border border-blue-500 rounded-full px-2">
                pessoal
              </div>
              <div className="border border-blue-500 rounded-full px-2">
                clone
              </div>
            </span>
          </li>
        </ul>
      </section>
    </>
  );
}
