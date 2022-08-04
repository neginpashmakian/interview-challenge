import React from 'react'
import { ArticleForm } from '../components/articleForm'
import './styles/article-list-page.scss'

export const ArticleDetailPage: React.FC = () => {
  return (
    <div className="article-list-page">
      <h2 className="article-list-page__header">All Posts</h2>
      <ArticleForm />
    </div>
  )
}
