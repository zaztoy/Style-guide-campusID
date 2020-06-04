import React from 'react';
import Button from '@material-ui/core/Button';

const SimpleButton = props => {
  const { children, variant, color, disable, disableRipple, size, onClick } = props;

  return (
    <Button
      variant={variant}
      color={color}
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
