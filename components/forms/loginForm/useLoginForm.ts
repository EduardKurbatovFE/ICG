import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const schema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6)
    .required('Password is required')
    .matches(/^(?=.*[A-Z])(?=.*\d).{6,}$/, {
      message:
        'Password must be at least 6 characters, contain at least one uppercase letter and one number',
    }),
});

export const useLoginForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = useFormState({ control });

  const handleLogIn = () => {
    handleSubmit(async (data) => {
      console.log(data);
      console.log(errors);
    })();
  };

  return { loginFormControl: control, errors, isLoading, handleLogIn };
};
