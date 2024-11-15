"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import Switch from "@/components/Interruptor";

export default function Home() {
  return (
    <>
      <header className="fixed w-full flex justify-between items-center py-3 px-5 lg:px-10">
        <span></span>

        <Switch />
      </header>

      <section className="flex flex-col items-center justify-center h-svh mx-5 rounded-3xl">
        <Navbar />

        <motion.h1
          className="py-5 text-5xl lg:text-6xl font-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DEV FRONTEND
        </motion.h1>

        <motion.h2
          className="border border-white/10 rounded-full py-1 px-3 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Eduardo Mendes
        </motion.h2>

        <Footer />
      </section>

      <Particles />
    </>
  );
}
