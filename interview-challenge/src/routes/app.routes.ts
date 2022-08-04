import { RouteObject } from 'react-router'
import { authRoutes } from 'routes/auth.routes'
import { privateRoutes } from 'routes/private.routes'

export const appRoutes: RouteObject[] = [
  { ...authRoutes },
  { ...privateRoutes },
]
