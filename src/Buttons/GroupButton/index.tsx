import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createUseStyles } from 'react-jss';
import styles from './style';

type Props = {
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
  children: React.ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disabled: boolean;
  size: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const GroupButton = (props: Props) => {
  const { children, variant, size, disabled, onClick } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  const { theme = 'darkTheme' } = props;

  return (
    <ButtonGroup
      classes={{
        root:
          classes[
            theme +
              variant.charAt(0).toUpperCase() +
              variant.slice(1) +
              (disabled ? 'Disable' : 'NotDisable')
          ],
      }}
      variant={variant}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonGroup>
  );
};

export default GroupButton;
