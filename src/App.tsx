import { useState } from 'react'
import Profile from './components/Profile'
import './App.css'


const App = () => {
  const [id, setId] = useState('')
  const [isProfileRendered, setIsProfileRendered] = useState(false)

  return (
    <div className="app">
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Introduce un id (entre 1 y 10): </label>
        
        <input 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
        />
      </form>
      
      {isProfileRendered && <Profile id={id} />}
      <button onClick={() => setIsProfileRendered(!isProfileRendered)}>
        mostrar/ocultar perfil
      </button>
    </div>
  );
};

export default App;
