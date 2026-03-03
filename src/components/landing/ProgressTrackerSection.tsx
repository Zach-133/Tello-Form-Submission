import { TrendingUp, Calendar, Award, Target, Flame } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, ComposedChart } from "recharts";

const ProgressTrackerSection = () => {
  // Sample progress data
  const progressData = [
    { date: "Week 1", overall: 58, problemSolving: 55, technical: 60, communication: 62, relevance: 55 },
    { date: "Week 2", overall: 62, problemSolving: 60, technical: 63, communication: 65, relevance: 58 },
    { date: "Week 3", overall: 65, problemSolving: 68, technical: 62, communication: 68, relevance: 62 },
    { date: "Week 4", overall: 70, problemSolving: 72, technical: 68, communication: 72, relevance: 68 },
    { date: "Week 5", overall: 74, problemSolving: 78, technical: 72, communication: 75, relevance: 71 },
    { date: "Week 6", overall: 78, problemSolving: 82, technical: 75, communication: 80, relevance: 72 },
  ];

  const achievements = [
    { icon: Flame, label: "5 Day Streak", value: "Keep it up!", color: "coral" },
    { icon: Target, label: "Sessions Done", value: "12", color: "teal" },
    { icon: TrendingUp, label: "Improvement", value: "+20 pts", color: "success" },
    { icon: Award, label: "Best Score", value: "82", color: "gold" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-light text-teal text-sm font-medium mb-4">
            PRO Feature
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Track Your Growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visualise your improvement over time with detailed analytics and gamified milestones
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-5 shadow-soft border border-border/50 text-center hover:shadow-medium transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
                  achievement.color === "coral" ? "bg-coral-light" :
                  achievement.color === "teal" ? "bg-teal-light" :
                  achievement.color === "success" ? "bg-success-light" :
                  "bg-gold-light"
                }`}>
                  <achievement.icon className={`w-6 h-6 ${
                    achievement.color === "coral" ? "text-coral" :
                    achievement.color === "teal" ? "text-teal" :
                    achievement.color === "success" ? "text-success" :
                    "text-gold"
                  }`} />
                </div>
                <p className="font-bold text-xl text-foreground">{achievement.value}</p>
                <p className="text-sm text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
          
          {/* Main chart */}
          <div className="bg-card rounded-3xl shadow-strong border border-border/50 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-border/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-foreground mb-1">Performance Over Time</h3>
                  <p className="text-muted-foreground">Your scores across all 4 criteria</p>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Last 6 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={progressData}>
                    <defs>
                      <linearGradient id="overallGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(18, 75%, 65%)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(18, 75%, 65%)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(30, 15%, 88%)" />
                    <XAxis 
                      dataKey="date" 
                      tick={{ fill: 'hsl(25, 15%, 45%)', fontSize: 12 }}
                      axisLine={{ stroke: 'hsl(30, 15%, 88%)' }}
                    />
                    <YAxis 
                      domain={[40, 100]}
                      tick={{ fill: 'hsl(25, 15%, 45%)', fontSize: 12 }}
                      axisLine={{ stroke: 'hsl(30, 15%, 88%)' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(30, 20%, 99%)', 
                        border: '1px solid hsl(30, 15%, 88%)',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px -4px rgba(0,0,0,0.08)'
                      }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="overall" 
                      fill="url(#overallGradient)"
                      stroke="hsl(18, 75%, 65%)"
                      strokeWidth={3}
                      name="Overall Score"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="problemSolving" 
                      stroke="hsl(175, 45%, 45%)" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(175, 45%, 45%)', strokeWidth: 0 }}
                      name="Problem-Solving"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="technical" 
                      stroke="hsl(42, 85%, 55%)" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(42, 85%, 55%)', strokeWidth: 0 }}
                      name="Technical"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="communication" 
                      stroke="hsl(145, 55%, 45%)" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(145, 55%, 45%)', strokeWidth: 0 }}
                      name="Communication"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="grid grid-cols-3 border-t border-border/50">
              <div className="p-6 text-center border-r border-border/50">
                <p className="text-3xl font-bold text-coral">+34%</p>
                <p className="text-sm text-muted-foreground">Overall improvement</p>
              </div>
              <div className="p-6 text-center border-r border-border/50">
                <p className="text-3xl font-bold text-teal">12</p>
                <p className="text-sm text-muted-foreground">Practice sessions</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-3xl font-bold text-success">78</p>
                <p className="text-sm text-muted-foreground">Current score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTrackerSection;