import { useState } from "react";
import { Mic, MicOff, Clock, BarChart3 } from "lucide-react";
import avatarMedium from "@/assets/avatar-medium.png";

const InterviewMockup = () => {
  const [isRecording] = useState(true);
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral-light text-coral text-sm font-medium mb-4">
            Interview Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Your Interview, Reimagined
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A clean, distraction-free interface designed to help you focus on what matters - your answers
          </p>
        </div>
        
        {/* Mockup Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-strong border border-border/50 overflow-hidden">
            {/* Header bar */}
            <div className="bg-secondary/50 px-6 py-4 flex items-center justify-between border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-gold/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4" />
                <span>08:24 remaining</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Marketing Manager</span>
                <span className="px-2 py-0.5 rounded bg-teal-light text-teal text-xs font-medium">Medium</span>
              </div>
            </div>
            
            {/* Main content */}
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-[1fr,2fr] gap-10 items-start">
                {/* Interviewer section */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img 
                      src={avatarMedium} 
                      alt="Interviewer Marcus"
                      className="w-36 h-36 rounded-2xl object-cover shadow-medium"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-success flex items-center justify-center shadow-soft">
                      <div className="w-3 h-3 rounded-full bg-primary-foreground animate-pulse" />
                    </div>
                  </div>
                  <h4 className="font-serif text-xl text-foreground">Marcus</h4>
                  <p className="text-sm text-muted-foreground">Your Interviewer</p>
                  
                  {/* Audio visualizer */}
                  <div className="mt-6 flex justify-center gap-1">
                    {[...Array(7)].map((_, i) => (
                      <div 
                        key={i}
                        className="w-1 bg-teal rounded-full animate-pulse"
                        style={{ 
                          height: `${Math.random() * 24 + 8}px`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Question section */}
                <div className="space-y-6">
                  <div className="bg-secondary/30 rounded-2xl p-6 border border-border/50">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Current Question</p>
                    <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
                      "Tell me about a time when you had to handle multiple competing priorities. How did you approach it?"
                    </p>
                  </div>
                  
                  {/* User response indicator */}
                  <div className="bg-coral-light/30 rounded-2xl p-6 border border-coral/20">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Your Response</p>
                      <span className="text-xs text-coral font-medium">Recording...</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className={`w-14 h-14 rounded-full flex items-center justify-center shadow-medium transition-all ${
                        isRecording ? "bg-coral animate-pulse-soft" : "bg-muted"
                      }`}>
                        {isRecording ? (
                          <Mic className="w-6 h-6 text-primary-foreground" />
                        ) : (
                          <MicOff className="w-6 h-6 text-muted-foreground" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div className="h-10 flex items-center gap-0.5">
                          {[...Array(40)].map((_, i) => (
                            <div 
                              key={i}
                              className="w-1 bg-coral/40 rounded-full animate-pulse"
                              style={{ 
                                height: `${Math.random() * 32 + 4}px`,
                                animationDelay: `${i * 0.05}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hints */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-gold-light/30 border border-gold/20">
                    <BarChart3 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Tip:</span> Use the STAR method - describe the Situation, Task, Action, and Result for structured answers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="bg-secondary/30 px-6 py-4 flex items-center justify-center gap-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Questions asked</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground">Remaining</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-teal">Good</p>
                <p className="text-xs text-muted-foreground">Pace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewMockup;