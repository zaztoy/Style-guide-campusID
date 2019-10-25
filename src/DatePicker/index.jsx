import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePicker = () => {
  return (
    <form noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="1994-07-08"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}

export default DatePicker