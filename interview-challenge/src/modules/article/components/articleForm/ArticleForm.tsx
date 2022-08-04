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
import { useCreateArticleAPI } from 'API/hooks'
import { useGetTagListAPI } from 'API/hooks/tag'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import './article-form.scss'
import { ArticleFormValidationSchema } from './ArticleFormValidation'

// type Form = IUpdateUclProjectReq & IAddProjectReq;

export const ArticleForm = () => {
  const methods = useForm<any>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: ArticleFormValidationSchema,
    defaultValues: {},
  })
  const { data: tags } = useGetTagListAPI()

  const [tagsName, setTags] = useState<string[]>([])

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event
    setTags(typeof value === 'string' ? value.split(',') : value)
  }

  const {
    reset,
    handleSubmit,
    register,
    setValue,
    watch,
    control,
    formState: { dirtyFields },
  } = methods
  const { mutate: mutateCreateArticle } = useCreateArticleAPI()
  //   const practiceAreaList = useMemo()
  //     () => (practiceAreaItems?.length ? practiceAreaItems?.[0].items : []),
  //     [practiceAreaItems]

  const onSubmit = handleSubmit(data => {
    console.log('data', data)
    mutateCreateArticle({
      article: {
        title: data.title,
        description: data.description,
        body: data.body,
      },
    })
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
                  label="Title"
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
                  label="description"
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
                    label="Body"
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
                    onChange={e => {
                      handleChange(e)
                      setValue('tags', e.target.value)
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
