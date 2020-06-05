import React from 'react';
import Button from '@material-ui/core/Button';
import { createUseStyles } from 'react-jss';
import styles from './style';

const SimpleButtonCustom = props => {
  const { children, variant, disable, disableRipple, size, onClick } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  const { style = 'darkTheme' } = props;

  return (
    <Button
      classes={{ root: classes[style] }}
      variant={variant}
      disabled={disable}
      size={size}
      // color={color}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SimpleButtonCustom;
