import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <>
      <div className="absolute bottom-0 p-5">
        <ul className="flex justify-center items-center gap-5 text-2xl">
          <Link className="rounded-full p-2 dark:hover:bg-black/5 hover:bg-white/10" href="https://github.com/eduardomendes117" target="_blank">
            <RiGithubLine />
          </Link>
          <Link className="rounded-full p-2 dark:hover:bg-black/5 hover:bg-white/10" href="https://www.linkedin.com/in/eduardo-mendes-26538030b/" target="_blank">
            <FaLinkedinIn />
          </Link>
        </ul>
        <p className="py-2 text-xs text-center">
          &copy; {ano} MIT License .todos os direitos reservados
        </p>
      </div>
    </>
  );
}
