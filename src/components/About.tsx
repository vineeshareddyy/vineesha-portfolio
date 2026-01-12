import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
            <h3 className="text-2xl font-bold mb-4">Bio</h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineering fresher with strong fundamentals in Python, backend development, 
              databases, and web technologies. Currently working as an AI Developer Intern at 
              Lanciere Technologies, gaining hands-on experience building production-ready AI 
              applications including RAG-based chatbots, voice detection systems, face authentication, 
              and emotion detection models. Passionate about creating scalable solutions and 
              continuously learning new technologies.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-foreground font-medium">
                    B.E. in Information Technology
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Maturi Venkata Subba Rao Engineering College
                  </p>
                  <p className="text-muted-foreground text-sm">2025 • CGPA: 8.88/10</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-glow transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-foreground">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
