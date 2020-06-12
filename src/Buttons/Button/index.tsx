import React from 'react';
import { createUseStyles } from 'react-jss';

import Button from '@material-ui/core/Button';

import styles from './style';

type Props = {
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
  children: React.ReactNode;
  variant: 'text' | 'outlined' | 'contained';
  disable: boolean;
  disableRipple: boolean;
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
};

const SimpleButton = (props: Props) => {
  const { children, variant, disable, disableRipple, size, onClick } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  const { theme = 'darkTheme' } = props;

  return (
    <Button
      classes={{
        root:
          classes[
            theme +
              variant.charAt(0).toUpperCase() +
              variant.slice(1) +
              (disable ? 'Disable' : 'NotDisable')
          ],
      }}
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
