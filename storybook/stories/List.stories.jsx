import React from 'react';
import List from './../../src/List/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'List',
  decorators: [withKnobs],
};

export const list = () => {
  const styles1 = ['darkTheme', 'mediumTheme', 'lightTheme'];
  const styles2 = ['darkTheme', 'mediumTheme', 'lightTheme'];

  return (
    <List
      style1={select('style1', styles1)}
      style2={select('style2', styles2)}
      title1={text('Text1', 'CampusIDOnline')}
      title2={text('Text2', 'Règlages')}
      title3={text('Text3', 'Notes')}
      title4={text('Text4', 'Planning')}
    />
  );
};
