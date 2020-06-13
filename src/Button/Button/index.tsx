import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './style';
type Props = {
  children: React.ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  theme: 'lightTheme' | 'mediumTheme' | 'darkTheme';
  color: any;
  disabled: boolean;
  disableRipple: boolean;
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
};

const SimpleButton = (props: Props) => {
  const { children, variant, theme, disabled, disableRipple, size, onClick, color } = props;

  const classes: Record<string, string> = styles();

  return (
    <Button
      classes={{ root: classes[theme] }}
      variant={variant}
      disabled={disabled}
      size={size}
      color={color}
      disableRipple={disableRipple}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default SimpleButton;
