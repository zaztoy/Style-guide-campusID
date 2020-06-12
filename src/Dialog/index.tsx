import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { createUseStyles } from 'react-jss';
import styles from './style';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';

type Props = {
  title: string;
  buttonText: string;
  buttonOpen: string;
  text1: string;
  text2: string;
  text3: string;
  onClose: () => void;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
};

export default function CustomDialog(props: Props) {
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  const {
    title,
    buttonOpen = 'Open dialog',
    buttonText = 'Save',
    text1,
    text2,
    text3,
    theme = 'darkTheme',
    onClose,
  } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button classes={{ root: classes.btn }} onClick={handleClickOpen}>
        {buttonOpen}
      </Button>
      <Dialog
        classes={{ root: classes[theme] }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle disableTypography className={classes.root}>
          <Typography variant="h6">{title}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{text1}</Typography>
          <Typography gutterBottom>{text2}</Typography>
          <Typography gutterBottom>{text3}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {buttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
