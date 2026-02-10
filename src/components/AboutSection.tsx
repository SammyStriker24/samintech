import { GraduationCap, Briefcase } from "lucide-react";

const experience = [
  {
    title: "Company, Location — Job Title",
    period: "MONTH 20XX - PRESENT",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
  },
  {
    title: "Company, Location — Job Title",
    period: "MONTH 20XX - MONTH 20XX",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
  },
  {
    title: "Company, Location — Job Title",
    period: "MONTH 20XX - MONTH 20XX",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.",
  },
];

const education = [
  {
    title: "BRAC University, Dhaka — B.Sc. in Computer Science",
    period: "June 2021 - June 2026",
    desc: "Minor: In English",
  },
  {
    title: "School Name, Location — Degree",
    period: "MONTH 20XX - MONTH 20XX",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-16">
          A dedicated software engineer studying Computer Science at BRAC University, passionate about building technology that matters.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                  <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-primary font-medium mt-1">{item.period}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
                  <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-primary font-medium mt-1">{item.period}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
