import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { IArticle } from 'API/models'
import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { privateRouteNames } from 'routes/model/private'

interface IProps {
  // article: IArticle
  article: IArticle
  index: number
  onRowClick?: any
}
export const ArticleTableRow: React.FC<IProps> = ({
  article: { title, author, tagList, body, createdAt, updatedAt, slug },
  onRowClick,
  index,
}) => {
  //   const handleOnItemClick = (

  //   }

  const [age, setAge] = useState('')

  const handleChange = (event: any) => {
    setAge(event.target.value)
  }
  const navigate = useNavigate()

  const convertedDate = new Date(createdAt).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  })

  return (
    <tr
      className="article-table"
      onClick={() =>
        navigate({
          pathname: privateRouteNames.article.navigateToDetail(slug),
          search: '?' + createSearchParams({ scope: slug as string }),
        })
      }
    >
      <td className="project-table__info"> {index + 1}</td>
      <td className="project-table__members">{title}</td>
      <td className="project-table__members">{author.username}</td>
      <td className="project-table__participle-area">{tagList}</td>
      <td className="project-table__last-modified">
        {body.split(' ').slice(0, 10).join(' ')}
      </td>
      <td className="project-table__status">{convertedDate}</td>
      <td className="project-table__status">
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
            <MenuItem value={10}>Edit</MenuItem>
            <MenuItem value={21}>Delete</MenuItem>
          </Select>
        </FormControl>
      </td>
    </tr>
  )
}
