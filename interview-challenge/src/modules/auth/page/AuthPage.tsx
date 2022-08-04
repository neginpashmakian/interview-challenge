import { Outlet } from 'react-router-dom'
import './auth-page.scss'
export const AuthPage = () => {
  return (
    <div className="login-page">
      <Outlet />
    </div>
  )
}
