import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Lightbulb, Brain, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  return (
    <Card 
      className="group bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-nature hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6 md:p-8">
        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-sage/50 transition-colors">
          {icon}
        </div>
        <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground font-sans leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Heart className="w-7 h-7 text-primary" />,
      titleKey: 'services.couple.title',
      descKey: 'services.couple.desc',
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-primary" />,
      titleKey: 'services.solution.title',
      descKey: 'services.solution.desc',
    },
    {
      icon: <Brain className="w-7 h-7 text-primary" />,
      titleKey: 'services.cognitive.title',
      descKey: 'services.cognitive.desc',
    },
    {
      icon: <User className="w-7 h-7 text-primary" />,
      titleKey: 'services.individual.title',
      descKey: 'services.individual.desc',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-lake-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-sage/30 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
