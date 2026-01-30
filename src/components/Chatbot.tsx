import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! 👋 I'm Vineesha's AI Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // ----------------------------------------------------------
  // VINEESHA'S RESUME DATA
  // ----------------------------------------------------------
  const RESUME_DATA = `
NAME: Chinthakuntla Vineesha
ROLE: Software Engineering Fresher | AI Developer Intern
LOCATION: Hyderabad, Telangana, India
EMAIL: vineeshachinthakuntla@gmail.com
PHONE: +91 7075026667

────────────────────────────
SUMMARY
Software Engineering fresher with strong fundamentals in:
• Python, Backend Development
• Django, Flask, FastAPI
• Databases (MySQL, SQLite)
• AI/ML (TensorFlow, PyTorch, Keras)
• RAG-based chatbots
• Voice detection & Speech emotion detection
• Face authentication systems
• Real-time applications with Celery, Redis

────────────────────────────
SKILLS
Technical: Python, C, Django, Flask, FastAPI, HTML, CSS, Bootstrap, MySQL, Git
ML/AI: TensorFlow, PyTorch, Keras, Scikit-learn, OpenCV, LangChain, Hugging Face
Soft Skills: Leadership, Team Collaboration, Time Management, Communication

────────────────────────────
EXPERIENCE
AI Developer Intern — Lanciere Technologies (Aug 2024 – Present)
• Developing RAG-based chatbots, AI attendance tracker
• Building voice detection, face authentication systems
• Speech emotion detection models
• Contributing to production-ready AI solutions

────────────────────────────
PROJECTS

1. Edubot – AI-Powered Student Assistant
• React.js + FastAPI chatbot for student queries
• SBERT + FAISS semantic search
• Multilingual support (English, Telugu, Hindi)

2. HemoHub – Blood Inventory Optimizer
• Django + SQLite blood bank management
• Celery, Redis, Django Channels for real-time alerts
• Automated expiry tracking

3. Speech Emotion Detection
• LSTM model with TensorFlow, Keras
• MFCC features via Librosa
• Flask web deployment

────────────────────────────
EDUCATION
B.E. in Information Technology
MVSRC Engineering College — 2025
CGPA: 8.88/10

Intermediate — Sri Gayatri Junior College — 2021
Percentage: 97.6%

────────────────────────────
CERTIFICATIONS
• AI-ML Virtual Internship (2023)
• Data Science Master Virtual Internship (2024)
  `;

  // ----------------------------------------------------------
  // Helper: Extract section by keyword
  // ----------------------------------------------------------
  const extractSection = (keyword: string) => {
  const lower = keyword.toLowerCase();

  // ----------------------------------------------------------
  // SPECIFIC PROJECT SEARCHES
  // ----------------------------------------------------------
  if (lower.includes("edubot") || lower.includes("student assistant") || lower.includes("chatbot project")) {
    return `📚 **Edubot – AI-Powered Student Assistant**
- React.js + FastAPI chatbot for student queries
- SBERT + FAISS semantic search
- Multilingual support (English, Telugu, Hindi)`;
  }

  if (lower.includes("hemohub") || lower.includes("blood") || lower.includes("inventory")) {
    return `🩸 **HemoHub – Blood Inventory Optimizer**
- Django + SQLite blood bank management
- Celery, Redis, Django Channels for real-time alerts
- Automated expiry tracking`;
  }

  if (lower.includes("speech emotion") || lower.includes("emotion detection") || lower.includes("emotion recognition")) {
    return `🎤 **Speech Emotion Detection**
- LSTM model with TensorFlow, Keras
- MFCC features via Librosa
- Flask web deployment`;
  }

  // ALL PROJECTS (only when asking generally)
  if (lower.includes("project") || lower.includes("built") || lower.includes("developed") || lower.includes("portfolio work")) {
    return `Here are Vineesha's projects:

📚 **1. Edubot – AI-Powered Student Assistant**
- React.js + FastAPI chatbot for student queries
- SBERT + FAISS semantic search
- Multilingual support (English, Telugu, Hindi)

🩸 **2. HemoHub – Blood Inventory Optimizer**
- Django + SQLite blood bank management
- Celery, Redis, Django Channels for real-time alerts
- Automated expiry tracking

🎤 **3. Speech Emotion Detection**
- LSTM model with TensorFlow, Keras
- MFCC features via Librosa
- Flask web deployment

💡 Ask me about any specific project for more details!`;
  }

  // ----------------------------------------------------------
  // OTHER SECTIONS 
  // ----------------------------------------------------------
  if (lower.includes("skill"))
    return RESUME_DATA.match(/SKILLS([\s\S]*?)────────────────────────────/)?.[1] || "No skills found.";

  if (lower.includes("experience") || lower.includes("work") || lower.includes("intern"))
    return RESUME_DATA.match(/EXPERIENCE([\s\S]*?)────────────────────────────/)?.[1] || "No experience found.";

  if (lower.includes("education") || lower.includes("college") || lower.includes("degree"))
    return RESUME_DATA.match(/EDUCATION([\s\S]*?)────────────────────────────/)?.[1] || "No education found.";

  if (lower.includes("summary") || lower.includes("about") || lower.includes("who"))
    return RESUME_DATA.match(/SUMMARY([\s\S]*?)────────────────────────────/)?.[1] || "No summary found.";

  if (lower.includes("certif"))
    return RESUME_DATA.match(/CERTIFICATIONS([\s\S]*)/)?.[1] || "No certifications found.";

  // Contact information
  if (lower.includes("contact") || lower.includes("reach"))
    return "📧 Email: vineeshachinthakuntla@gmail.com\n📱 Phone: +91 7075026667\n📍 Location: Hyderabad, Telangana, India";

  if (lower.includes("email") || lower.includes("mail"))
    return "📧 vineeshachinthakuntla@gmail.com";

  if (lower.includes("phone") || lower.includes("number") || lower.includes("mobile"))
    return "📱 +91 7075026667";

  if (lower.includes("linkedin"))
    return "🔗 LinkedIn: linkedin.com/in/chinthakuntla-vineesha";

  if (lower.includes("github") || lower.includes("git"))
    return "💻 GitHub: github.com/vineeshareddyy";

  if (lower.includes("location") || lower.includes("city") || lower.includes("where"))
    return "📍 Hyderabad, Telangana, India";

  if (lower.includes("name"))
    return "👩‍💻 Chinthakuntla Vineesha";

  if (lower.includes("role") || lower.includes("position") || lower.includes("job") || lower.includes("title"))
    return "💼 Software Engineering Fresher | AI Developer Intern at Lanciere Technologies";

  return "I couldn't find that information. Try asking about: skills, projects (Edubot, HemoHub, Speech Emotion), experience, education, contact, or certifications.";
};
  
  // ----------------------------------------------------------
  // SMART GREETING ENGINE
  // ----------------------------------------------------------
  const offlineAnswer = (question: string) => {
    const q = question.toLowerCase().trim();

    // Basic greetings
    const greetingWords = ["hi", "hello", "hey", "hii", "hai", "hlo", "yo", "sup", "what's up", "whats up"];

    if (greetingWords.includes(q)) {
      return "Hello! 👋 How can I support you today?";
    }

    // Time-based greetings
    if (q.includes("good morning")) {
      return "Good morning! ☀️ How can I assist you today?";
    }

    if (q.includes("good afternoon")) {
      return "Good afternoon! 😊 What can I help you with?";
    }

    if (q.includes("good evening")) {
      return "Good evening! 🌙 How can I support you?";
    }

    if (q.includes("good night")) {
      return "Good night! 🌙 Take care. Let me know if you need anything before you sleep.";
    }

    // Conversation
    if (q.includes("how are you")) {
      return "I'm doing great! 😊 Thanks for asking. How can I help you today?";
    }

    // Resume-related questions
    return extractSection(question);
  };

  // ----------------------------------------------------------
  // SEND MESSAGE
  // ----------------------------------------------------------
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");
    setIsLoading(true);

    try {
      const reply = offlineAnswer(input);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: reply },
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Auto scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // ----------------------------------------------------------
  // UI
  // ----------------------------------------------------------
  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] rounded-2xl shadow-2xl bg-background flex flex-col z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h3 className="font-semibold">Vineesha's AI Assistant</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-4 py-2 rounded-xl ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
          </ScrollArea>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask something about Vineesha…"
                disabled={isLoading}
              />
              <Button onClick={sendMessage} disabled={!input.trim() || isLoading} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
