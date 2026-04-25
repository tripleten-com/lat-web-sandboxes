import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { TranslationContext, translations } from './contexts/TranslationContext'

function Main() {
  const [lang, setLang] = useState<keyof typeof translations>('es');
  return (
    <StrictMode>
      <TranslationContext.Provider value={translations[lang]}>
        <App />
      </TranslationContext.Provider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento #root");
}

createRoot(rootElement).render(<Main />);
