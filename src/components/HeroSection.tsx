import heroPortrait from "@/assets/hero-portrait.png";
import { ArrowDown, Code, Brain, Globe } from "lucide-react";

const stats = [
  { value: "5+", label: "Projects Done" },
  { value: "3+", label: "Years Learning" },
  { value: "100%", label: "Dedication" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left - Text */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Code size={16} className="text-primary" />
              <span>Software Engineer</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Hello, I'm{" "}
              <span className="text-primary">Md. Irtiza</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Passionate about Python, Machine Learning, Web Development, and building impactful software solutions.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
              >
                <Globe size={20} />
              </a>
            </div>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors pt-8"
            >
              <ArrowDown size={16} />
              Scroll Down
            </a>
          </div>

          {/* Center - Image */}
          <div className="lg:col-span-1 flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute inset-0 rounded-full bg-primary/20 scale-110" />
              {/* Decorative lines */}
              <div className="absolute -top-4 -right-4 w-32 h-32">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-1.5 rounded-full bg-primary"
                    style={{
                      width: `${60 - i * 8}px`,
                      top: `${i * 12}px`,
                      right: `${i * 6}px`,
                      transform: "rotate(-30deg)",
                    }}
                  />
                ))}
              </div>
              <img
                src={heroPortrait}
                alt="Md. Irtiza portrait"
                className="relative z-10 w-72 h-auto rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right - Stats */}
          <div className="lg:col-span-1 flex flex-col items-center lg:items-end gap-8 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <div className="text-4xl font-heading font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <Brain key={i} size={16} className="text-primary" />
              ))}
              <span className="text-xs text-muted-foreground ml-2">Continuous Learner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
