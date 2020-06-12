// @ts-ignore
import React from 'react';
import Button from '@material-ui/core/Button';
import { createUseStyles } from 'react-jss';
import styles from './style';

const SimpleButton = props => {
  const { children, variant, disable, disableRipple, size, onClick } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  let { style = 'darkTheme' } = props;

  style = style
    + variant.charAt(0).toUpperCase()
    + variant.slice(1)
    + (disable? 'Disable' : 'NotDisable')

  return (
    <Button
      classes={{ root: classes[style] }}
      variant={variant}
      disabled={disable}
      size={size}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;