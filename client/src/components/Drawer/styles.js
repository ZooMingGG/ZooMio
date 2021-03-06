import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => {
  const { colors } = theme;

  return createStyles({
    drawer: {
      '& .MuiPaper-root': {
        minWidth: 300,
        backgroundColor: colors.primary
      }
    }
  });
}

);
