import { Sparkles, Brain, Globe, Database, Bot, Cloud } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Application Development",
      description: "Building production-ready AI applications including RAG chatbots, voice detection, and emotion detection systems",
    },
    {
      icon: Globe,
      title: "Backend Development",
      description: "Full-stack web applications using Django, Flask, and FastAPI with REST APIs",
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Database modeling, CRUD operations, and data handling with MySQL and SQLite",
    },
    {
      icon: Bot,
      title: "Chatbot Development",
      description: "AI-powered chatbots with semantic search, multilingual support, and context-aware responses",
    },
    {
      icon: Sparkles,
      title: "Speech & Audio Processing",
      description: "Speech emotion detection, MFCC feature extraction, and audio-based applications",
    },
    {
      icon: Cloud,
      title: "Real-time Systems",
      description: "Background tasks and real-time notifications using Celery, Redis, and Django Channels",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Services I <span className="text-gradient">Offer</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover-glow transition-all group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
