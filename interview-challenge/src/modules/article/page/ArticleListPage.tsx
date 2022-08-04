import { Pagination } from '@mui/material'
import { ArticleTable } from 'modules/article'
import React from 'react'
import './styles/article-list-page.scss'

export const ArticleListPage: React.FC = () => {
  return (
    <div className="article-list-page">
      <h2 className="article-list-page__header">All Posts</h2>
      <ArticleTable />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </div>
  )
}
