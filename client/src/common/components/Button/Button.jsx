import MaterialButton from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './styles';

const Button = ({ children, isLoading, disabled = false, variant, ...rest }) => {
  const styles = useStyles();

  return (
    <MaterialButton
      {...rest}
      className={styles.button}
      variant={variant}
      disabled={disabled || isLoading}
    >
      {isLoading ? <CircularProgress size={25} /> : children}
    </MaterialButton>
  );
}

export { Button };
