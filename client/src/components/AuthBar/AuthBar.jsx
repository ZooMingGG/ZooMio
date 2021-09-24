import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MaterialAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { colors } from '../../global-styles';
import { Typography, Box, Link } from '@mui/material';
import { Button } from '../../common/components';
import { paths } from '../../auth/router';

const AuthBar = () => {
  return (
    <MaterialAppBar position="static">
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width={1}>
          <Link component={RouterLink} to={paths.signIn} color={colors.white} underline="none">
            <Typography variant="h6">ZooMio</Typography>
          </Link>
          <Box display="flex">
            <Box mr={2}>
              <Link component={RouterLink} to={paths.signIn} color={colors.white} underline="none">
                <Button variant="contained">Login</Button>
              </Link>
            </Box>
            <Box>
              <Link component={RouterLink} to={paths.signUp} color={colors.white} underline="none">
                <Button variant="contained">Register</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </MaterialAppBar>
  );
}

export { AuthBar };
