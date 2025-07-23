import { EMIAL_REGEX } from '@/constants';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { saveToken } from '@/tokenStorage';
import { yupResolver } from '@hookform/resolvers/yup';
import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { Alert } from 'react-native';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('Username is required').matches(EMIAL_REGEX, {
    message: 'Invalid email',
  }),
  password: yup
    .string()
    .min(6)
    .required('Email is required')
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
      try {
        setLoading(true);
        const userCredential = await createUserWithEmailAndPassword(
          FIREBASE_AUTH,
          data.email,
          data.password
        );
        const token = await userCredential.user.getIdToken();
        await saveToken('firebase_token', token);
        router.replace('/main');
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    })();
  };

  return {
    signInFormControl: control,
    errors,
    isLoading,
    handleSignIn,
  };
};
