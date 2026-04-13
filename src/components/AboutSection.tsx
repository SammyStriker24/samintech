import { GraduationCap, Briefcase, Heart, Dumbbell, Camera } from "lucide-react";

const education = [
  {
    title: "BRAC University, Bangladesh",
    degree: "B.Sc. in Computer Science",
    period: "Oct 2020 - Sep 2026",
    desc: "Bachelor's degree in Computer Science with practical experience in Python, ML, and Web Development.",
  },
  {
    title: "BIAM Model School & College, Dhaka",
    degree: "HSC",
    period: "Mar 2018 - Jun 2020",
    desc: "GPA: 5.00",
  },
  {
    title: "Motijheel Ideal School & College, Dhaka",
    degree: "SSC",
    period: "Jan 2016 - Feb 2018",
    desc: "GPA: 5.00",
  },
];

const hobbies = [
  { icon: Dumbbell, label: "Badminton, Basketball, Cricket" },
  { icon: Camera, label: "Portrait Photography" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          An aspiring Computer Science graduate from BRAC University with practical experience in Python, Machine Learning, Web Development, and a passion for building impactful technology.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
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
                  <p className="text-xs text-primary font-medium mt-1">{item.degree} • {item.period}</p>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies & Volunteering */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold">Hobbies & Interests</h3>
            </div>
            <div className="space-y-4">
              {hobbies.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h4 className="font-heading font-semibold mb-2">Volunteering</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actively involved in community volunteering, teaching educative topics on YouTube, and contributing to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
