import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ptBr from './locales/pt-BR.json';
import enUs from './locales/en.json';

const resources = {
    'pt-BR': {
      translation: ptBr,
    },
    'en': {
      translation: enUs,
    },
  };

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
