import { createContext } from 'react';


interface Translation {
  greeting: string;
}

interface Translations {
  en: Translation;
  es: Translation;
}

export const translations: Translations = {
  en: {
    greeting: 'Hello, my name is',
  },
  es: {
    greeting: 'Hola, mi nombre es',
  },
};

export const TranslationContext = createContext<Translation | null>(null);