"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import Switch from "@/components/Interruptor";

export default function Home() {
  return (
    <>
      <header className="fixed w-full flex justify-between items-center py-5 px-7 lg:px-10">
        <span></span>

        <Switch />
      </header>
      <section className="w-full flex flex-col items-center justify-center h-svh mx-5 rounded-3xl">
        <Navbar />
        <h1 className="p-5 text-5xl lg:text-6xl font-black">DEV FRONTEND</h1>
        <h2 className="border border-white/10 rounded-full py-1 px-3 backdrop-blur-sm">Eduardo Mendes</h2>
        <Footer />
      </section>
      <Particles />
    </>
  );
}
