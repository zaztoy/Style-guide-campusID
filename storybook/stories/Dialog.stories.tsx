import React from 'react';
import Dialog from '../../src/Dialog';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'Dialog',
  decorators: [withKnobs],
};

export const dialog = () => {
  const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

  const onClose = () => {
    alert('Clooose');
  };

  return (
    <Dialog
      title={text('Title', 'CampusID')}
      theme={theme}
      buttonOpen={text("Bouton d'ouverture", 'Ouvrir modal')}
      text1={text('Texte 1', 'You can put some text if you need')}
      text2={text('Texte 2', 'You can put some text if you need')}
      text3={text('Texte 3', 'You can put some text if you need')}
      buttonText={text('Bouton Texte', 'Close')}
      onClose={onClose}
    />
  );
};
