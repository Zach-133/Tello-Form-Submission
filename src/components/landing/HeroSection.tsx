import { Button } from "@/components/ui/button";
import { Mic, Target, Sparkles, ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  const features = [
    { icon: Mic, label: "Real-time Practice" },
    { icon: Target, label: "Tailored Questions" },
    { icon: Sparkles, label: "Instant Feedback" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero pt-28 overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Feature badges & branding */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-light border border-coral/20">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse-soft" />
              <span className="text-sm font-medium text-coral-dark">Now in early access</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Tello – Your
              <br />
              <span className="text-gradient-coral">Interview Coach</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Practice makes perfect. Get personalised interview questions tailored to your field and skill level. Build confidence and land your dream job, without fear of failure.
            </p>
            
            {/* Feature badges */}
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                {features.slice(0, 2).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card shadow-soft border border-border/50 hover:shadow-medium transition-shadow duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-coral-light flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-coral" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {features.slice(2).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card shadow-soft border border-border/50 hover:shadow-medium transition-shadow duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-coral-light flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-coral" />
                    </div>
                    <span className="font-medium text-sm text-foreground">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button variant="coral" size="xl" className="group shadow-[0_0_20px_hsl(var(--coral)/0.4)] hover:shadow-[0_0_30px_hsl(var(--coral)/0.6)] transition-shadow duration-300">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="coral-outline" size="xl">
                See How It Works
              </Button>
            </div>
          </div>
          
          {/* Right - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroIllustration} 
                alt="Interview coaching illustration" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-medium border border-border/50 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success-light flex items-center justify-center">
                  <span className="text-success text-lg font-bold">↑</span>
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">87%</p>
                  <p className="text-xs text-muted-foreground">Success rate boost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
