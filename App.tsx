import './App.css'

const isDayLight: boolean = false

function App() {
  return (
    <>
      <h1 className='lesson-title'>TSX - Sintaxis básica</h1>
      <h2>Hola a todos!</h2>
      <img src="" alt="" />
      <h2>{isDayLight ? 'Buenos días' : 'Buenas noches'}</h2>
    </>
  )
}

export default App
