import {useState} from "react";
import Profile from "./Profile.tsx";
import { TranslationContext, translations } from "../utils/translationContext";
import './App.css'


function App() {
  const [lang, setLang] = useState<keyof typeof translations>("en");

  return (
    <div>
      <TranslationContext.Provider value={translations[lang]}>
        <Profile/>
      </TranslationContext.Provider>
    </div>
  )
}

export default App
