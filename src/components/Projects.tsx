import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/siteData";
import BotanicalDecor from "@/components/BotanicalDecor";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="p-6">
        <span className="text-xs font-body font-semibold text-accent uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className="font-heading text-xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
        <p className="font-body text-sm text-foreground/75 mb-4">{project.description}</p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs font-body mb-1">
            <span className="text-foreground/60">Progress</span>
            <span className="text-primary font-semibold">{project.progress}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${project.progress}%` } : {}}
              transition={{ duration: 1.2, delay: 0.3 + index * 0.15 }}
              className="h-full rounded-full gradient-forest"
            />
          </div>
        </div>

        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-1 text-sm font-body font-semibold text-accent hover:text-amber-light transition-colors"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="projects" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Research</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
