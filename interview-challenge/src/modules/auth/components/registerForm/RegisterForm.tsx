import { Button, CircularProgress, TextField } from '@mui/material'
import { useRegisterAPI } from 'API/hooks'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { routeNames } from 'routes'
import { produce } from 'immer'
import { LoginFormValidationSchema } from 'modules/auth'
import './register-form.scss'
import { useSetRecoilState } from 'recoil'
import { userAtom } from 'store'

interface IForm {
  username: string
  password: string
  email: string
}

export const RegisterForm = () => {

  const setUserState = useSetRecoilState(userAtom)

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

  const { isLoading, mutate: mutateRegister } = useRegisterAPI()

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    mutateRegister({
      user: {
        username: data.username,
        password: data.password,
        email: data.email,
      },
    }, {
      onSuccess: (data) => {
        if (data)
          setUserState(
            data.user
          );

        // TODO: navigate to dashboard
      },
      onError: (err) => {
        // TODO: handle error
      }
    })


  })




  const handleOnLoginClick = () => {
    navigate(routeNames.auth.login)
  }

  return (
    <FormProvider {...methods}>
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register-form__title">{"Register"}</h2>

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
              type={'password'}
              helperText={fieldState.error?.message}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          disabled={isLoading}
          size="large"
        >
          {
            isLoading ?
              <CircularProgress size={24} />
              :
              "Register"
          }
        </Button>
        <div className="register-form__login">
          {"Already Registered?"}
          <Button
            variant="text"
            color="primary"
            fullWidth
            onClick={handleOnLoginClick}
          >
            {"login"}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
