import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
});

export const useLoginForm = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = useFormState({ control });

  const onSubmit = () => {
    handleSubmit(async (data) => {
      console.log(data);
      console.log(errors);
    })();
  };

  return { loginFormControl: control, errors, onSubmit };
};
