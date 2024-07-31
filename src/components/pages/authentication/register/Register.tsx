import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import styles from './Register.module.scss';
import { hitRegisterApi } from './RagisterApi';

export interface IFormInput {
  name: string;
  email: string;
  password: string;
}





const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
  const [registerData, setRegisterData] = useState<IFormInput>({ name: '', email: '', password: '' });

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log("data",registerData);
    setRegisterData(data);
    const response = hitRegisterApi(data);
    console.log("response = ", response);

    reset();
    
  };


  

  return (
    <Container className={styles.register} maxWidth="xs">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name"
          autoComplete="name"
          autoFocus
          {...register('name', 
            { required: 'Name is required' ,
               validate: value => value.trim() !== '' || 'name cannot be empty spaces'
            },
          )}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          autoComplete="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email address'
            },
            validate: value => value.trim() !== '' || 'email cannot be empty spaces'
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          margin="normal"
          fullWidth
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register('password', { required: 'Password is required',
            validate: value => value.trim() !== '' || 'password cannot be empty spaces'

           })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
