import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createUseStyles } from 'react-jss';
import moment from 'moment';

import styles from './style';

const DatePicker = props => {
  const today = moment().format('YYYY-MM-DD');
  const useStyles = createUseStyles(styles);
  const classes = useStyles();

  const { label, style = 'darkTheme' } = props;

  return (
    <TextField
      classes={{ root: classes[style] }}
      id="date-picker-dialog"
      label={label}
      type="date"
      defaultValue={today}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePicker;
