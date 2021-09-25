import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '../../../common/components';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .required('First name is required'),
  lastName: yup
    .string('Enter your last name')
    .required('Last name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const SignUpForm = () => {
  const submitHandler = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: submitHandler
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
        isError={formik.touched.password && Boolean(formik.errors.password)}
        error={formik.errors.password}
        name="password"
        label="Password"
        placeholder="Enter your password..."
        type="password"
      />
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
        disabled={!formik.isValid}
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
