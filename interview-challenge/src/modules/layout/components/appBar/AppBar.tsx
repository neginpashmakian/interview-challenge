import { Button, Typography } from '@mui/material'
import { accessToken } from 'modules/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { routeNames } from 'routes'
import { userAtom } from 'store'
import './app-bar.scss'

export const AppBar: React.FC = () => {

  const [userState, setUserState] = useRecoilState(userAtom)

  const navigate = useNavigate()

  const handleOnLogoutClick = () => {
    setUserState(undefined)
    accessToken.clear()
    navigate(routeNames.auth.login)
  }

  return (
    <header className="app-bar">
      <section className="app-bar__start-side">
        <div className="app-bar__logo">{"Arvan Challenge"}</div>
        {userState?.username &&
          <Typography className="app-bar__user">{`Welcome ${userState?.username}`}</Typography>
        }
      </section>
      <section className="app-bar__end-side">
        <Button size="small" onClick={handleOnLogoutClick} variant="outlined">{"Logout"}</Button>
      </section>

    </header>
  )
}
