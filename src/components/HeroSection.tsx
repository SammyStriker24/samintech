import heroPortrait from "@/assets/hero-portrait.png";
import cv from "@/assets/irtiza-cv.pdf.asset.json";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section id="home" className="pt-20">
    <div className="container px-6">
      <div className="hero-grid grid lg:grid-cols-[1.1fr_1fr_0.4fr] gap-10 items-center py-12 lg:py-16">
        <div className="animate-fade-in">
          <p className="text-xs font-medium text-muted-foreground mb-7 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /> ASPIRING SOFTWARE DEVELOPER</p>
          <p className="font-heading text-2xl mb-3">Hello, I’m</p>
          <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">Md. <span className="text-primary">Irtiza.</span></h1>
          <p className="text-lg text-muted-foreground leading-8 max-w-md mt-6">Curious by nature.<br />A builder by passion.</p>
          <p className="text-sm text-muted-foreground leading-7 max-w-sm mt-4">Turning ideas into useful software with Python, machine learning, and web development.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild variant="secondary" size="lg" className="rounded-full"><a href="#projects">Explore my work <ArrowUpRight /></a></Button>
            <Button asChild variant="outline" size="lg" className="rounded-full"><a href={cv.url} target="_blank" rel="noreferrer"><Download /> My CV</a></Button>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <Button asChild variant="ghost" size="icon"><a href="https://github.com/SammyStriker24" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button>
            <Button asChild variant="ghost" size="icon"><a href="https://www.linkedin.com/in/muhammed-irtiza-mahmood-samin-7105b03bb" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
            <span className="text-xs text-muted-foreground border-l border-border pl-4">Based in Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="relative max-w-sm w-full mx-auto">
          <div className="absolute -top-4 -right-3 text-accent font-heading text-5xl" aria-hidden="true">✳</div>
          <img src={heroPortrait} alt="Md. Irtiza Mahmood" className="portrait-frame w-full aspect-[4/5] object-cover object-top" />
          <div className="absolute bottom-5 left-4 right-4 bg-background/95 border border-border rounded-lg px-4 py-3 flex items-center justify-between"><span className="text-xs font-medium">Muhammed Irtiza Mahmood</span><ArrowUpRight className="text-primary" size={18} /></div>
        </div>
        <div className="flex lg:flex-col justify-between gap-8 lg:text-right border-t lg:border-t-0 border-border pt-6 lg:pt-0">
          <div><p className="text-4xl font-heading font-semibold">6<span className="text-primary">+</span></p><p className="text-xs text-muted-foreground mt-2">Projects built</p></div>
          <div><p className="text-4xl font-heading font-semibold">CS</p><p className="text-xs text-muted-foreground mt-2">BRAC University</p></div>
          <div><p className="text-3xl font-heading font-semibold text-primary">Always</p><p className="text-xs text-muted-foreground mt-2">Learning & building</p></div>
        </div>
      </div>
      <a href="#about" className="inline-flex items-center gap-3 text-xs text-muted-foreground pb-8"><ArrowDown size={16} /> A little more about me</a>
    </div>
    <div className="bg-accent text-accent-foreground py-5"><div className="container px-6 flex flex-wrap items-center justify-between gap-4 text-sm font-heading font-medium"><span>Python</span><span aria-hidden="true">✳</span><span>Machine Learning</span><span aria-hidden="true">✳</span><span>Web Development</span><span aria-hidden="true">✳</span><span>UI / UX Design</span></div></div>
  </section>
);
export default HeroSection;
