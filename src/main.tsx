import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { TranslationContext, translations } from './contexts/TranslationContext'
import { UserContext, type User } from './contexts/CurrentUserContext'

function Main() {
  const [lang, setLang] = useState<keyof typeof translations>('en');
  const [currentUser, setCurrentUser] = useState<User>({name: 'Andres'})

  return (
    <StrictMode>
      <TranslationContext.Provider value={translations[lang]}>
        <UserContext.Provider value={currentUser}>
          <App />  
        </UserContext.Provider>
      </TranslationContext.Provider>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("No se encontró el elemento #root");
}

createRoot(rootElement).render(<Main />);