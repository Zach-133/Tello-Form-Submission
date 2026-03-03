import { UserCircle, MessageSquare, BarChart3, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: UserCircle,
      title: "Set Your Preferences",
      description: "Choose your job field, interview duration (5-15 mins), and difficulty level. Select from three unique interviewer personalities.",
      color: "coral",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Practice Your Interview",
      description: "Engage in a realistic mock interview with our AI coach. Speak naturally and get industry-specific questions tailored to you.",
      color: "teal",
    },
    {
      number: "03",
      icon: BarChart3,
      title: "Get Your Scorecard",
      description: "Receive a detailed breakdown across 4 key criteria with personalised feedback and improvement suggestions.",
      color: "gold",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-light text-teal text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            How Tello Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to boost your interview confidence and performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-coral via-teal to-gold" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step number */}
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-medium transition-transform duration-300 group-hover:scale-110 ${
                  step.color === "coral" ? "bg-coral-light" :
                  step.color === "teal" ? "bg-teal-light" :
                  "bg-gold-light"
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.color === "coral" ? "text-coral" :
                    step.color === "teal" ? "text-teal" :
                    "text-gold"
                  }`} />
                </div>
              </div>
              
              {/* Card */}
              <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <span className="text-5xl font-serif text-muted-foreground/20">{step.number}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-6 md:hidden">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
