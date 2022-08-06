import { useGetCurrentUserAPI } from 'API/hooks/auth/useGetCurrentUserAPI'
import { AppBar, Sidebar } from 'modules/layout'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { routeNames } from 'routes'

import './dashboard-layout.scss'

export const DashboardLayout: React.FC = () => {

  const navigate = useNavigate()


  useGetCurrentUserAPI({
    retry: false,
    onError: () => {
      // redirect to auth page if user is not valid
      navigate(routeNames.auth.login)
    }
  })


  return (
    <div className="dashboard-layout">
      <AppBar />
      <div className="dashboard-layout__container">
        <Sidebar />
        <main className="dashboard-layout__main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
