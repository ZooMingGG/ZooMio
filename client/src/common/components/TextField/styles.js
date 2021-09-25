import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { colors } = theme;

  return createStyles({
    formControl: {
      width: '100%'
    },
    label: {
      fontSize: 24,
      color: colors.primary,
      marginLeft: -12
    },
    input: {
      color: colors.primary,
      '&.Mui-error': {
        borderColor: colors.error
      }
    },
    error: {
      fontSize: 16,
      marginLeft: 0
    },
    eyeIcon: {
      cursor: 'pointer',
    }
  });
});
