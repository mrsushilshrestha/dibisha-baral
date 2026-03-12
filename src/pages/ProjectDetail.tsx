import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/siteData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar solid />
      {/* Gradient Hero */}
      <section className="pt-16 gradient-forest">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground font-body text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-accent font-body text-sm font-semibold uppercase tracking-wider"
          >
            {project.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-primary-foreground/80 max-w-2xl"
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-20 mb-12">
          {project.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-5 shadow-md border border-border text-center"
            >
              <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Progress */}
        <div className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Overall Progress</h3>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full rounded-full gradient-amber"
            />
          </div>
          <p className="text-right font-body text-sm text-accent font-semibold mt-1">{project.progress}%</p>
        </div>

        {/* Details */}
        <div className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3">About This Project</h3>
          <p className="font-body text-muted-foreground leading-relaxed">{project.details}</p>
        </div>

        {/* Milestones */}
        <div className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Milestones</h3>
          <div className="relative pl-8 border-l-2 border-border">
            {project.milestones.map((ms, i) => (
              <motion.div
                key={ms.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`absolute -left-[25px] top-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    ms.completed ? "gradient-forest text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {ms.completed ? <Check className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                </div>
                <div className="ml-6">
                  <h4 className="font-heading text-base font-semibold text-foreground">{ms.title}</h4>
                  <p className="font-body text-sm text-muted-foreground">{ms.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" /> Team Members
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-4 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full gradient-forest mx-auto mb-3 flex items-center justify-center text-primary-foreground font-heading text-xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <p className="font-body text-sm font-semibold text-foreground">{member.name}</p>
                <p className="font-body text-xs text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
