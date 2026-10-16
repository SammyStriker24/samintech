import { Heart, BrainCircuit, Gamepad2, HelpCircle, PenTool, Bug, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const projects = [
  { icon: Heart, title: "Blood Donation Application", desc: "Connecting people with eligible blood donors based on the blood group they need.", tags: ["Web application", "Healthcare"], href: "https://roktodeojibonbachao.vercel.app/" },
  { icon: BrainCircuit, title: "Rice Leaf Disease Detection", desc: "Automated rice leaf disease identification using deep learning and the MobileNetV2 model.", tags: ["Machine learning", "MobileNetV2"] },
  { icon: Gamepad2, title: "Multiplayer Unreal Engine Game", desc: "Multiplayer systems and server-to-client communication with Blueprints, developed iteratively to an MVP.", tags: ["Unreal Engine", "Blueprints"] },
  { icon: HelpCircle, title: "Python Quiz App", desc: "A Python quiz application with interface design explored in Figma.", tags: ["Python", "Figma"] },
  { icon: PenTool, title: "UI / UX Design", desc: "Interface concepts and user experience designs created in Figma.", tags: ["Figma", "Interface design"] },
  { icon: Bug, title: "PHP Bug Tracking", desc: "A PHP project focused on recording and tracking software bugs.", tags: ["PHP", "Database"] },
];
const ProjectsSection = () => (
  <section id="projects" className="section-space"><div className="container px-6">
    <p className="eyebrow">04 / SELECTED WORK</p><div className="flex flex-wrap items-end justify-between gap-5"><h2 className="section-title">Built with curiosity.<br /><span className="text-primary">Made to be useful.</span></h2><Button asChild variant="outline" className="rounded-full"><a href="https://github.com/SammyStriker24" target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight /></a></Button></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">{projects.map((project, i) => <article key={project.title} className="group border border-border rounded-lg p-7 hover:border-primary transition-colors flex flex-col">
      <div className="flex justify-between items-center mb-8"><project.icon className="text-primary" size={30} /><span className="text-xs text-muted-foreground">0{i + 1}</span></div>
      <h3 className="font-heading text-xl font-semibold mb-3">{project.title}</h3><p className="text-sm text-muted-foreground leading-7 mb-6 flex-1">{project.desc}</p>
      <div className="flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="text-xs bg-muted px-2 py-1 rounded">{tag}</span>)}</div>
      {project.href && <Button asChild variant="link" className="justify-start px-0 mt-4 text-primary"><a href={project.href} target="_blank" rel="noreferrer">View live project <ArrowUpRight /></a></Button>}
    </article>)}</div>
  </div></section>
);
export default ProjectsSection;
