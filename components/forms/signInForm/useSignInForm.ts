import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';

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
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const useSignInForm = () => {
  const [isLoading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = useFormState({ control });

  const handleSignIn = () => {
    handleSubmit(async (data) => {
      console.log(data);
      console.log(errors);
    })();
  };

  const signInWithGoogle = () => {
    console.log('GOOOGLE!');
  };

  return {
    signInFormControl: control,
    errors,
    isLoading,
    handleSignIn,
    signInWithGoogle,
  };
};
