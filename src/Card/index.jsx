import React from 'react';

const Card = props => {
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
