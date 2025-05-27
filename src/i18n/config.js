import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // Detects language from localStorage, browser, etc.
  .use(initReactI18next) // Connects i18n instance to React
  .init({
    resources: {
      english: { translation: en },
      french: { translation: fr },
      spanish: { translation: es },
    },
    fallbackLng: 'english', // Default language when no match is found
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // Store selected language in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: false, // Avoid suspense fallback on first load
    },
  });

export default i18n;
