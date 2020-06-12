import React from 'react';
import styles from './style';
import { createUseStyles } from 'react-jss';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

type Props = {
  checked: boolean;
  label: string;
  position: 'end' | 'start' | 'top' | 'bottom';
  style: string;
  handleChange: any;
};

const Switches = (props: Props) => {
  const { checked, label, position, style = 'red' } = props;
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();

  return (
    <FormGroup>
      <FormControlLabel
        label={label}
        labelPlacement={position}
        control={
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{ root: classes[style], switchBase: classes[style] }}
            checked={checked}
          />
        }
      />
    </FormGroup>
  );
};

export default Switches;
