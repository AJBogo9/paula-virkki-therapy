import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Shield, Clock, TrendingUp } from 'lucide-react';

interface CredentialItemProps {
  icon: React.ReactNode;
  text: string;
}

const CredentialItem = ({ icon, text }: CredentialItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/30">
      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <span className="font-sans text-foreground/90">{text}</span>
    </div>
  );
};

export const CredentialsSection = () => {
  const { t } = useLanguage();

  const credentials = [
    { icon: <Award className="w-5 h-5 text-primary" />, key: 'credentials.licensed' },
    { icon: <Shield className="w-5 h-5 text-primary" />, key: 'credentials.valvira' },
    { icon: <Clock className="w-5 h-5 text-primary" />, key: 'credentials.experience' },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, key: 'credentials.continuous' },
  ];

  return (
    <section id="credentials" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/10 via-transparent to-lake-light/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
              {t('credentials.title')}
            </h2>
          </div>

          {/* Credentials list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((credential) => (
              <CredentialItem
                key={credential.key}
                icon={credential.icon}
                text={t(credential.key)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
