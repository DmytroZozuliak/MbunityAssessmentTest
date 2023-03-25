import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Form.module.scss';
import { validationSchema } from '../../utils/validationSchema';
import InputField from '../UI/InputField';
import RadioSelect from '../UI/RadioSelect';
import Button from '../UI/Button';

export interface FormValues {
  name: string;
  surname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const defaultValues: FormValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

// Mock subjectOptions
const subjectOptions = [
  'General Inquiry',
  'General Inquiry',
  'General Inquiry',
  'General Inquiry',
] as const;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { name, surname, email, phone, subject, message } = data;
    alert(`
    You entered:
    name: ${name}
    surname: ${surname}
    email: ${email}
    phone: ${phone}
    subject: ${subject}
    message: ${message}
    `);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputsText}>
        <InputField
          {...register('name')}
          dirtyField={dirtyFields.name}
          label="Firs Name"
          errorMessage={errors.name?.message}
        />
        <InputField
          {...register('email')}
          dirtyField={dirtyFields.email}
          label="Email"
          errorMessage={errors.email?.message}
        />
        <InputField
          {...register('surname')}
          dirtyField={dirtyFields.surname}
          label="Last Name"
          errorMessage={errors.surname?.message}
        />
        <InputField
          {...register('phone')}
          dirtyField={dirtyFields.phone}
          label="Phone Number"
          errorMessage={errors.phone?.message}
        />
      </div>

      <RadioSelect
        label="Select Subject?"
        values={subjectOptions}
        dirtyField={dirtyFields.subject}
        {...register('subject')}
        errorMessage={errors.subject?.message}
      />
      <InputField
        {...register('message')}
        dirtyField={dirtyFields.message}
        label="Message"
        placeholder="Write your message.."
        errorMessage={errors.message?.message}
      />

      <Button type="submit" className={styles.submit}>
        Send Message
      </Button>
    </form>
  );
};

export default Form;
