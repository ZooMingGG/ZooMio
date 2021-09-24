import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      width: '100%'
    },
    label: {
      fontSize: 24,
      color: theme.colors.primary,
      marginLeft: -12
    },
    input: {
      color: theme.colors.primary
    }
  })
);
