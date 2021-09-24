import { Box, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Card, TextField, Button } from '../../../common/components';
import { colors } from '../../../global-styles';
import { paths } from '../../router';

const SignIn = () => {
  return (
    <Box maxWidth={560} mx={'auto'}>
      <Card>
        <Box>
          <Typography variant="h4" textAlign="center" color="primary">Login</Typography>
        </Box>
        <Box mb={1}>
          <TextField label={'Email'} placeholder="Enter your email..." type="email" />
          <TextField label={'Password'} placeholder="Enter your password..." type="password" />
          <Box mb={2} display="flex" justifyContent="flex-end">
            <Link component={RouterLink} to={paths.forgotPassword} color={colors.primaryLink} underline="none">
              <Typography variant="h6" textAlign="center" color="primary">Forgot Password</Typography>
            </Link>
          </Box>
          <Button variant="contained" fullWidth>Login</Button>
        </Box>
        <Divider />
        <Box my={1}>
          <Typography variant="h6" textAlign="center" color="primary">SignIn with Github</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="center" mt={1}>
          <Box mr={1}>
            <Typography variant="h5" textAlign="center" color="primary">Don't have an account?</Typography>
          </Box>
          <Link component={RouterLink} to={paths.signUp} color={colors.primaryLink}>
            <Typography variant="h5">Register</Typography>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

export { SignIn };
