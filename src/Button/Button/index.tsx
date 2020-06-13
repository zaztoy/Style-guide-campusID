import React from 'react';
import Button from '@material-ui/core/Button';
import { createUseStyles } from 'react-jss';

const SimpleButton = props => {
  const { children, variant, color, disable, disableRipple, size, onClick } = props;
  const useStyles = createUseStyles(color);
  const classes: Record<string, string> = useStyles();

  return (
    <Button
      classes={{ root: classes[color] }}
      variant={variant}
      disabled={disable}
      size={size}
      color={color}
      disableRipple={disableRipple}
      onClick={onClick}>
      {children}
    </Button>
  );
};

export default SimpleButton;
