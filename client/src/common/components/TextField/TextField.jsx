import { FormControl, InputLabel, FormHelperText, Box } from '@mui/material';
import { InputBase } from '../InputBase';
import { useStyles } from './styles';

const TextField = ({ value, handleChange, label, error, placeholder, type = 'text' }) => {
  const styles = useStyles();

  return (
    <Box mb={2}>
      <FormControl error={error} className={styles.formControl}>
        <Box mb={2.5}>
          <InputLabel shrink htmlFor={`id-${label}`} className={styles.label}>{label}</InputLabel>
        </Box>
        <InputBase
          id={`id-${label}`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={handleChange}
          className={styles.input}
        />
        {error ? <FormHelperText>Error</FormHelperText> : null}
      </FormControl>
    </Box>
  );
}

export { TextField };
