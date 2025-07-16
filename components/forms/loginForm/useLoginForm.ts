import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { saveToken } from '@/tokenStorage';
import { Alert } from 'react-native';
import { EMIAL_REGEX } from '@/constants';
import { router } from 'expo-router';

const schema = yup.object().shape({
  email: yup.string().required('Email is required').matches(EMIAL_REGEX, {
    message: 'Invalid email',
  }),
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
      try {
        setLoading(true);
        const userCredential = await signInWithEmailAndPassword(
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

  return { loginFormControl: control, errors, isLoading, handleLogIn };
};
