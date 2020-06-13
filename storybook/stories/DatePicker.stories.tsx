import React from 'react';
import DatePicker from '../../src/DatePicker';
import Table from '../../src/Table/index';

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Date Picker',
  decorators: [withKnobs],
};

export const DatePickerStory = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  return <DatePicker label={text('label', 'birthday')} theme={theme} />;
};

const rows = [
  ['label:', 'string'],
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
];
const headers = ['PROPS', 'TYPE'];

export const DatePickerProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
