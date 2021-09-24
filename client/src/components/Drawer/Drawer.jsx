import * as React from 'react';
import MaterialDrawer from '@mui/material/Drawer';
import { useStyles } from './styles';

const Drawer = ({ isOpen, setOpen }) => {
  const styles = useStyles();

  return (
    <MaterialDrawer
      open={isOpen}
      onClose={() => setOpen(false)}
      className={styles.drawer}
      anchor='left'
      variant='temporary'
    >
      Hello
    </MaterialDrawer>
  );
}

export { Drawer };
