import { Heart, Brain, Gamepad2, HelpCircle, Palette } from "lucide-react";

const projects = [
  {
    icon: Heart,
    title: "Blood Donation Application",
    desc: "An application to find eligible donors to donate blood according to the proper blood group.",
    tags: ["App Development", "Healthcare"],
  },
  {
    icon: Brain,
    title: "Deep Learning Stem Cell Differentiation",
    desc: "Automated Stem Cell identification with deep learning, utilizing ML model and PCA.",
    tags: ["Machine Learning", "Deep Learning"],
  },
  {
    icon: Gamepad2,
    title: "Multiplayer Game (Unreal Engine)",
    desc: "Designed and implemented multiplayer systems, server to client communication using Blueprints. Agile approach.",
    tags: ["Game Dev", "Unreal Engine"],
  },
  {
    icon: HelpCircle,
    title: "Quiz App Python",
    desc: "An automated quiz Python app for interactive learning.",
    tags: ["Python", "Automation"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Designed UI/UX on Figma for various projects and concepts.",
    tags: ["Figma", "Design"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          A selection of projects I've built and contributed to
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <project.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
