import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-[40px] left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-coral flex items-center justify-center shadow-coral">
            <span className="text-primary-foreground font-serif text-xl font-bold">T</span>
          </div>
          <span className="font-serif text-2xl text-foreground">Tello</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="default" className="text-muted-foreground hover:text-foreground" asChild>
            <Link to="/form">Developer Login</Link>
          </Button>
          <Button variant="coral" size="default">
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
