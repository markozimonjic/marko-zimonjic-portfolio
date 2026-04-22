import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-24 border-t border-border bg-card/30" id="about">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-border flex-grow" />
              <h2 className="text-sm font-mono text-primary uppercase tracking-widest px-4">System Architecture</h2>
              <div className="h-px bg-border flex-grow" />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
                Java developer with <span className="text-foreground">5+ years</span> of professional experience designing, building, and maintaining backend systems in <span className="text-foreground">Spring Boot, microservices, and event-driven architectures</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
                Proven track record across telecom (Croatian Telecom, Telenor) and banking (Raiffeisenbank Austria) — environments where <span className="text-foreground border-b border-primary/50">uptime, observability, and correctness are non-negotiable</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mt-6">
                Currently at PHIRT, building a React-based web application with CMS functionality on top of a Java backend. Comfortable across the full backend stack and pragmatic about frontend when needed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}