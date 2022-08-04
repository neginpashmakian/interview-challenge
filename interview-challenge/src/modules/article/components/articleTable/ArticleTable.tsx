import { useGetArticleListAPI } from 'API/hooks'
import { ITableHeader, Table } from 'core/components/table/Table'
import React from 'react'
import { ArticleTableRow } from './articleTableRow/ArticleTableRow'

const articleTableHeader: ITableHeader[] = [
  { title: '# ', isMobileViewHidden: true },
  { title: 'Title', isMobileViewHidden: true },
  { title: 'Author ', isMobileViewHidden: true },
  { title: 'Tags ', isMobileViewHidden: true },
  { title: 'Excerpt ', isMobileViewHidden: true },
  { title: 'Created', isMobileViewHidden: true },
  { title: 'Updated', isMobileViewHidden: true },
]

export const ArticleTable: React.FC = () => {
  const { data } = useGetArticleListAPI({})

  return (
    <>
      <Table isSelectable tableHeader={articleTableHeader}>
        {data?.articles.map((article, index) => (
          <ArticleTableRow key={index} article={article} index={index} />
        ))}
      </Table>
    </>
  )
}
