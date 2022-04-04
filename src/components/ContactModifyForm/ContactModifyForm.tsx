import React from 'react';
import styles from './contactModifyForm.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {string, object} from 'yup';
import {addContacts, updateContact} from '../../store/reducers/contactsSlice';
import {useAppDispatch} from '../../hooks/redux';
import {Contact} from '../../types';

interface ContactModalContent {
  onClose: () => void;
  data: Contact;
}

const ContactModifyForm: React.FC<ContactModalContent> = ({onClose, data}) => {
  const dispatch = useAppDispatch();

  const schema = object({
    name: string()
      .min(3, 'Логин должен быть длиннее 3х символов')
      .required('это поле нужно заполнить'),
    email: string()
      .email('Введите корректный email')
      .min(3, 'email не может быть короче 3х символов')
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

  const handleForm = async (formData: any) => {
    console.log(data);
    console.log(formData);

    if (data.name.length == 0) {
      dispatch(addContacts([{name: formData.name, email: formData.email, id: data.id, phone: ''}]));
    } else {
      dispatch(updateContact({name: formData.name, email: formData.email, id: data.id, phone: ''}));
    }
    onClose();
  };

  return (
    <div className={styles.contactModifyForm}>
      <form className={styles.form} onSubmit={handleSubmit(handleForm)}>
        <TextField
          {...register('name')}
          error={errors.name}
          helperText={errors?.name?.message}
          defaultValue={data?.name}
          label="Имя"
          variant="outlined"
        />
        <TextField
          {...register('email')}
          error={errors.email}
          helperText={errors?.email?.message}
          defaultValue={data?.email}
          label="email"
          variant="outlined"
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
