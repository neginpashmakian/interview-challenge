import { Button, TextField } from '@mui/material'
import { useRegisterAPI } from 'API/hooks'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { LoginFormValidationSchema } from './loginValidation'
import './register-form.scss'

interface IForm {
  username: string
  password: string
  email: string
}

export const RegisterForm = () => {
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

  const { data, mutate: mutateRegister } = useRegisterAPI()

  const onSubmit = handleSubmit(async data => {
    mutateRegister({
      user: {
        username: data.username,
        password: data.password,
        email: data.email,
      },
    })

    console.log('data', data)
  })

  const [passwordType, setPasswordType] = useState(true)

  const [isPasswordWrong, setIsPasswordWrong] = useState<boolean>(false)

  return (
    <FormProvider {...methods}>
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register-form__title">Register</h2>

        <Controller
          name="username"
          render={({ field: { ref, ...field } }) => (
            <TextField
              {...field}
              inputRef={ref}
              name="username"
              fullWidth
              // value={email}
              variant="outlined"
              label="User"
            />
          )}
        />

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
          type="submit"
          // disabled={isLoading || isLoadingGenerateOtp}
          // loading={isLoading}
        >
          register
        </Button>
        <div className="register-form__login">
          Already Registered?
          <Button
            variant="text"
            color="primary"
            fullWidth
            type="submit"
            // disabled={isLoading || isLoadingGenerateOtp}
            // loading={isLoading}
          >
            login
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
