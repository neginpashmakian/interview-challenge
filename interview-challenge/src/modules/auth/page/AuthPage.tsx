import { useGetCurrentUserAPI } from 'API/hooks/auth/useGetCurrentUserAPI'
import { Outlet, useNavigate } from 'react-router-dom'
import { routeNames } from 'routes/model'
import './auth-page.scss'
export const AuthPage = () => {
  const navigate = useNavigate()

  useGetCurrentUserAPI({
    retry: false,
    onSuccess: () => {
      // redirect to dashboard page if user is  valid
      navigate(routeNames.private.article.base)
    },
  })
  return (
    <div className="login-page">
      <Outlet />
    </div>
  )
}
