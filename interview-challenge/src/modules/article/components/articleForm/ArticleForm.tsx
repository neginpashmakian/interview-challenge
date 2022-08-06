import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material'
import { useCreateArticleAPI, useGetArticleAPI } from 'API/hooks'
import { useGetTagListAPI } from 'API/hooks/tag'
import { ICreateArticleAPIReq, IUpdateArticleAPIReq } from 'API/models'
import { useEffect, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import './article-form.scss'
import { ArticleFormValidationSchema } from './ArticleFormValidation'

type Form = IUpdateArticleAPIReq['article'] & ICreateArticleAPIReq['article']

export const ArticleForm = () => {
  const methods = useForm<Form>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: ArticleFormValidationSchema,
    defaultValues: {},
  })

  const { slug } = useParams<{ slug: string }>()

  const { data: tags } = useGetTagListAPI()

  const [tagsName, setTags] = useState<string[]>([])

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event
    const tagList = typeof value === 'string' ? value.split(',') : value
    setTags(tagList)
    setValue('tagList', tagList)
  }

  const {
    reset,
    handleSubmit,

    setValue,
  } = methods
  const { mutate: mutateCreateArticle } = useCreateArticleAPI()

  const { data: activeArticle } = useGetArticleAPI(
    { slug: slug || '' },
    { enabled: true }
  )

  useEffect(() => {
    if (activeArticle) reset({ ...(activeArticle.article as Form) })
    else {
      reset({})
    }
  }, [reset, activeArticle])

  const onSubmit = handleSubmit(data => {
    mutateCreateArticle(
      {
        article: {
          title: data.title,
          description: data.description,
          body: data.body,
          tagList: data.tagList,
        },
      },
      {
        onSuccess: () => {
          toast.success('Article created')
          reset({})
        },
        onError: () => {
          toast.error('Error creating article')
        },
      }
    )
  })

  //   useEffect(() => {
  //     if (project_id && activeProject) reset({ ...(activeProject as Form) })
  //     else {
  //       reset({
  //         name: '',
  //         id: '',
  //       })
  //     }
  //   }, [project_id, activeProject, reset])

  return (
    <FormProvider {...methods}>
      <form className="article-form" onSubmit={onSubmit}>
        <div className="article-form__container">
          <div className="article-form__inputs">
            <Controller
              name="title"
              render={({ field: { ref, ...field } }) => (
                <TextField
                  {...field}
                  inputRef={ref}
                  fullWidth
                  placeholder="Title"
                  className="article-form__input"
                />
              )}
            />
            <Controller
              name="description"
              render={({ field: { ref, ...field } }) => (
                <TextField
                  {...field}
                  inputRef={ref}
                  fullWidth
                  variant="outlined"
                  placeholder="Description"
                  size="medium"
                  className="article-form__input"
                />
              )}
            />
            <div className="project-form__description">
              <Controller
                name="body"
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    {...field}
                    inputRef={ref}
                    fullWidth
                    variant="outlined"
                    multiline
                    minRows={10}
                    maxRows={15}
                    placeholder="Body"
                    size="medium"
                    className="article-form__input"
                  />
                )}
              />
            </div>
          </div>

          <div className="article-form__selector">
            <Controller
              name="tags"
              render={({ field: { ref, ...field } }) => (
                <FormControl>
                  <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                  <Select
                    {...field}
                    inputRef={ref}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={tagsName}
                    defaultValue={['welcome', 'introduction']}
                    // defaultValue={activeArticle?.article.tagList}
                    // defaultChecked={activeArticle?.article.tagList.map(x=>x.)}
                    onChange={e => {
                      handleChange(e)
                    }}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {tags?.map(tag => (
                      <MenuItem key={tag} value={tag}>
                        <Checkbox checked={tagsName.indexOf(tag) > -1} />
                        <ListItemText primary={tag} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </div>
        </div>
        <Button type="submit" variant="contained">
          submit
        </Button>
      </form>
    </FormProvider>
  )
}
