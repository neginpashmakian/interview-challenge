import { CircularProgress } from '@mui/material'
import { GET_ARTICLE_LIST_QUERY, useDeleteArticleAPI } from 'API/hooks'
import { IGetArticleListAPIRes } from 'API/models'
import { ITableHeader, Table } from 'core/components/table/Table'
import { ArticleTableRow, RemoveArticleModal } from 'modules/article'
import React, { useRef, useState } from 'react'
import { useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { routeNames } from 'routes'
import './article-table.scss'

const articleTableHeader: ITableHeader[] = [
  { title: '# ', isMobileViewHidden: true },
  { title: 'Title', isMobileViewHidden: true },
  { title: 'Author ', isMobileViewHidden: true },
  { title: 'Tags ', isMobileViewHidden: true },
  { title: 'Excerpt ', isMobileViewHidden: true },
  { title: 'Created', isMobileViewHidden: true },
  { title: 'Updated', isMobileViewHidden: true },
]

interface IArticleTableProps {
  articles?: IGetArticleListAPIRes['articles']
  isLoading?: boolean
}

export const ArticleTable: React.FC<IArticleTableProps> = ({
  articles,
  isLoading = false,
}) => {
  const activeSlug = useRef<string>()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { mutate: deleteArticle } = useDeleteArticleAPI()

  const queryClient = useQueryClient()

  const navigate = useNavigate()

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOnDeleteItemClick = (slug: string) => {
    activeSlug.current = slug
    setIsModalOpen(true)
  }

  const handleDeleteArticle = () => {
    if (activeSlug.current) {
      deleteArticle(
        {
          slug: activeSlug.current,
        },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(GET_ARTICLE_LIST_QUERY)
          },
          onError: () => {
            toast.error('Deleting article was unsuccess')
          },
        }
      )
      handleCloseModal()
    }
  }

  const navigateToDetailTable = (slug: string) => {
    navigate(routeNames.private.article.navigateToDetail(slug))
  }

  return (
    <>
      <Table isSelectable tableHeader={articleTableHeader}>
        {isLoading ? (
          <div className="article-table__loading">
            <CircularProgress />
          </div>
        ) : (
          articles?.map((article, index) => (
            <ArticleTableRow
              onEditItemClick={navigateToDetailTable}
              onRowClick={navigateToDetailTable}
              onDeleteItemClick={handleOnDeleteItemClick}
              key={index}
              article={article}
              index={index}
            />
          ))
        )}
      </Table>
      <RemoveArticleModal
        onAccept={handleDeleteArticle}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />
    </>
  )
}
