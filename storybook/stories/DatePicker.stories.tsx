import React from 'react';
import DatePicker from '../../src/DatePicker';

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Date Picker',
  decorators: [withKnobs],
};

export const datePicker = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  return <DatePicker label={text('label', 'birthday')} theme={theme} />;
};
