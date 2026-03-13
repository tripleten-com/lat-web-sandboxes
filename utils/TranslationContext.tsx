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
    greeting: "Hello World",
  },
  es: {
    greeting: "Hola mundo",
  },
};

export const TranslationContext = createContext<Translation | null>(null);