import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { string as assertString } from 'yup'

export const RegisterValidationSchema = yupResolver(
  Yup.object().shape({
    username: assertString().required('Username is a required field'),
    password: assertString().required('Password is a required field'),
    email: assertString().email().required('Email is a required field'),
  })
)
