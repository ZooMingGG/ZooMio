import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { colors } = theme;

  return createStyles({
    checkIcon: {
      color: colors.success
    },
    crossIcon: {
      color: colors.error
    }
  });
}
);
