import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-coral flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">T</span>
              </div>
              <span className="font-serif text-xl text-primary-foreground">Tello</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your AI interview coach. Practise with confidence, improve with data.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "How It Works", "Training Ground"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Interview Tips", "STAR Method Guide", "Blog", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-primary-foreground/80 mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2025 Tello. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-coral" /> for jobseekers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
