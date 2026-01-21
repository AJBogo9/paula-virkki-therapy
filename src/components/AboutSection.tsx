import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
              {t('about.title')}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-sans">
              {t('about.intro')}
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans">
              {t('about.approach')}
            </p>
            <p className="text-lg md:text-xl text-primary font-serif italic pt-4">
              "{t('about.belief')}"
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center mt-12 gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
            <Leaf className="w-5 h-5 text-sage" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
          </div>
        </div>
      </div>
    </section>
  );
};
