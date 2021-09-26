import { useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { CheckCircleOutlineRounded, CancelRounded } from '@mui/icons-material';
import { useStyles } from './styles';
import { colors } from '../../../../global-styles';

const PasswordStrengthCheck = ({ value, regexp, title, ruleTitle, setPasswordStrength }) => {
  const styles = useStyles();
  const isMatch = useMemo(() => value.match(regexp), [value, regexp]);

  useEffect(() => {
    setPasswordStrength((prevState) => {
      return {
        ...prevState,
        [ruleTitle]: Array.isArray(isMatch)
      }
    });
  }, [value, ruleTitle, setPasswordStrength, isMatch]);

  return (
    <Box display="flex" alignItems="center" mb={0.5}>
      <Box mr={1} display="flex" alignItems="center">
        {isMatch
          ? <CheckCircleOutlineRounded className={styles.checkIcon} />
          : <CancelRounded className={styles.crossIcon} />
        }
      </Box>
      <Typography variant="body1" color={isMatch ? colors.success : colors.error}>
        {title}
      </Typography>
    </Box>
  );
}

export { PasswordStrengthCheck };
