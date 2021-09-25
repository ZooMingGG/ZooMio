import { Box, Typography, Link } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link as RouterLink } from 'react-router-dom';
import { TextField, Button } from '../../../common/components';
import { colors } from '../../../global-styles';
import { paths } from '../../router';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const SignInForm = () => {
  const submitHandler = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        value={formik.values.email}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        isError={formik.touched.email && Boolean(formik.errors.email)}
        error={formik.errors.email}
        name="email"
        label="Email"
        placeholder="Enter your email..."
        type="email"
      />
      <TextField
        value={formik.values.password}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        isError={formik.touched.password && Boolean(formik.errors.password)}
        error={formik.errors.password}
        name="password"
        label="Password"
        placeholder="Enter your password..."
        type="password"
      />
      <Box mb={2} display="flex" justifyContent="flex-end">
        <Link component={RouterLink} to={paths.forgotPassword} color={colors.primaryLink} underline="none">
          <Typography variant="h6" textAlign="center" color="primary">Forgot Password</Typography>
        </Link>
      </Box>
      <Button
        disabled={!formik.isValid}
        isLoading={formik.isSubmitting}
        variant="contained"
        fullWidth
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export { SignInForm };
