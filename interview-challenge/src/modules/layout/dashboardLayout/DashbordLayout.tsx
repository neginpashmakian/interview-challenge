import { AppBar, Sidebar } from 'modules/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'

import './dashboard-layout.scss'

export const DashboardLayout: React.FC = () => {
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
