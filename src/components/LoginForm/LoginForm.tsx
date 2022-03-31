import React, {Fragment} from 'react';
import styles from './loginForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {login} from '../../store/actions/userActions';
import {string, object} from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useAppDispatch} from '../../hooks/redux';
import {AuthData} from '../../types';

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

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
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const handleForm = async (data: any) => {
    const c = await dispatch(login({login: data.login, password: data.password}));
    console.log(c.payload.email);
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register('login')}
          error={errors.login}
          helperText={errors?.login?.message}
          label="Логин"
          variant="outlined"
        />
        <TextField
          {...register('password')}
          error={errors.password}
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
