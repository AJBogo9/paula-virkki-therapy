import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Logo */}
          <span className="font-serif text-lg text-foreground">
            Paula Virkki
          </span>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-sans">
            © {currentYear} Paula Virkki. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};
