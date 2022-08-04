import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import './login-form.scss'
import { LoginFormValidationSchema } from './loginValidation'

interface IForm {
  username: string
  password: string
}

export const LoginForm = () => {
  const methods = useForm<IForm>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: LoginFormValidationSchema,
    defaultValues: {},
  })
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods
  const onSubmit = handleSubmit(async form => {})

  const [passwordType, setPasswordType] = useState(true)

  const [isPasswordWrong, setIsPasswordWrong] = useState<boolean>(false)

  return (
    <FormProvider {...methods}>
      <form className="login-form" onSubmit={onSubmit}>
        <h2 className="login-form__title">Login</h2>

        <Controller
          name="email"
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              inputRef={ref}
              name="email"
              autoComplete="on"
              fullWidth
              // value={email}
              variant="outlined"
              label="Email"
            />
          )}
        />
        <Controller
          name="password"
          render={({
            field: { ref, onChange, ...field },
            formState,
            fieldState,
          }) => (
            <TextField
              {...field}
              inputRef={ref}
              onChange={onChange}
              error={!!fieldState.error?.message}
              variant="outlined"
              name="password"
              autoComplete="on"
              label="Password"
              autoFocus
              fullWidth
              required
              type={passwordType ? 'password' : 'text'}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          // disabled={isLoading || isLoadingGenerateOtp}
          // loading={isLoading}
        >
          login
        </Button>
      </form>
    </FormProvider>
  )
}
