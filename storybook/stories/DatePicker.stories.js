import React from 'react';
import DatePicker from '../../src/DatePicker';

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Date Picker',
  decorators: [withKnobs],
};

export const datePicker = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return <DatePicker label={text('label', 'birthday')} style={select('style', styles)} />;
};
