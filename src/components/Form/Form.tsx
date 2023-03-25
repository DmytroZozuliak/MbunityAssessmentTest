import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Form.module.scss';
import { validationSchema } from '../../utils/validationSchema';

export interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
}

const defaultValues: FormValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  subject: '',
};

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, surname, email, phone, subject } = data;
    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
      FORM
      <input {...register('name')} />
      {errors.name?.message}
      <input {...register('surname')} />
      {errors.surname?.message}
      <input {...register('email')} />
      {errors.email?.message}
      <input {...register('phone')} />
      {errors.phone?.message}
      <input {...register('subject')} />
      {errors.subject?.message}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
