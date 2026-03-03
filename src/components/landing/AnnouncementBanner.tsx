import { useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-coral text-primary-foreground">
      <div className="container mx-auto px-6 py-2.5 flex items-center justify-center gap-3 relative">
        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
          <Sparkles className="w-4 h-4 shrink-0 animate-pulse-soft" />
          <span className="hidden sm:inline">🚀 Early Access is now open - be the first to try Tello!</span>
          <span className="sm:hidden">🚀 Early Access is open!</span>
          <a 
            href="#waitlist"
            className="inline-flex items-center gap-1 underline underline-offset-2 hover:no-underline font-semibold ml-1"
          >
            Join the waitlist
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-primary-foreground/10 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
