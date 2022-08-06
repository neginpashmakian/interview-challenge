import { Pagination } from '@mui/material'
import { useGetArticleListAPI } from 'API/hooks'
import { IGetArticleListAPIQueryParam } from 'API/models'
import { ArticleTable } from 'modules/article'
import React, { useCallback, useMemo, useState } from 'react'
import './styles/article-list-page.scss'

export const ArticleListPage: React.FC = () => {

  const PAGE_LIMIT = 3

  const [pagination, setPagination] = useState<IGetArticleListAPIQueryParam>({
    limit: PAGE_LIMIT,
    offset: 0,
  })


  const { isLoading, data } = useGetArticleListAPI({
    limit: pagination.limit,
    offset: pagination.offset
  })



  const handlePageChange = useCallback((e: React.ChangeEvent<unknown>, newPage: number) => {
    setPagination({
      limit: PAGE_LIMIT,
      offset: newPage,
    })
  }, [])


  return (
    <div className="article-list-page">
      <h2 className="article-list-page__header">{"All Posts"}</h2>
      <ArticleTable articles={data?.articles} isLoading={isLoading} />
      <Pagination onChange={handlePageChange} count={10} page={pagination.offset} variant="outlined" shape="rounded" />
    </div>
  )
}
