import { useState } from 'react';
import Box from '@mui/material/Box';
import { AppBar } from '../AppBar'
import { Drawer } from '../Drawer'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <AppBar setOpen={setOpen} />
      <Drawer setOpen={setOpen} isOpen={open} />
    </Box>
  );
}

export { NavBar };
