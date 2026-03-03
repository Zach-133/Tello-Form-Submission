import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-coral/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="text-sm">Limited early access spots available</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Ready to Ace Your
            <br />
            <span className="text-coral">Next Interview?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Join the waitlist and be the first to experience Tello when we launch. 
            Early supporters get exclusive benefits.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-coral transition-colors"
                required
              />
              <Button variant="coral" size="xl" type="submit" className="group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          ) : (
            <div className="bg-primary-foreground/10 rounded-2xl p-8 border border-primary-foreground/20 max-w-md mx-auto">
              <CheckCircle2 className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="font-serif text-2xl mb-2">You're on the list!</h3>
              <p className="text-primary-foreground/70">
                We'll notify you as soon as Tello is ready. Thank you for your support!
              </p>
            </div>
          )}
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {["Early access", "Exclusive pricing", "Priority support"].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/70">
                <CheckCircle2 className="w-4 h-4 text-coral" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;