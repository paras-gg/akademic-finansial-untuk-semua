import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header = ({ onSearch, searchQuery }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-primary">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gradient">akademic</h1>
              <p className="text-[10px] text-muted-foreground leading-tight max-w-[200px] hidden md:block">
                Percuma saja menetapkan tujuan jika Anda tidak berusaha mencapainya
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#beranda" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="#artikel" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Artikel
            </a>
            <a href="#video" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Video
            </a>
            <a href="#tentang" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Tentang
            </a>
          </nav>

          {/* Search & Menu */}
          <div className="flex items-center gap-3">
            {/* Search Desktop */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  className="w-64 h-10 pl-10 pr-4 bg-muted/50 border border-border/30 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Search Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-muted/50 border border-border/30 rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              <a href="#beranda" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all">
                Beranda
              </a>
              <a href="#artikel" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all">
                Artikel
              </a>
              <a href="#video" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all">
                Video
              </a>
              <a href="#tentang" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-lg transition-all">
                Tentang
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
