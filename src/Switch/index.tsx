import React from 'react';
import { createUseStyles } from 'react-jss';
import { Switch as MUISwitch, FormGroup, FormControlLabel } from '@material-ui/core';

import styles from './style';

type Props = {
  checked: boolean;
  label: string;
  position: 'end' | 'start' | 'top' | 'bottom';
  color?: 'red' | 'green' | 'blue';
  onChange: () => void;
};

const Switch = (props: Props) => {
  const { checked, label, position, color = 'red', onChange } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        labelPlacement={position}
        control={
          <MUISwitch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{ root: classes[color], switchBase: classes[color] }}
            checked={checked}
            onChange={onChange}
          />
        }
      />
    </FormGroup>
  );
};

export default Switch;
