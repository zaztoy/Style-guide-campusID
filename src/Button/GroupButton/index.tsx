import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';

type Props = {
  children: React.ReactNode;
  variant: 'text' | 'contained' | 'outlined';
  color: 'inherit' | 'primary' | 'secondary' | 'default';
  size: 'small' | 'medium' | 'large';
  disabled: boolean;
  orientation: 'vertical' | 'horizontal';
};

const GroupButton = (props: Props) => {
  const { children, variant, color, size, disabled, orientation } = props;

  return (
    <ButtonGroup
      variant={variant}
      color={color}
      size={size}
      orientation={orientation}
      disabled={disabled}
    >
      {children}
    </ButtonGroup>
  );
};

export default GroupButton;
