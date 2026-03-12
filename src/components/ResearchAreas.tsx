import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Users, Shield, BarChart3 } from "lucide-react";
import { researchAreas } from "@/data/siteData";

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

const ResearchAreas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Research Focus Areas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-xl p-6 border border-border"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full gradient-forest" />
              <div className="ml-4">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary mb-4">
                  {iconMap[area.icon]}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
