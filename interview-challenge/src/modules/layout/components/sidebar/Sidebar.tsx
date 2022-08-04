import React from 'react'
import { Link } from 'react-router-dom'
import { routeNames } from 'routes'
import './sidebar.scss'

export const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__title">Post</div>
      <ul>
        <li>
          <Link to={routeNames.private.article.base}>All Articles</Link>
        </li>
        <li>
          <Link to={routeNames.private.article.detail}>New Article</Link>
        </li>
      </ul>
    </nav>
  )
}
