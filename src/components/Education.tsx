import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, FlaskConical, Map, Leaf } from "lucide-react";
import { education, training } from "@/data/siteData";

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
  item: { year: string; title: string; institution: string; description: string; icon: string };
  index: number;
  side: "left" | "right";
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex items-start gap-4 mb-8"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-10 h-10 rounded-full gradient-forest flex items-center justify-center text-primary-foreground">
          {iconMap[item.icon]}
        </div>
        {/* Vertical connector line */}
        <div className="w-0.5 flex-1 bg-border mt-2" />
      </div>
      <div className="flex-1 pb-2">
        <span className="text-xs font-body text-accent font-semibold">{item.year}</span>
        <h4 className="font-heading text-lg font-semibold text-foreground">{item.title}</h4>
        <p className="font-body text-sm text-primary font-medium">{item.institution}</p>
        <p className="font-body text-sm text-muted-foreground mt-1">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-muted" ref={ref}>
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
