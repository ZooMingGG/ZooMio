import Box from '@mui/material/Box';
import { AuthRouter } from '../../auth/router';
import { AuthBar } from '../../components/AuthBar';

const AuthLayout = () => {
  return (
    <Box>
      <AuthBar />
      <AuthRouter />
    </Box>
  );
}

export { AuthLayout };
