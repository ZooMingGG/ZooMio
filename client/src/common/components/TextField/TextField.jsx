import { FormControl, InputLabel, FormHelperText, Box, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
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
  const [visible, setVisible] = useState(false);

  const getInputType = () => {
    if (type === 'password' && visible) {
      return 'text';
    } else if (type === 'password' && !visible) {
      return 'password';
    } else {
      return type;
    }
  };

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
          type={getInputType()}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.input}
          endAdornment={type === 'password' ?
            <InputAdornment className={styles.eyeIcon} position="end" onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityOff /> : <Visibility />}
            </InputAdornment> : null
          }
        />
        {isError ? <FormHelperText className={styles.error}>{error}</FormHelperText> : null}
      </FormControl>
    </Box>
  );
}

export { TextField };
