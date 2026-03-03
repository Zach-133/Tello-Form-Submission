import { 
  Clock, Briefcase, Users, Upload, Brain, Target, 
  TrendingUp, BookOpen, Shield, Zap, CheckCircle2
} from "lucide-react";
import avatarBeginner from "@/assets/avatar-beginner.png";
import avatarMedium from "@/assets/avatar-medium.png";
import avatarHard from "@/assets/avatar-hard.png";

const FeaturesSection = () => {
  const mvpFeatures = [
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Choose 5, 10, or 15-minute sessions that fit your schedule",
    },
    {
      icon: Briefcase,
      title: "Industry-Specific Questions",
      description: "Questions tailored to your exact job field and industry",
    },
    {
      icon: Shield,
      title: "Robust Grading Method",
      description: "Industry-approved scoring across 4 key criteria",
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Get detailed scores and improvement tips immediately",
    },
  ];

  const proFeatures = [
    {
      icon: Upload,
      title: "CV & Job Description Upload",
      description: "Get interviews personalised to your experience and target role",
    },
    {
      icon: Brain,
      title: "Company Research",
      description: "AI researches the company, recent news, and Glassdoor reviews",
    },
    {
      icon: Target,
      title: "Training Ground",
      description: "Practice individual questions using STAR framework",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Track your improvement over time with detailed analytics",
    },
  ];

  const interviewers = [
    {
      avatar: avatarBeginner,
      name: "Ally",
      difficulty: "Beginner",
      personality: "Friendly & Encouraging",
      description: "Perfect for first-timers. Patient, supportive, and helps build your confidence.",
      color: "success",
    },
    {
      avatar: avatarMedium,
      name: "Marcus",
      difficulty: "Medium",
      personality: "Professional & Fair",
      description: "Balanced approach with realistic expectations. Great for regular practice.",
      color: "teal",
    },
    {
      avatar: avatarHard,
      name: "Victoria",
      difficulty: "Hard",
      personality: "Demanding & Thorough",
      description: "Tough but fair. Prepares you for the most challenging interviewers.",
      color: "coral",
    },
  ];

  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral-light text-coral text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Everything You Need to
            <br />
            <span className="text-gradient-coral">Ace Your Interview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A robust platform with industry-checked grading, researched questions, and personalised coaching
          </p>
        </div>
        
        {/* Interviewer Avatars */}
        <div className="mb-24">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-4">
            Meet Your Interview Coaches
          </h3>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            Three unique personalities to match your practice needs - from gentle encouragement to rigorous challenge
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {interviewers.map((interviewer, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="relative inline-block mb-4">
                  <img 
                    src={interviewer.avatar} 
                    alt={interviewer.name}
                    className="w-28 h-28 rounded-full object-cover shadow-medium group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
                    interviewer.color === "success" ? "bg-success-light text-success" :
                    interviewer.color === "teal" ? "bg-teal-light text-teal" :
                    "bg-coral-light text-coral"
                  }`}>
                    {interviewer.difficulty}
                  </div>
                </div>
                <h4 className="font-serif text-xl text-foreground mb-1">{interviewer.name}</h4>
                <p className={`text-sm font-medium mb-3 ${
                  interviewer.color === "success" ? "text-success" :
                  interviewer.color === "teal" ? "text-teal" :
                  "text-coral"
                }`}>
                  {interviewer.personality}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interviewer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* MVP Features Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px bg-border flex-1 max-w-[100px]" />
            <span className="px-4 py-1.5 rounded-full bg-success-light text-success text-sm font-medium">
              Free Features
            </span>
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mvpFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-success-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* PRO Features Grid */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px bg-border flex-1 max-w-[100px]" />
            <span className="px-4 py-1.5 rounded-full bg-gold-light text-gold text-sm font-medium flex items-center gap-2">
              <Zap className="w-4 h-4" />
              PRO Features
            </span>
            <div className="h-px bg-border flex-1 max-w-[100px]" />
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {proFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-gold/20 hover:shadow-medium hover:border-gold/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-bl-full" />
                <div className="w-12 h-12 rounded-xl bg-gold-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Volume emphasis */}
        <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 shadow-medium border border-border/50">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-6">
                What Sets Tello Apart
              </h3>
              <ul className="space-y-4">
                {[
                  "Industry-approved grading methodology across 4 weighted criteria",
                  "500+ researched interview questions across 20+ industries",
                  "STAR framework training for structured, impactful answers",
                  "Personalised feedback based on your performance patterns",
                  "No fear of judgement, practice freely and build confidence"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-coral rounded-2xl p-8 text-primary-foreground">
                <BookOpen className="w-12 h-12 mb-4 opacity-80" />
                <h4 className="font-serif text-2xl mb-2">Training Ground</h4>
                <p className="opacity-80 mb-6">
                  Practice individual questions at your own pace. Master the STAR method with guided exercises.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary-foreground/20 text-sm">PRO Feature</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
