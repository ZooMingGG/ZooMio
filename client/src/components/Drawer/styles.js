import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      '& .MuiPaper-root': {
        minWidth: 300,
        backgroundColor: theme.colors.primary
      }
    }
  })
);
