import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage/30 rounded-full blur-3xl animate-gentle-pulse" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-lake-light/40 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-moss/20 rounded-full blur-2xl animate-float" />
        
        {/* Subtle forest silhouette */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-48 text-primary/5"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160 L60,170 C120,180,240,200,360,185 C480,170,600,120,720,130 C840,140,960,210,1080,220 C1200,230,1320,180,1380,155 L1440,130 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Photo placeholder */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-sage to-secondary border-4 border-background shadow-nature flex items-center justify-center">
              <span className="text-4xl md:text-5xl text-primary/40 font-serif">PV</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-4 animate-fade-in-up">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary font-serif mb-3 animate-fade-in-delayed">
            {t('hero.subtitle')}
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8 animate-fade-in-delayed" style={{ animationDelay: '0.4s' }}>
            <MapPin size={18} className="text-moss" />
            <span className="font-sans text-sm tracking-wide">{t('hero.location')}</span>
          </div>

          {/* Tagline */}
          <p className="font-serif text-xl sm:text-2xl text-foreground/80 italic mb-10 animate-fade-in-delayed" style={{ animationDelay: '0.5s' }}>
            "{t('hero.tagline')}"
          </p>

          {/* CTA */}
          <div className="animate-fade-in-delayed" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-forest-light text-primary-foreground font-sans font-medium px-8 py-6 text-base rounded-full shadow-nature transition-all hover:shadow-medium hover:-translate-y-0.5"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to content"
          >
            <ArrowDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};
