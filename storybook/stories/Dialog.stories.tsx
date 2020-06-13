import React from 'react';
import Dialog from '../../src/Dialog';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Table from '../../src/Table/index';

export default {
  title: 'Dialog',
  decorators: [withKnobs],
};

export const DialogStory = () => {
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

const rows = [
  ['title:', 'string'],
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
  ['buttonOpen:', 'string'],
  ['buttonText:', 'string'],
  ['text1:', 'string'],
  ['text2:', 'string'],
  ['text3:', 'string'],
  ['onClose:', '() => void'],
];

const headers = ['PROPS', 'TYPE'];

export const DialogProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
