import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SimpleButton from '../Button';

const GroupButton = props => {
  const { children, variant, color, size, disable, orientation } = props;

  return (
    <ButtonGroup
      variant={variant}
      color={color}
      size={size}
      orientation={orientation}
      disabled={disable}
    >
      {children}
    </ButtonGroup>
  );
};

export default GroupButton;
