import React, {Fragment} from 'react';
import styles from './contactModifyForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useForm, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {string, object} from 'yup';
import {addContacts, updateContact} from '../../store/reducers/contactsSlice';
import {useAppDispatch} from '../../hooks/redux';
import {Contact} from '../../types';
import {Typography} from '@mui/material';

interface ContactModalContent {
  onClose: () => void;
  data: Contact;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
}

const ContactModifyForm: React.FC<ContactModalContent> = ({onClose, data}) => {
  const dispatch = useAppDispatch();
  const isNewContact = data.name.length == 0;
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = object({
    name: string()
      .min(3, 'Имя должно быть длиннее 3х символов')
      .required('Это поле нужно заполнить'),
    email: string()
      .transform(value => (!value ? null : value))
      .email('Введите корректный email')
      .min(5, 'Email не может быть короче 5 символов')
      .nullable(),
    phone: string()
      .transform(value => (!value ? null : value))
      // .matches(phoneRegExp, 'Некорректный телефон')
      .min(5, 'Телефон не может быть короче 5 символов')
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const handleForm: SubmitHandler<FormValues> = async formData => {
    if (isNewContact) {
      dispatch(
        addContacts([{name: formData.name, email: formData.email, id: data.id, phone: data.phone}])
      );
    } else {
      dispatch(
        updateContact({
          name: formData.name,
          email: formData.email,
          id: data.id,
          phone: formData.phone,
        })
      );
    }
    onClose();
  };

  return (
    <div className={styles.contactModifyForm}>
      <Typography variant="h5" className={styles.title}>
        {isNewContact ? <Fragment>Создать контакт</Fragment> : <Fragment>Изменить данные</Fragment>}
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register('name')}
          error={!!errors?.name}
          helperText={errors?.name?.message}
          defaultValue={data.name}
          label="Имя"
          variant="standard"
        />
        <TextField
          {...register('email')}
          error={!!errors?.email}
          helperText={errors?.email?.message}
          defaultValue={data.email}
          label="Email"
          variant="standard"
        />
        <TextField
          {...register('phone')}
          error={!!errors?.phone}
          helperText={errors?.phone?.message}
          defaultValue={data.phone}
          label="Телефон"
          variant="standard"
        />
        <div className={styles.btnWrapper}>
          <Button className={styles.button} variant="contained" size="large" type="submit">
            Сохранить
          </Button>
          <Button
            className={styles.button}
            onClick={onClose}
            variant="contained"
            size="large"
            type="button"
          >
            Отмена
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactModifyForm;
