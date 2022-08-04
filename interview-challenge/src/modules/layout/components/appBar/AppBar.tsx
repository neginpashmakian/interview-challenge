import React from 'react'
import './app-bar.scss'

export const AppBar: React.FC = () => {
  return (
    <header className="app-bar">
      <div className="app-bar__logo">Arvan Challenge</div>
      {/* <Button variant="text">Logout</Button> */}
    </header>
  )
}
