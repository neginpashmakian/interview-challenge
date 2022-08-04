import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { string as assertString } from 'yup'

export const ArticleFormValidationSchema = yupResolver(
  Yup.object().shape({
    title: assertString()
      .required('Title is required')
      .max(50, 'Title must be at most 50 characters')
      .nullable(),
    description: assertString().nullable(),
    // id: assertString()
    //   .nullable()
    //   .max(255, 'Matter ID must be at most 255 characters'),
    // status: assertString().nullable(),
  })
)
