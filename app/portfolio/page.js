"use client";

import { useState } from "react";
import Link from "next/link";
import Switch from "@/components/Interruptor";
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Destaque");

  const projects = [
    {
      name: "AluraBooks",
      github: "https://github.com/eduardomendes117/alurabooks-2.0",
      live: "https://alurabooks-2-eduu.vercel.app/",
      description:
        "Projeto desenvolvido como parte do curso da Alura. Focado em criar uma aplicação de livros com funcionalidades de busca",
      categories: ["website", "alura", "destaque"],
    },
    {
      name: "OptimusTech",
      github: "https://github.com/eduardomendes117/optimustech",
      live: "https://optimustech-eduu.vercel.app/",
      description:
        "Landing page institucional fictícia para uma empresa de tecnologia, com foco em destacar serviços e tecnologias inovadoras.",
      categories: ["landing page", "alura", "destaque"],
    },
    {
      name: "Netflix Clone",
      github: "https://github.com/eduardomendes117/netflix-clone",
      live: "https://netflixclone-eduu.vercel.app/",
      description:
        "Replicação da interface da Netflix, com foco em layout responsivo.",
      categories: ["pessoal", "clone", "destaque"],
    },
    {
      name: "Projeto Xbox",
      github: "https://github.com/eduardomendes117/projeto-xbox",
      live: "https://projeto-xbox-eduu.vercel.app/",
      description:
        "Landing page Xbox Series X",
      categories: ["pessoal"],
    },
    // {
    //   name: "VidFlow",
    //   github: "https://github.com/eduardomendes117/VidFlow",
    //   live: "https://vidflow-next.vercel.app/",
    //   description: "Aplicação que automatiza as postagens de vídeo em Múltiplas Plataformas",
    //   categories: ["pessoal"],
    // },
    // {
    //   name: "Hot Burger",
    //   github: "https://github.com/eduardomendes117/hot-burger",
    //   live: "https://hot-burger-eduu.vercel.app/",
    //   description: "Website de uma hamburgueria ficticia.",
    //   categories: ["pessoal"],
    // },
    {
      name: "Notes App",
      github: "https://github.com/eduardomendes117/notes-app",
      live: "https://notes-app-eduu.vercel.app/",
      description: "Projeto Bloco de Notas.",
      categories: ["pessoal", "next.js"],
    },
    {
      name: "Fokus",
      github: "https://github.com/eduardomendes117/fokus",
      live: "https://fokus-eduu.vercel.app/",
      description:
        "Aplicação de produtividade para ajudar usuários a manterem o foco no trabalho, com funcionalidades de timer e listas de tarefas.",
      categories: ["website", "alura"],
    },
    {
      name: "Alura Play",
      github: "https://github.com/eduardomendes117/alura-play",
      live: "https://aluraplay-eduu.vercel.app/",
      description:
        "Plataforma de vídeo streaming simulada, com exibição de vídeos educativos e interação com a interface do usuário.",
      categories: ["alura"],
    },
    {
      name: "Check List",
      github: "https://github.com/eduardomendes117/check-list",
      live: "https://checklist-eduu.vercel.app/",
      description:
        "Aplicação de lista de tarefas simples, permitindo aos usuários adicionar, marcar e excluir tarefas de uma lista.",
      categories: ["alura"],
    },
    {
      name: "Code Connect",
      github: "https://github.com/eduardomendes117/code-connect",
      live: "https://codeconnect-eduu.vercel.app/",
      description:
        "Aplicação para conectar desenvolvedores em uma rede social onde podem compartilhar projetos e experiências.",
      categories: ["alura"],
    },
    {
      name: "Culturama",
      github: "https://github.com/eduardomendes117/culturama",
      live: "https://culturama-eduu.vercel.app/",
      description:
        "Projeto do curso de Front-End da Alura, criado para apresentar uma plataforma de eventos culturais e educacionais com foco em responsividade.",
      categories: ["alura"],
    },
    {
      name: "Alura Newsletter",
      github: "https://github.com/eduardomendes117/alura-newsletter",
      live: "https://aluranewsletter-eduu.vercel.app/",
      description:
        "Criação de uma plataforma de boletins informativos para a Alura, permitindo aos usuários se inscreverem para receber atualizações.",
      categories: ["alura"],
    },
    {
      name: "Projeto Android",
      github: "https://github.com/eduardomendes117/projeto-android",
      live: "https://projetoandroid-eduu.vercel.app/",
      description:
        "Projeto Android, Focada na criação de uma interface simples e interativa para dispositivos móveis, com funcionalidades básicas e uso de layouts responsivos.",
      categories: ["curso em video"],
    },
    {
      name: "Projeto Social",
      github: "https://github.com/eduardomendes117/projeto-social",
      live: "https://projetosocial-eduu.vercel.app/",
      description:
        "Este projeto tem como objetivo demonstrar a utilização de iframes para integrar vídeos em uma página web de forma prática e responsiva.",
      categories: ["curso em video"],
    },
    {
      name: "Projeto Login",
      github: "https://github.com/eduardomendes117/projeto-login",
      live: "https://projetologin-eduu.vercel.app/",
      description: "Desenvolvimento de uma tela de login simples",
      categories: ["curso em video"],
    },
    {
      name: "Projeto Cordel",
      github: "https://github.com/eduardomendes117/projeto-social",
      live: "https://projetocordel-eduu.vercel.app/",
      description:
        "Projeto desenvolvido no curso de HTML e CSS do 'Curso em Vídeo', com foco em exibição de conteúdo literário no formato cordel, utilizando técnicas de responsividade e estilização básica.",
      categories: ["curso em video"],
    },
    {
      name: "Alura Plus",
      github: "https://github.com/eduardomendes117/alura-plus",
      live: "https://aluraplus-eduu.vercel.app/",
      description:
        "Plataforma fictícia de vídeos educacionais que oferece cursos em diversos temas de programação e desenvolvimento.",
      categories: ["alura"],
    },
    {
      name: "Wave Cast",
      github: "https://github.com/eduardomendes117/wave-cast",
      live: "https://wavecast-eduu.vercel.app/",
      description: "Aplicação que simula uma plataforma de podcasts.",
      categories: ["alura"],
    },
    {
      name: "Calmaria Spa",
      github: "https://github.com/eduardomendes117/calmaria-spa",
      live: "https://calmaria-spa-eduu.vercel.app/",
      description:
        "Landing page de um spa fictício, com informações sobre serviços",
      categories: ["alura"],
    },
  ];

  return (
    <>
      <header className="flex justify-between items-center py-1 px-2 lg:px-10">
        <Link className="rounded-full p-3 hover:bg-white/10" href="/">
          <FaArrowLeft className="text-2xl " />
        </Link>

        <nav className="flex items-center gap-5 p-2">
          <Link
            className="text-white/50 dark:text-black/50 dark:hover:text-black hover:text-white text-xl"
            href="/contact"
          >
            Contato
          </Link>

          <Switch />
        </nav>
      </header>

      <section className="max-w-screen-xl mx-7 2xl:mx-auto my-20">
        <motion.h1
          className="text-4xl font-black pb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projetos
        </motion.h1>
        <motion.p
          className="text-white/50 dark:text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Alguns projetos desenvolvidos em Cursos e Pessoal.
        </motion.p>

        <motion.nav
          className="flex flex-wrap gap-3 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {["Destaque", "Alura", "Curso em Video", "Pessoal", "Todos"].map(
            (category) => (
              <motion.button
                key={category}
                className={`${
                  activeCategory === category
                    ? "bg-white/20 dark:bg-black/20"
                    : "hover:bg-white/20 dark:bg-transparent hover:dark:bg-black/10"
                } border border-white/10 dark:border-black/10 py-1 px-3 rounded-full`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }} // Hover animado
                whileTap={{ scale: 0.95 }} // Click animado
                transition={{ type: "spring", stiffness: 300 }} // Adicionando transições suaves
              >
                {category}
              </motion.button>
            )
          )}
        </motion.nav>

        <hr className="opacity-10 dark:opacity-100 my-10" />

        <motion.ul
          className="flex justify-center flex-wrap gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          {projects
            .filter(
              (project) =>
                activeCategory === "Todos" ||
                project.categories.includes(activeCategory.toLowerCase())
            )
            .map((project) => (
              <motion.li
                key={project.name}
                className="rounded-xl border dark:border-black/20  border-white/50 hover:border-white w-96 p-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="font-bold text-lg flex justify-between">
                  {project.name}
                  <ul className="flex items-center gap-3">
                    <Link href={project.github} target="_blank">
                      <RiGithubLine className="dark:fill-black fill-white/50 hover:fill-white text-2xl" />
                    </Link>
                    <Link href={project.live} target="_blank">
                      <FaExternalLinkAlt className="fill-white/50 dark:fill-black hover:fill-white" />
                    </Link>
                  </ul>
                </h2>

                <p className="text-ellipsis text-white/40 dark:text-black/60 py-3">
                  {project.description}
                </p>

                <span className="flex gap-2">
                  {project.categories
                    .filter((category) => category !== "destaque")
                    .map((category) => (
                      <div
                        key={category}
                        className="flex items-center border border-blue-500 rounded-full pb-1 px-3"
                      >
                        {category}
                      </div>
                    ))}
                </span>
              </motion.li>
            ))}
        </motion.ul>
      </section>
    </>
  );
}
