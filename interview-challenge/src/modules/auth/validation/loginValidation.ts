import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { string as assertString } from 'yup'

export const LoginFormValidationSchema = yupResolver(
  Yup.object().shape({
    password: assertString().required('Password is a required field'),
    email: assertString().email().required('Email is a required field'),
  })
)
