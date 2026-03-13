import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImg from "@/assets/portrait.jpg";
import BotanicalDecor from "@/components/BotanicalDecor";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="about" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Portrait with tilted frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-80 md:w-80 md:h-96 border-2 border-accent rounded-lg transform rotate-3 top-4 left-1/2 -translate-x-1/2" />
          <img
            src={portraitImg}
            alt="Dibisha Baral"
            className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-lg shadow-lg -rotate-2"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate About Plant Science
          </h2>
          <div className="space-y-4 font-body text-foreground/75 leading-relaxed">
            <p>
              Biotechnology undergraduate with a strong interest in natural product research and phytochemistry.
              Currently conducting academic research on Black Turmeric (Curcuma caesia) to explore its potential
              antidiabetic properties through experimental analysis.
            </p>
            <p>
              Passionate about discovering the therapeutic value of medicinal plants
              and translating traditional knowledge into evidence-based scientific applications.
              My research interests include phytochemical extraction, natural drug discovery, and plant-based therapeutic development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
