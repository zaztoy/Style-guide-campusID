import React from 'react';
import { createUseStyles } from 'react-jss';

import { Snackbar as MUISnackbar, SnackbarContent, IconButton } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';

import styles from './style';

type Props = {
  type?: 'success' | 'warning' | 'error' | 'info' | '';
  open: boolean;
  onClose?: () => void;
  message: React.ReactNode | string;
  theme: 'lightTheme' | 'mediumTheme' | 'darkTheme';
  action?: () => void;
  autoHideDuration?: 1000 | 2000 | 3000 | 4000 | 5000;
  showCloseButton: boolean;
};

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const Snackbar = (props: Props) => {
  const {
    open,
    message,
    theme = 'darkTheme',
    onClose,
    action,
    autoHideDuration,
    showCloseButton = false,
    type,
  } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  return (
    <MUISnackbar open={open} onClose={onClose} action={action} autoHideDuration={autoHideDuration}>
      {type ? (
        <Alert onClose={onClose} severity={type}>
          {message}
        </Alert>
      ) : (
        <SnackbarContent
          classes={{ root: classes[theme] }}
          message={
            <div className={classes.snackbarContent}>
              <span>{message}</span>
              {showCloseButton && (
                <IconButton onClick={onClose} size="small">
                  <CloseIcon />
                </IconButton>
              )}
            </div>
          }
        />
      )}
    </MUISnackbar>
  );
};

export default Snackbar;
