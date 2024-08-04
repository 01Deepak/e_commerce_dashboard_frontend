import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import styles from './Login.module.scss';
import { loginApi } from './loginApi';
import { useNavigate } from 'react-router-dom';

export interface ILoginFormInput {
  email: string;
  password: string;
}


const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILoginFormInput>();
  const [loginData, setLoginData] = useState<ILoginFormInput>({email: '', password: '' });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data: ILoginFormInput) => {
    console.log("login data = ",loginData);
    setLoginData(data);
    const response = await loginApi(data);
    console.log("response123 = ", response);
    if (response.result.name) {
        localStorage.setItem('user', JSON.stringify(response));
        navigate("/");
    }else{
        alert("Something went wrong")
    }
    
    
    reset();
  };

useEffect(() => {
  const auth = localStorage.getItem('user')
  if (auth) {
    navigate("/")
  }
},[])
  

  return (
    <Container className={styles.login} maxWidth="xs">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
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
          login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
