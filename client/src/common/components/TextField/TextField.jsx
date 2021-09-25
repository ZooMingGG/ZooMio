import { FormControl, InputLabel, FormHelperText, Box } from '@mui/material';
import { InputBase } from '../InputBase';
import { useStyles } from './styles';

const TextField = ({
  value,
  handleChange,
  handleBlur,
  label,
  name,
  isError,
  error,
  placeholder,
  type = 'text'
}) => {
  const styles = useStyles();

  return (
    <Box mb={2}>
      <FormControl error={isError} className={styles.formControl}>
        <Box mb={2.5}>
          <InputLabel shrink htmlFor={`id-${label}`} className={styles.label}>{label}</InputLabel>
        </Box>
        <InputBase
          id={`id-${label}`}
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
        />
        {isError ? <FormHelperText className={styles.error}>{error}</FormHelperText> : null}
      </FormControl>
    </Box>
  );
}

export { TextField };
