import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.credentials', href: '#credentials' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="font-serif text-xl md:text-2xl font-medium text-primary tracking-tight"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Paula Virkki
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.href)}
                  className="py-3 px-4 text-left text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {t(link.key)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
