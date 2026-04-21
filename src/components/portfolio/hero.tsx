import { motion } from "framer-motion";
import { Terminal, Download, Mail, Linkedin, MapPin, Phone, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 mb-6 text-sm font-mono">
            <Terminal className="w-4 h-4 text-primary" />
            <span>System Status: Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6">
            Marko <span className="text-primary">Zimonjic</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-mono mb-8 max-w-2xl leading-relaxed">
            Senior Java Backend Developer building reliable systems for telecom, banking, and fintech.
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary/80" />
              <span>Belgrade, Serbia (Remote / Hybrid / On-site)</span>
            </div>
            <div className="hidden sm:block text-muted-foreground/30">•</div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary/80" />
              <span>064/4372494</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <a href="/Marko_Zimonjic_CV.pdf" download="Marko_Zimonjic_CV.pdf">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-secondary">
              <a href="mailto:marko.zimonjic@hotmail.com">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                Email Me
              </a>
            </Button>
            <div className="flex items-center gap-2 ml-2">
              <a 
                href="https://www.linkedin.com/in/marko-zimonjic/" 
                target="_blank" 
                rel="norenoopener noreferrer"
                className="p-3 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}