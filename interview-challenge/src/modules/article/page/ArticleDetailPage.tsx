import { useGetArticleAPI } from 'API/hooks'
import React from 'react'
import { useParams } from 'react-router-dom'
import { ArticleForm } from '../components/articleForm'
import './styles/article-list-page.scss'

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const { data: activeArticle } = useGetArticleAPI(
    { slug: slug || '' },
    { enabled: true }
  )
  return (
    <div className="article-list-page">
      <h2 className="article-list-page__header">
        {activeArticle ? 'Edit Article' : 'Create Article'}
      </h2>
      <ArticleForm />
    </div>
  )
}
