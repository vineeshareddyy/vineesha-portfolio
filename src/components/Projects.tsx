import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import eduAppImg from "@/assets/Edubot.jpg";
import videoTranscriptionImg from "@/assets/Hemohub.jpg";
import fakeNewsImg from "@/assets/Speech_emotion.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Edubot – AI-Powered Student Assistant",
      tech: "React.js, FastAPI, SBERT, FAISS, Google Generative AI, Deep Translator, gTTS",
      description:
        "Full-stack AI chatbot to automate student queries on admissions, fees, placements, and scholarships.",
      highlights: [
        "Implemented semantic search using SBERT embeddings with FAISS",
        "Integrated Google Generative AI for context-aware responses",
        "Enabled multilingual support (English, Telugu, Hindi) with voice/text input",
        "Built React.js frontend and FastAPI backend for seamless UX",
      ],
      image: eduAppImg,
      github: "https://github.com/vineeshareddyy/edubot",
    },
    {
      title: "HemoHub – Blood Inventory Optimizer",
      tech: "Django, SQLite, Bootstrap, Celery, Redis, Django Channels",
      description: "Comprehensive blood bank management system to track donor data and reduce wastage.",
      highlights: [
        "Built system to manage donor data, blood components, and expiry tracking",
        "Integrated Celery and Redis for asynchronous task processing",
        "Implemented real-time notifications using Django Channels",
        "Reduced blood wastage through automated expiry alerts",
      ],
      image: videoTranscriptionImg,
      github: "https://github.com/vineeshareddyy/hemohub",
    },
    {
      title: "Speech Emotion Detection",
      tech: "TensorFlow, Keras, Scikit-learn, Librosa, Flask, RAVDESS Dataset",
      description: "LSTM-based deep learning model to classify emotions from audio speech.",
      highlights: [
        "Built LSTM model for emotion classification from audio",
        "Extracted MFCC features using Librosa for preprocessing",
        "Achieved high accuracy on RAVDESS emotion dataset",
        "Deployed as interactive Flask web application",
      ],
      image: fakeNewsImg,
      github: "https://github.com/vineeshareddyy/speech-emotion-detection",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover-glow transition-all animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
             <div className="relative h-72 mb-4 -mx-6 -mt-6 overflow-hidden">
  <img 
    src={project.image} 
    alt={project.title}
    className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
  />
  <img 
    src={project.image} 
    alt={project.title}
    className="relative w-full h-full object-contain"
  />
</div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold pr-4">{project.title}</h3>
                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="text-xs text-primary mb-3 font-mono">{project.tech}</p>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="space-y-2">
                <p className="text-sm font-semibold">Key Contributions:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {project.github !== "#" && (
                <Button variant="secondary" size="sm" className="mt-4 w-full" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
