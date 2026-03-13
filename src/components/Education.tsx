import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, FlaskConical, Map, Leaf } from "lucide-react";
import { education, training } from "@/data/siteData";
import BotanicalDecor from "@/components/BotanicalDecor";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  FlaskConical: <FlaskConical className="w-5 h-5" />,
  Map: <Map className="w-5 h-5" />,
  Leaf: <Leaf className="w-5 h-5" />,
};

const TimelineItem = ({
  item,
  index,
  side,
}: {
  item: { year: string; title: string; institution: string; description?: string; icon: string };
  index: number;
  side: "left" | "right";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-6 group mb-10"
    >
      <div className="flex flex-col items-center flex-shrink-0 relative">
        <div className="w-12 h-12 rounded-full gradient-forest flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 border-4 border-muted">
          {iconMap[item.icon]}
        </div>
        {/* Vertical connector line - improved visibility */}
        <div className="absolute top-12 bottom-[-40px] w-1 bg-gradient-to-b from-forest/30 via-forest/10 to-transparent left-1/2 -translate-x-1/2" />
      </div>
      <div className="flex-1 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-body text-accent font-bold px-2 py-1 bg-accent/10 rounded-full">{item.year}</span>
        </div>
        <h4 className="font-heading text-xl font-bold text-foreground leading-tight">{item.title}</h4>
        <p className="font-body text-sm text-primary font-semibold mt-1 opacity-90">{item.institution}</p>
        <div className="w-12 h-0.5 bg-accent/30 my-3 rounded-full" />
        <p className="font-body text-sm text-foreground/80 leading-relaxed italic">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="education" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Academic Background</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Education & Training</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent" /> Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} side="left" />
            ))}
          </div>

          {/* Training Column */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-accent" /> Training & Certificates
            </h3>
            {training.map((item, i) => (
              <TimelineItem key={item.title} item={item} index={i} side="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
