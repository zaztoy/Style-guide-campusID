import React from 'react';
import Dialog from '../../src/Dialog';

import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Dialog',
  decorators: [withKnobs],
};

export const dialog = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return <Dialog />;
};
