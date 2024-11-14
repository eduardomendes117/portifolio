import Link from "next/link";
import Switch from "@/components/Interruptor";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
            href="/portfolio"
          >
            Portifólio
          </Link>

          <Switch />
        </nav>
      </header>

      <section className="max-w-screen-xl mx-7 2xl:mx-auto my-20 flex gap-10 justify-center flex-wrap">
        <li className="rounded-xl border border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3">
          <Link href="www.linkedin.com/in/eduardomendesdeveloper" target="_blank">
            <FaLinkedinIn className="fill-white/50 hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            @eduardomendesdeveloper
          </h2>

          <p className="text-ellipsis text-white/40">Linkedin</p>
        </li>

        <li className="rounded-xl border border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3">
          <Link href="mailto:eduardo12mendes2016@gmail.com" target="_blank">
            <MdEmail className="fill-white/50 hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            contato@eduardomendes
          </h2>

          <p className="text-ellipsis text-white/40">E-mail</p>
        </li>

        <li className="rounded-xl border border-white/50 hover:border-white w-96 h-64 p-5 flex flex-col justify-center items-center gap-3">
          <Link href="https://github.com/eduardomendes117" target="_blank">
            <RiGithubLine className="fill-white/50 hover:fill-white text-4xl" />
          </Link>
          <h2 className="font-bold text-lg flex justify-between">
            @eduardomendes117
          </h2>

          <p className="text-ellipsis text-white/40">Github</p>
        </li>
      </section>
    </>
  );
}
