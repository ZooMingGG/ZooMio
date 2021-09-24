import { Box, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Card, TextField, Button } from '../../../common/components';
import { colors } from '../../../global-styles';
import { paths } from '../../router';

const SignUp = () => {
  return (
    <Box maxWidth={560} mx={'auto'}>
      <Card>
        <Box>
          <Typography variant="h4" textAlign="center" color="primary">Register</Typography>
        </Box>
        <Box mb={1}>
          <TextField label={'Email'} placeholder="Enter your email..." type="email" />
          <TextField label={'Password'} placeholder="Enter your password..." type="password" />
          <TextField label={'Confirm Password'} placeholder="Enter your password again..." type="password" />
          <Button variant="contained" fullWidth>Register</Button>
        </Box>
        <Divider />
        <Box my={1}>
          <Typography variant="h6" textAlign="center" color="primary">SignUp with Github</Typography>
        </Box>
        <Divider />
        <Box display="flex" justifyContent="center" mt={1}>
          <Box mr={1}>
            <Typography variant="h5" textAlign="center" color="primary">Already have an account?</Typography>
          </Box>
          <Link component={RouterLink} to={paths.signIn} color={colors.primaryLink}>
            <Typography variant="h5">Login</Typography>
          </Link>
        </Box>
      </Card>
    </Box>
  );
}

export { SignUp };
