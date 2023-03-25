import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(3, 'Name should have at least 3 characters'),
  surname: Yup.string()
    .required('Surname is required')
    .min(3, 'Surname should have at least 3 characters'),
  email: Yup.string().required('Email is required').email('Enter valid email'),
  phone: Yup.string().required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
});
