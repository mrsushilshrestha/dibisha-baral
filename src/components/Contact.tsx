import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";
import BotanicalDecor from "@/components/BotanicalDecor";

const contactItems = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "9867678394",
    href: "tel:9867678394",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "dibisha@email.com",
    href: "mailto:dibisha@email.com",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "dibishabaral",
    href: "https://linkedin.com/in/dibishabaral",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "#",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding bg-muted relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="contact" />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Contact Me</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-forest flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="font-body text-xs text-foreground/60 uppercase tracking-wider">{item.label}</p>
                <p className="font-body text-sm font-semibold text-foreground">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
