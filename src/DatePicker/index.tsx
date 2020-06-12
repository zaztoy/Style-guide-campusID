import React from 'react';
import moment from 'moment';
import styles from './style';
import { createUseStyles } from 'react-jss';
import TextField from '@material-ui/core/TextField';

type Props = {
  label: string;
  theme?: 'darkTheme' | 'mediumTheme' | 'lightTheme';
};

const DatePicker = (props: Props) => {
  const today: string = moment().format('YYYY-MM-DD');
  const useStyles = createUseStyles(styles);
  const classes: Record<string, string> = useStyles();
  const { label, theme = 'darkTheme' } = props;

  return (
    <TextField
      classes={{ root: classes[theme] }}
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
