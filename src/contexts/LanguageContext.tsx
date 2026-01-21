import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fi: {
    // Navigation
    'nav.about': 'Tietoa',
    'nav.services': 'Palvelut',
    'nav.credentials': 'Pätevyys',
    'nav.contact': 'Yhteystiedot',
    
    // Hero
    'hero.title': 'Paula Virkki',
    'hero.subtitle': 'Laillistettu Psykoterapeutti',
    'hero.location': 'Helsinki',
    'hero.tagline': 'Turvallinen tila kasvulle ja muutokselle',
    'hero.cta': 'Varaa aika',
    
    // About
    'about.title': 'Tervetuloa',
    'about.intro': 'Olen Paula Virkki, laillistettu psykoterapeutti Helsingistä. Uskon, että jokainen ihminen ansaitsee tulla kuulluksi ja ymmärretyksi.',
    'about.approach': 'Työskentelyni perustuu lämpimään, kunnioittavaan ja luottamukselliseen vuorovaikutukseen. Yhdistän työssäni eri terapiasuuntauksia asiakkaan tarpeiden mukaan.',
    'about.belief': 'Terapia on matka, jossa kuljemme yhdessä kohti parempaa ymmärrystä itsestäsi ja elämästäsi.',
    
    // Services
    'services.title': 'Palvelut',
    'services.subtitle': 'Tarjoan monipuolista terapiapalvelua yksilöille ja pareille',
    'services.couple.title': 'Pari- ja perheterapia',
    'services.couple.desc': 'Tukea parisuhteen haasteisiin, kommunikaation parantamiseen ja perheen sisäisten suhteiden vahvistamiseen.',
    'services.solution.title': 'Ratkaisukeskeinen terapia',
    'services.solution.desc': 'Tulevaisuuteen ja ratkaisuihin keskittyvä lähestymistapa, joka auttaa löytämään omat vahvuutesi ja voimavarasi.',
    'services.cognitive.title': 'Kognitiivinen terapia',
    'services.cognitive.desc': 'Ajatusten, tunteiden ja käyttäytymisen välisten yhteyksien tutkiminen ja muuttaminen positiivisempaan suuntaan.',
    'services.individual.title': 'Yksilöterapia aikuisille',
    'services.individual.desc': 'Henkilökohtainen tila käsitellä elämän haasteita, ahdistusta, masennusta tai muita mielen hyvinvointiin liittyviä kysymyksiä.',
    
    // Credentials
    'credentials.title': 'Pätevyys ja koulutus',
    'credentials.licensed': 'Laillistettu psykoterapeutti',
    'credentials.valvira': 'Valviran hyväksymä terapeutti',
    'credentials.experience': 'Pitkä kokemus terapiatyöstä',
    'credentials.continuous': 'Jatkuva ammatillinen kehittyminen',
    
    // Contact
    'contact.title': 'Ota yhteyttä',
    'contact.intro': 'Haluatko varata ajan tai saada lisätietoja? Löydät hintatiedot ja ajanvarauksen alla olevan linkin kautta.',
    'contact.cta': 'Varaa aika ja katso hinnat',
    'contact.via': 'Väestöliiton Terapiapalvelut',
    
    // Footer
    'footer.rights': 'Kaikki oikeudet pidätetään',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.credentials': 'Credentials',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Paula Virkki',
    'hero.subtitle': 'Licensed Psychotherapist',
    'hero.location': 'Helsinki',
    'hero.tagline': 'A safe space for growth and change',
    'hero.cta': 'Book Appointment',
    
    // About
    'about.title': 'Welcome',
    'about.intro': 'I am Paula Virkki, a licensed psychotherapist based in Helsinki. I believe that everyone deserves to be heard and understood.',
    'about.approach': 'My work is based on warm, respectful, and confidential interaction. I combine different therapeutic approaches according to each client\'s needs.',
    'about.belief': 'Therapy is a journey where we walk together towards a better understanding of yourself and your life.',
    
    // Services
    'services.title': 'Services',
    'services.subtitle': 'I offer comprehensive therapy services for individuals and couples',
    'services.couple.title': 'Couple and Family Therapy',
    'services.couple.desc': 'Support for relationship challenges, improving communication, and strengthening family relationships.',
    'services.solution.title': 'Solution-Focused Therapy',
    'services.solution.desc': 'A future and solution-oriented approach that helps you discover your own strengths and resources.',
    'services.cognitive.title': 'Cognitive Therapy',
    'services.cognitive.desc': 'Exploring and transforming the connections between thoughts, emotions, and behavior in a more positive direction.',
    'services.individual.title': 'Individual Therapy for Adults',
    'services.individual.desc': 'A personal space to address life challenges, anxiety, depression, or other mental wellbeing concerns.',
    
    // Credentials
    'credentials.title': 'Credentials & Training',
    'credentials.licensed': 'Licensed Psychotherapist',
    'credentials.valvira': 'Valvira-approved therapist',
    'credentials.experience': 'Extensive experience in therapy work',
    'credentials.continuous': 'Continuous professional development',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.intro': 'Would you like to book an appointment or get more information? You can find pricing and booking through the link below.',
    'contact.cta': 'Book Appointment & See Pricing',
    'contact.via': 'Väestöliitto Therapy Services',
    
    // Footer
    'footer.rights': 'All rights reserved',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fi' ? 'en' : 'fi'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
