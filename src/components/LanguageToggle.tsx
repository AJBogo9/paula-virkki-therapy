import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="font-sans text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors"
    >
      <span className={language === 'fi' ? 'font-semibold text-primary' : ''}>FI</span>
      <span className="mx-1.5 text-muted-foreground">/</span>
      <span className={language === 'en' ? 'font-semibold text-primary' : ''}>EN</span>
    </Button>
  );
};
