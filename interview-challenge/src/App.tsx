import { useRoutes } from 'react-router-dom'
import { appRoutes } from 'routes'
import './core/styles/globals.css'
function App() {
  const element = useRoutes(appRoutes)
  return <div className="App">{element}</div>
}

export default App
