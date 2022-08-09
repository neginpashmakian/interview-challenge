import { Button, CircularProgress, TextField } from '@mui/material'
import { useLoginAPI } from 'API/hooks'
import { accessToken, LoginFormValidationSchema } from 'modules/auth'
import { useCallback } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useSetRecoilState } from 'recoil'
import { routeNames } from 'routes'
import { userAtom } from 'store'
import './login-form.scss'

interface IForm {
  email: string
  password: string
}

export const LoginForm = () => {
  const setUserState = useSetRecoilState(userAtom)

  const navigate = useNavigate()

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

  const { isLoading, mutate: login } = useLoginAPI()

  const onSubmit = handleSubmit(async form => {
    login(
      {
        user: {
          email: form.email,
          password: form.password,
        },
      },
      {
        onSuccess: data => {
          if (data) {
            setUserState(data.user)
            accessToken.set(data.user.token)
            navigate(routeNames.private.article.base)
          }
          toast.success('Login Successfully')
        },

        onError: errors => {
          toast.error('Email or password is invalid')
        },
      }
    )
  })

  const handleOnRegisterClick = useCallback(() => {
    navigate(routeNames.auth.register)
  }, [])

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
              type="password"
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          // loading={isLoading}
          disabled={isLoading}
          type="submit"
          size="large"
        >
          {isLoading ? <CircularProgress size={24} /> : 'login'}
        </Button>
        <div>
          <Button
            variant="text"
            color="primary"
            fullWidth
            onClick={handleOnRegisterClick}
          >
            {'Register'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
