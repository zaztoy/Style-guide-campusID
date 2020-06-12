// @ts-ignore
import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createUseStyles } from 'react-jss';
import styles from './style';

const GroupButton = props => {
  const { children, variant, size, disable, onClick } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  let { style = 'darkTheme' } = props;

  style = style
    + variant.charAt(0).toUpperCase()
    + variant.slice(1)
    + (disable? 'Disable' : 'NotDisable')

  return (
    <ButtonGroup
      classes={{ root: classes[style] }}
      variant={variant}
      disabled={disable}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonGroup>
  );
};

export default GroupButton;
