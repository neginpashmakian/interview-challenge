import { ArticleDetailPage, ArticleListPage } from 'modules/article'
import { DashboardLayout } from 'modules/layout'

import { RouteObject } from 'react-router'
import { routeNames } from 'routes/model'

export const privateRoutes: RouteObject = {
  element: <DashboardLayout />,
  children: [
    {
      path: routeNames.private.article.base,
      element: <ArticleListPage />,
      index: true,
    },
    {
      path: routeNames.private.article.detail,

      element: <ArticleDetailPage />,
    },
    {
      path: routeNames.private.article.new,

      element: <ArticleDetailPage />,
    },
  ],
}
