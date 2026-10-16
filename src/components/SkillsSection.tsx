import { Code2, Database, BrainCircuit, Monitor, Terminal, PenTool, FileSpreadsheet, Youtube } from "lucide-react";
const skills = [
  { name: "Python", detail: "Applications & automation", icon: Code2 },
  { name: "Machine learning", detail: "Deep learning · MobileNetV2", icon: BrainCircuit },
  { name: "Web development", detail: "Practical web applications", icon: Monitor },
  { name: "PHP & databases", detail: "Bug tracking & data management", icon: Database },
  { name: "Ubuntu Linux", detail: "Basic Linux fundamentals", icon: Terminal },
  { name: "UI / UX design", detail: "Figma · Canva", icon: PenTool },
];
const SkillsSection = () => (
  <section id="skills" className="section-space"><div className="container px-6">
    <p className="eyebrow">02 / MY TOOLKIT</p><div className="flex flex-col md:flex-row md:items-end justify-between gap-5"><h2 className="section-title">The tools behind <span className="text-primary">the work.</span></h2><p className="text-sm text-muted-foreground max-w-xs leading-6">Technical foundations, creative thinking, and a habit of learning something new.</p></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">{skills.map(({ name, detail, icon: Icon }) => <div key={name} className="border border-border rounded-lg p-6 flex items-start gap-4 hover:border-primary transition-colors"><Icon className="text-primary shrink-0" size={24} /><div><h3 className="font-heading font-semibold">{name}</h3><p className="text-xs text-muted-foreground mt-2">{detail}</p></div></div>)}</div>
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm text-muted-foreground"><span className="flex gap-2 items-center"><FileSpreadsheet size={16} /> Word, Excel, PowerPoint & Google Sheets</span><span className="flex gap-2 items-center"><Youtube size={16} /> Educational YouTube content</span></div>
  </div></section>
);
export default SkillsSection;
