import React from 'react';
import Dialog from '../../src/Dialog';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Dialog',
  decorators: [withKnobs],
};

export const dialog = () => {
  const customStyle = ['darkTheme', 'mediumTheme', 'lightTheme'];

  const onClose = () => {
    alert('Clooose');
  };

  return (
    <Dialog
      title={text('Title', 'CampusID')}
      customStyle={select('style', customStyle, 'darkTheme')}
      text={text('Text', 'You can put some text if you need')}
      onClose={onClose}
    />
  );
};
