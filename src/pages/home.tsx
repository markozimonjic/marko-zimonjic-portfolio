import Hero from "@/components/portfolio/hero";
import About from "@/components/portfolio/about";
import Skills from "@/components/portfolio/skills";
import Experience from "@/components/portfolio/experience";
import Footer from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}