import { Box, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Card } from '../../../common/components';
import { colors } from '../../../global-styles';
import { paths } from '../../router';
import { SignInForm } from '../SignInForm';

const SignIn = () => {
  return (
    <Box maxWidth={560} mx={'auto'}>
      <Card>
        <Box>
          <Typography variant="h4" textAlign="center" color="primary">Login</Typography>
        </Box>
        <Box mb={1}>
          <SignInForm />
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
