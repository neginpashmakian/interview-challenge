import { CircularProgress, Typography } from '@mui/material';
import { useGetCurrentUserAPI } from 'API/hooks/auth/useGetCurrentUserAPI';
import { FunctionComponent } from 'react';
import { Navigate } from 'react-router-dom';
import { routeNames } from 'routes';
import './auth-initializer.scss';


interface AuthInitializerProps {

}

export const AuthInitializer: FunctionComponent<AuthInitializerProps> = () => {

    const { isLoading, data } = useGetCurrentUserAPI({
        retry: false
    })

    if (isLoading)
        return (
            <div className='auth-initializer'>
                <CircularProgress size={64} />
                <Typography>{"Loading..."}</Typography>
            </div>
        )

    if (data?.user) {
        return <Navigate to={routeNames.private.article.base} />
    } else {
        return <Navigate to={routeNames.auth.login} />
    }
}

