import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

export default function Navbar() {
  return (
    <header className="flex justify-between py-5 px-7 lg:px-10">
      {/* <Image src={Logo} alt="Logo" /> */}

      <nav className="flex gap-5 text-white/50">
        <Link className="hover:text-white" href="/portfolio">Portifólio</Link>
        <Link className="hover:text-white" href="/contact">Contato</Link>
      </nav>
    </header>
  );
}
