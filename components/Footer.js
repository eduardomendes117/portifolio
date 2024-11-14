import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <>
      <div className="absolute bottom-0 p-5">
        <ul className="flex justify-center items-center gap-5 text-2xl">
          <Link className="rounded-full p-2 hover:bg-black/50" href="">
            <RiGithubLine />
          </Link>
          <Link className="rounded-full p-2 hover:bg-black/50" href="">
            <FaLinkedinIn />
          </Link>
        </ul>
        <p className="py-2 text-center">
          &copy; {ano} MIT License .todos os direitos reservados
        </p>
      </div>
    </>
  );
}
