import * as React from 'react';
import MaterialAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import { Drawer } from '../Drawer';

const AppBar = ({ setOpen }) => {
  return (
    <Box>
      <MaterialAppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={() => setOpen(true)} sx={{ fontSize: 40 }} />
          </IconButton>
        </Toolbar>
      </MaterialAppBar>
      <Drawer>Hello</Drawer>
    </Box>
  );
}

export { AppBar };
