import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  userName: yup.string().required('Username cannot be empty'),
  password: yup
    .string()
    .min(6)
    .required('Password cannot be empty')
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
      message:
        'Password must be at least 6 characters, contain at least one uppercase letter and one number',
    }),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const useSignInForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = useFormState({ control });

  return { signInFormControl: control, errors };
};
