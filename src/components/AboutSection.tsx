import { GraduationCap, Camera, Languages } from "lucide-react";
const education = [
  { title: "BRAC University", degree: "Bachelor’s in Computer Science · CGPA 2.55", period: "Jun 2021 — Oct 2026" },
  { title: "BIAM Model School & College, Dhaka", degree: "Higher Secondary Certificate · GPA 5.00", period: "Mar 2018 — Jun 2020" },
  { title: "Motijheel Ideal School & College, Dhaka", degree: "Secondary School Certificate · GPA 5.00", period: "Jan 2016 — Feb 2018" },
];
const AboutSection = () => (
  <section id="about" className="section-space"><div className="container px-6 grid md:grid-cols-2 gap-14 lg:gap-24">
    <div><p className="eyebrow">01 / ABOUT ME</p><h2 className="section-title">A curious mind.<br /><span className="text-primary">A practical approach.</span></h2>
      <p className="text-muted-foreground leading-8 mt-7">I’m Muhammed Irtiza Mahmood, an aspiring software developer studying Computer Science at BRAC University. I enjoy exploring how technology can solve real problems — from connecting blood donors to identifying rice leaf diseases.</p>
      <p className="text-muted-foreground leading-8 mt-4">Alongside coding, I create designs in Figma and Canva, manage spreadsheet data, and share educational topics on YouTube.</p>
      <div className="flex gap-3 items-center mt-7 text-sm"><Languages size={18} className="text-primary" /> Bangla (native) · English (fluent)</div>
      <div className="flex gap-3 items-center mt-4 text-sm"><Camera size={18} className="text-primary" /> Portrait photography, badminton, basketball & cricket</div>
    </div>
    <div><div className="flex items-center gap-3 mb-7"><GraduationCap className="text-primary" /><h3 className="font-heading text-2xl font-semibold">Education</h3></div>
      {education.map(item => <div key={item.title} className="border-t border-border py-6"><p className="text-xs text-primary mb-2">{item.period}</p><h4 className="font-heading font-semibold">{item.title}</h4><p className="text-sm text-muted-foreground mt-2">{item.degree}</p></div>)}
    </div>
  </div></section>
);
export default AboutSection;
