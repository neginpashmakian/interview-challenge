import { RouteObject } from 'react-router'
import { authRoutes } from 'routes/auth.routes'
import { privateRoutes } from 'routes/private.routes'
import { AuthInitializer } from 'modules/auth/components'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthInitializer />,
  },
  { ...authRoutes },
  { ...privateRoutes },
]
