import { Check, X, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started with interview practice",
      features: [
        { text: "3 interviews per month", included: true },
        { text: "5, 10, or 15-minute sessions", included: true },
        { text: "3 interviewer personalities", included: true },
        { text: "Basic scorecard with 4 criteria", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "CV & job description upload", included: false },
        { text: "Company research", included: false },
        { text: "Training ground", included: false },
        { text: "Progress tracking", included: false },
      ],
      cta: "Start Free",
      variant: "outline" as const,
      popular: false,
    },
    {
      name: "PRO",
      price: "$19",
      period: "per month",
      description: "Everything you need to land your dream job",
      features: [
        { text: "Unlimited interviews", included: true },
        { text: "5, 10, or 15-minute sessions", included: true },
        { text: "3 interviewer personalities", included: true },
        { text: "Detailed scorecard with insights", included: true },
        { text: "Industry-specific questions", included: true },
        { text: "CV & job description upload", included: true },
        { text: "In-depth company research", included: true },
        { text: "Training ground with STAR method", included: true },
        { text: "Full progress tracking & analytics", included: true },
      ],
      cta: "Get Early Access",
      variant: "coral" as const,
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-light text-gold text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and upgrade when you're ready to unlock your full potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.popular 
                  ? "border-coral shadow-strong shadow-coral/10" 
                  : "border-border/50 shadow-soft hover:shadow-medium"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-coral text-primary-foreground text-sm font-medium flex items-center gap-1.5">
                  <Crown className="w-4 h-4" />
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-success-light flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
                {plan.popular && <Zap className="w-4 h-4 ml-1" />}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Trust note */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          Join the waitlist now to lock in early-bird pricing. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;