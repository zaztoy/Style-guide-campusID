import React from 'react';
import DatePicker from '../../src/DatePicker';
import Table from '../../src/Table/index';

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Date Picker',
  decorators: [withKnobs],
};

export const datePicker = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  return <DatePicker label={text('label', 'birthday')} theme={theme} />;
};

const rows = [
  ['label', 'string'],
  ['style', 'Enum : darkTheme, mediumTheme, lightTheme'],
];
const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const datePickerProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
