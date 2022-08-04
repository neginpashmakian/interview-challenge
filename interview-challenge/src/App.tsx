import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil'
import RecoilNexus from 'recoil-nexus'
import { appRoutes } from 'routes'
import './core/styles/globals.css'
function App() {
  const element = useRoutes(appRoutes)
  return (
    <div className="App">
      <ToastContainer />
      <RecoilRoot>
        <RecoilNexus />
        {/* <AuthInitializer /> */}
        {element}
      </RecoilRoot>
    </div>
  )
}

export default App
