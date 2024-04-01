"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { motion, useScroll } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="pt-48 flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-10 items-center bg-gradient-to-b from-white from-45% via-[#FAE8B2] to-pistachio pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-center text-balance md:max-w-[600px] lg:max-w-[900px]"
      >
        Streamlined order management for furniture
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xs sm:text-sm md:text-base text-center text-balance text-black/80 font-light md:max-w-[600px] lg:max-w-[900px]"
      >
        Pistachio helps furniture companies keep orders on track with real-time
        status updates, intelligent workflow automation, <br /> and AI-powered
        error detection–without needing to switch systems.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-x-2"
      >
        <Button>Get Started</Button>
        <Button
          variant="ghost"
          className="hover:bg-transparent hover:text-neutral-700 group transition duration-100 ease-in-out"
        >
          Learn more
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="container relative w-full overflow-visible mt-6"
      >
        <div className="absolute inset-y-0 inset-x-8 bg-pistachio/50 blur-3xl" />
        <video
          loop
          muted
          autoPlay
          className="object-cover w-full h-full rounded-md relative"
        >
          <source
            src="https://framerusercontent.com/assets/CkrREJ6P4qt1A3YLSufakBJjFR8.mp4"
            type="video/mp4"
          />
        </video>
        <motion.div
          initial={{
            left: 32,
            right: "auto",
            opacity: 0,
          }}
          animate={{ left: "auto", right: 32, opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeIn",

            repeatDelay: 1,
          }}
          className="absolute h-px bg-gradient-to-r from-transparent to-pistachio -top-px w-20 md:w-36"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
