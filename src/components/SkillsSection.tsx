import { Code, Database, Brain, Monitor, Terminal, FileText, Youtube, Languages } from "lucide-react";

const skills = [
  { name: "Python", icon: Code, level: 85 },
  { name: "Machine Learning", icon: Brain, level: 70 },
  { name: "Web Development", icon: Monitor, level: 75 },
  { name: "PHP & Database", icon: Database, level: 70 },
  { name: "Ubuntu Linux", icon: Terminal, level: 65 },
  { name: "UI/UX Design (Figma)", icon: FileText, level: 60 },
];

const otherSkills = [
  { icon: Languages, label: "Bangla (Native), English (Fluent)" },
  { icon: FileText, label: "Word, Excel, PowerPoint" },
  { icon: Youtube, label: "YouTube Teaching" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          Technical proficiencies and tools I work with
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon size={20} className="text-primary" />
                </div>
                <span className="font-heading font-semibold">{skill.name}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-right">{skill.level}%</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {otherSkills.map((skill) => (
            <div
              key={skill.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border text-sm"
            >
              <skill.icon size={16} className="text-primary" />
              <span className="text-muted-foreground">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
