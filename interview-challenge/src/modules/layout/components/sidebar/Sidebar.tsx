import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeNames } from 'routes'
import './sidebar.scss'

export const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__title">Post</div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
            to={routeNames.private.article.base}
          >
            {'All Articles'}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
            to={routeNames.private.article.new}
          >
            {'New Article'}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
