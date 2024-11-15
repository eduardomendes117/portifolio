"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Switch from "@/components/Interruptor";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Portfolio() {
  return (
    <>
      <header className="flex justify-between items-center py-1 px-2 lg:px-10">
        <Link className="rounded-full p-3 hover:bg-white/10" href="/">
          <FaArrowLeft className="text-2xl " />
        </Link>

        <nav className="flex items-center gap-5 p-2">
          <Link
            className="text-white/50 dark:text-black/60 dark:hover:text-black hover:text-white text-xl"
            href="/portfolio"
          >
            Portifólio
          </Link>

          <Switch />
        </nav>
      </header>

      <section className="max-w-screen-xl mx-7 2xl:mx-auto my-20 flex gap-10 justify-center flex-wrap">
        <motion.li
          className="rounded-xl border dark:border-black/60 border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="https://www.linkedin.com/in/eduardo-mendes-26538030b/" target="_blank">
            <FaLinkedinIn className="fill-white/50 dark:fill-black hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            @eduardomendesdeveloper
          </h2>

          <p className="text-ellipsis text-white/40 dark:text-black/60">Linkedin</p>
        </motion.li>

        <motion.li
          className="rounded-xl border dark:border-black/60 border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link href="mailto:eduardo12mendes2016@gmail.com" target="_blank">
            <MdEmail className="fill-white/50 dark:fill-black hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            contato@eduardomendes
          </h2>

          <p className="text-ellipsis text-white/40 dark:text-black/60">E-mail</p>
        </motion.li>

        <motion.li
          className="rounded-xl border dark:border-black/60 border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="https://github.com/eduardomendes117" target="_blank">
            <RiGithubLine className="fill-white/50 dark:fill-black hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            @eduardomendes117
          </h2>

          <p className="text-ellipsis text-white/40 dark:text-black/60">Github</p>
        </motion.li>
      </section>
    </>
  );
}
