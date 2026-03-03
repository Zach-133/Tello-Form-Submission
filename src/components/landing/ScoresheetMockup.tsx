import { TrendingUp, MessageCircle, Target, Lightbulb, Award } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

const ScoresheetMockup = () => {
  const overallScore = 78;
  
  const criteria = [
    { 
      name: "Problem-Solving", 
      weight: "40%", 
      score: 82, 
      color: "coral",
      comment: "Excellent analytical approach. Consider providing more concrete examples from past experiences."
    },
    { 
      name: "Technical Knowledge", 
      weight: "30%", 
      score: 75, 
      color: "teal",
      comment: "Good foundational knowledge. Recommended to stay up to date with industry trends."
    },
    { 
      name: "Communication & Structure", 
      weight: "15%", 
      score: 80, 
      color: "gold",
      comment: "Clear articulation. Using the STAR method more consistently would improve structure."
    },
    { 
      name: "Relevance & Depth", 
      weight: "15%", 
      score: 72, 
      color: "success",
      comment: "Relevant answers but could dive deeper into specific details and outcomes."
    },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-teal";
    return "text-coral";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-success";
    if (score >= 60) return "bg-teal";
    return "bg-coral";
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-success-light text-success text-sm font-medium mb-4">
            Detailed Feedback
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Know Exactly Where You Stand
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Receive a comprehensive scorecard with weighted criteria and actionable improvement suggestions
          </p>
        </div>
        
        {/* Scoresheet Mockup */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-strong border border-border/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-coral p-8 text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-primary-foreground/70 text-sm mb-1">Interview Complete</p>
                  <h3 className="font-serif text-3xl mb-2">Marketing Manager Interview</h3>
                  <p className="text-primary-foreground/80">15-minute session • Medium difficulty • Marcus</p>
                </div>
                <div className="text-center bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/70 mb-1">Overall Score</p>
                  <p className="font-serif text-5xl">{overallScore}</p>
                  <p className="text-sm text-primary-foreground/70">out of 100</p>
                </div>
              </div>
            </div>
            
            {/* Criteria breakdown */}
            <div className="p-8 md:p-10">
              <h4 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-coral" />
                Score Breakdown
              </h4>
              
              <div className="space-y-6">
                {criteria.map((criterion, index) => (
                  <div key={index} className="bg-secondary/30 rounded-xl p-5 border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`font-semibold text-lg ${getScoreColor(criterion.score)}`}>
                          {criterion.score}
                        </span>
                        <span className="font-medium text-foreground">{criterion.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          {criterion.weight}
                        </span>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden mb-3">
                      <div 
                        className={`h-full rounded-full ${getScoreBg(criterion.score)} transition-all duration-1000`}
                        style={{ width: `${criterion.score}%` }}
                      />
                    </div>
                    
                    {/* Comment */}
                    <div className="flex items-start gap-2">
                      <MessageCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                      <p className="text-sm text-muted-foreground">{criterion.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Improvement suggestions */}
              <div className="mt-10">
                <h4 className="font-serif text-xl text-foreground mb-6 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-gold" />
                  Improvement Suggestions
                </h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Practice using the STAR method for behavioral questions",
                    "Research current industry trends before interviews",
                    "Prepare 3-5 specific examples from past experiences",
                    "Focus on quantifying results and impact"
                  ].map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gold-light/30 border border-gold/20">
                      <span className="w-6 h-6 rounded-full bg-gold text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-sm text-foreground">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Achievement badge */}
              <div className="mt-10 bg-gradient-to-r from-gold-light to-coral-light rounded-2xl p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Award className="w-12 h-12 text-gold" />
                  <div>
                    <p className="font-serif text-xl text-foreground">Great Progress!</p>
                    <p className="text-muted-foreground">You scored higher than 65% of users in your field</p>
                  </div>
                </div>
                <TrendingUp className="w-8 h-8 text-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoresheetMockup;