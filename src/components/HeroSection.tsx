import { TrendingUp, Wallet, Target, PiggyBank } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating Icons */}
      <div className="absolute top-1/3 left-10 md:left-20 animate-float opacity-20">
        <Wallet className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-1/2 right-10 md:right-20 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <TrendingUp className="w-20 h-20 text-accent" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float opacity-15" style={{ animationDelay: "1s" }}>
        <Target className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute top-1/4 right-1/3 animate-float opacity-15" style={{ animationDelay: "3s" }}>
        <PiggyBank className="w-14 h-14 text-accent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Platform Edukasi Finansial #1 Indonesia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Jadilah{" "}
            <span className="text-gradient">Cerdas Finansial</span>
            <br />
            Mulai dari Sekarang
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Pelajari budgeting, investasi, tabungan, dan pengelolaan keuangan pribadi dengan materi yang mudah dipahami dan gratis untuk semua.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#artikel">Mulai Belajar</a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#video">Tonton Video</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "50+", label: "Artikel Edukasi" },
              { value: "25+", label: "Video Pembelajaran" },
              { value: "10K+", label: "Pembaca Aktif" },
              { value: "100%", label: "Gratis" },
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 md:p-6 hover-glow">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
