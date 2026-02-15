import './index.css'
import { createRoot } from 'react-dom/client'

interface UserProps {
  name: string;
  job: string;
  children?: React.ReactNode
}

function User (props: UserProps) {
  return (
    <div>
      <p>{props.name}</p>
      <h2>{props.job}</h2>
      {props.children}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <>
    <User name='Alejandro' job='Desarrollador Web'/>
    <User name='Laura' job='Cientifica de Datos'>
      <p>Primer hijo</p>
      <p>Segundo hijo</p>
    </User>
  </>
)
