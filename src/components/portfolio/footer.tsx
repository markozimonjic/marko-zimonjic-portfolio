import { motion } from "framer-motion";
import { GraduationCap, Languages, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
      <section className="py-24 border-t border-border" id="education">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Belgrade Business School</h4>
                <p className="text-muted-foreground">Bachelor's Degree in Information Technology</p>
                <p className="text-sm font-mono text-muted-foreground/70">2006 – 2010</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary rounded-lg text-primary">
                  <Languages className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-medium text-foreground">Serbian</span>
                  <span className="text-sm font-mono text-muted-foreground">Native</span>
                </li>
                <li className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="font-medium text-foreground">English</span>
                  <span className="text-sm font-mono text-muted-foreground">Fluent (B1-B2)</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/30 pt-24 pb-12 border-t border-border">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build.</h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Looking for a senior Java backend role — open to remote, hybrid, or on-site (Belgrade). Let's discuss how my experience can help your team ship reliable systems.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8">
                  <a href="mailto:marko.zimonjic@hotmail.com">
                    Email me directly
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8 border-border hover:bg-secondary">
                  <a href="/Marko_Zimonjic_CV.pdf" download="Marko_Zimonjic_CV.pdf">
                    Download Resumé
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-mono">
                <p>© {new Date().getFullYear()} Marko Zimonjic. All rights reserved.</p>
                <div className="flex gap-6">
                  <a href="https://www.linkedin.com/in/marko-zimonjic/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="mailto:marko.zimonjic@hotmail.com" className="hover:text-primary transition-colors">
                    marko.zimonjic@hotmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
}