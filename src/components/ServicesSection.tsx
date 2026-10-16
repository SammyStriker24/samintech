import { ArrowUpRight, Code2, BrainCircuit, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Code2, title: "Web development", text: "Web applications with thoughtful interfaces, PHP databases, and practical Python solutions." },
  { icon: BrainCircuit, title: "Machine learning", text: "Image classification and data-driven prototypes, from model experimentation to useful applications." },
  { icon: PenTool, title: "UI & visual design", text: "Figma interface concepts, Canva visuals, and clear digital experiences." },
];

const ServicesSection = () => (
  <section id="services" className="section-space bg-card">
    <div className="container px-6">
      <p className="eyebrow">03 / WHAT I CAN HELP WITH</p>
      <h2 className="section-title">Ideas into <span className="text-primary">working solutions.</span></h2>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {services.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-border pt-7">
          <Icon className="text-primary mb-6" size={28} />
          <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-7 mb-5">{text}</p>
          <Button asChild variant="link" className="px-0 text-foreground"><a href="#contact">Let's talk <ArrowUpRight /></a></Button>
        </div>)}
      </div>
    </div>
  </section>
);
export default ServicesSection;