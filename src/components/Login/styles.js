import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(9.1),
      height: theme.spacing(9.1),
    },
  }));
