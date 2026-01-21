import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink, TreePine } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

  const bookingUrl = 'https://vaestoliitonterapia.fi/terapeutit/virkki-paula/';

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Nature-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-secondary" />
      
      {/* Decorative trees */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg
          className="w-full h-32 text-primary"
          viewBox="0 0 1440 128"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64 L80,70 C160,76,320,88,480,80 C640,72,800,44,960,38 C1120,32,1280,48,1360,56 L1440,64 L1440,128 L0,128 Z"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <TreePine className="w-8 h-8 text-primary" />
          </div>

          {/* Section header */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            {t('contact.title')}
          </h2>

          {/* Intro text */}
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-10">
            {t('contact.intro')}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-forest-light text-primary-foreground font-sans font-medium px-8 py-6 text-base rounded-full shadow-nature transition-all hover:shadow-medium hover:-translate-y-0.5"
          >
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              {t('contact.cta')}
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>

          {/* Via text */}
          <p className="mt-6 text-sm text-muted-foreground font-sans">
            {t('contact.via')}
          </p>
        </div>
      </div>
    </section>
  );
};
