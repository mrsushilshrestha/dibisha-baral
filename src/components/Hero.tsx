import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-fern.jpg";

const Hero = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Tropical fern forest" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 gradient-hero-overlay" />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-4"
      >
         Researcher
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
      >
        Dibisha Baral
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto"
      >
        Biotechnology Student | Medicinal Plant Research |Black Turmeric (Curcuma caesia) Antidiabetic Study
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-body font-semibold text-sm hover:bg-amber-light transition-colors"
      >
        About Me
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
    </motion.div>
  </section>
);

export default Hero;
