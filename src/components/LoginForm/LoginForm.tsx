import React, {useEffect} from 'react';
import styles from './loginForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {string, object} from 'yup';
import {SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {selectUserData} from '../../store/reducers/userSlice';
import {useAppSelector} from '../../hooks/redux';

interface FormValues {
  login: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const userData = useAppSelector(selectUserData);
  const {login} = useAuth();

  const schema = object({
    login: string()
      .min(3, 'Логин должен быть длиннее 3х символов')
      .required('это поле нужно заполнить'),
    password: string()
      .min(5, 'Пароль не может быть короче 5 символов')
      .required('это поле нужно заполнить'),
  }).required();

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const handleForm: SubmitHandler<FormValues> = async data => {
    await login({login: data.login, password: data.password});
  };

  useEffect(() => {
    if (userData.error == 'NOT_CORRECT_AUTH_DATA' && !userData.isLoading) {
      setError('login', {
        type: 'server',
        message: 'Неверный логин или пароль',
      });
    } else if (userData.id) {
      navigate('/');
    }
  }, [userData.error, userData.isLoading]);

  return (
    <div className={styles.loginForm}>
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register('login')}
          error={!!errors.login}
          helperText={errors?.login?.message}
          label="Логин"
          variant="outlined"
        />
        <TextField
          {...register('password')}
          error={!!errors.password}
          helperText={errors?.password?.message}
          label="Пароль"
          variant="outlined"
        />
        <Button className={styles.button} variant="contained" size="large" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
