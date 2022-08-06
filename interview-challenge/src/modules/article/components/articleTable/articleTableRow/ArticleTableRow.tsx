import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { IArticle } from 'API/models'
import { useState } from 'react'

interface IProps {
  // article: IArticle
  article: IArticle
  index: number
  onRowClick?: (slug: string) => void
  onEditItemClick?: (slug: string) => void
  onDeleteItemClick?: (slug: string) => void
}

export const ArticleTableRow: React.FC<IProps> = ({
  article: { title, author, tagList, body, createdAt, updatedAt, slug },
  onRowClick,
  onEditItemClick,
  onDeleteItemClick,
  index,
}) => {
  //   const handleOnItemClick = (

  //   }

  const [age, setAge] = useState('')

  const handleChange = (event: any) => {
    setAge(event.target.value)
  }

  const convertedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  const handleOnEditClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onEditItemClick?.(slug)
  }

  const handleOnRemoveClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onDeleteItemClick?.(slug)
  }

  return (
    <tr className="article-table" onClick={() => onRowClick?.(slug)}>
      <td className="article-table__num"> {index + 1}</td>
      <td className="article-table__number">{title}</td>
      <td className="article-table__username">{author.username}</td>
      <td className="article-table__tagList">{tagList.toString()}</td>
      <td className="article-table__last-modified">
        {body.split(' ').slice(0, 10).join(' ')}
      </td>
      <td className="article-table__Date">{convertedDate}</td>
      <td className="article-table__status">
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">...</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem onClick={handleOnEditClick} value={10}>
              {'Edit'}
            </MenuItem>
            <MenuItem onClick={handleOnRemoveClick} value={21}>
              {'Delete'}
            </MenuItem>
          </Select>
        </FormControl>
      </td>
    </tr>
  )
}
