import {useState} from 'react';
import Profile from './Profile.tsx';
import { TranslationContext, translations } from '../contexts/translationContext';
import {type User, UserContext} from '../contexts/userContext'
import './App.css'


function App() {
  const [lang, setLang] = useState<keyof typeof translations>('es');
  const [currentUser, setCurrentUser] = useState<User>({name: 'Andres'});

  return (
    <div>
      <TranslationContext.Provider value={translations[lang]}>
        <UserContext.Provider value={currentUser}>
          <Profile/>
       </UserContext.Provider>
      </TranslationContext.Provider>
    </div>
  )
}

export default App
