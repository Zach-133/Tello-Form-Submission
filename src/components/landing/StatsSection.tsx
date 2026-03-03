import { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: "4x",
      label: "More likely to succeed",
      description: "Candidates who practise mock interviews are 4x more likely to receive job offers",
    },
    {
      value: "93%",
      label: "Employers value soft skills",
      description: "Of employers consider communication and soft skills essential or very important when hiring",
    },
    {
      value: "91%",
      label: "Feel more confident",
      description: "Jobseekers report higher confidence after structured practice sessions",
    },
    {
      value: "50%",
      label: "Fewer interview nerves",
      description: "Regular practice reduces anxiety and improves natural communication",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Interview Practice Works.
            <br />
            <span className="text-coral">The Data Proves It.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Studies show that mock interviews are one of the most effective ways to prepare. 
            Tello gives you that experience, without the judgement.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 md:p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className={`font-serif text-4xl md:text-5xl lg:text-6xl text-coral mb-3 transition-all duration-1000 ${
                isVisible ? "scale-100" : "scale-50"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                {stat.value}
              </p>
              <p className="font-semibold text-base md:text-lg mb-2">{stat.label}</p>
              <p className="text-xs md:text-sm text-primary-foreground/60 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default StatsSection;
