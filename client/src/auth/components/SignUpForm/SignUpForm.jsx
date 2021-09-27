import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import { TextField, Button } from '../../../common/components';
import { PasswordStrengthVisualizer } from '../../common/components';
import { signUp } from '../../../store/actions';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .min(3, 'First name should be at least 3 characters long')
    .required('First name is required'),
  lastName: yup
    .string('Enter your last name')
    .min(3, 'Last name should be at least 3 characters long')
    .required('Last name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
  confirmPassword: yup
    .string('Confirm password')
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUpForm = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(signUp(values));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        value={formik.values.firstName}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        isError={formik.touched.firstName && Boolean(formik.errors.firstName)}
        error={formik.errors.firstName}
        name="firstName"
        label="First name"
        placeholder="Enter your first name..."
        type="text"
      />
      <TextField
        value={formik.values.lastName}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        isError={formik.touched.lastName && Boolean(formik.errors.lastName)}
        error={formik.errors.lastName}
        name="lastName"
        label="Last name"
        placeholder="Enter your last name..."
        type="text"
      />
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
        isError={
          (formik.touched.password && Boolean(formik.errors.password)) ||
          (formik.touched.password && !isPasswordValid)
        }
        error={formik.errors.password}
        name="password"
        label="Password"
        placeholder="Enter your password..."
        type="password"
      />
      {formik.values.password ?
        <Box mb={2}>
          <PasswordStrengthVisualizer value={formik.values.password} setIsPasswordValid={setIsPasswordValid} />
        </Box>
        : null
      }
      <TextField
        value={formik.values.confirmPassword}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        isError={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        error={formik.errors.confirmPassword}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Enter your password again..."
        type="password"
      />
      <Button
        disabled={!formik.isValid || !isPasswordValid}
        isLoading={formik.isSubmitting}
        variant="contained"
        fullWidth
        type="submit"
      >
        Register
      </Button>
    </form>
  );
}

export { SignUpForm };
