import { AuthPage, LoginForm } from 'modules/auth'
import { RegisterForm } from 'modules/auth/components/registerForm'
import { RouteObject } from 'react-router'
import { routeNames } from 'routes/model'

export const authRoutes: RouteObject = {
  element: <AuthPage />,
  children: [
    {
      path: routeNames.auth.login,
      element: <LoginForm />,
    },
    {
      path: routeNames.auth.register,
      element: <RegisterForm />,
    },
  ],
}
