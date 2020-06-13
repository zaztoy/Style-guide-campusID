import React from 'react';
import List from './../../src/List/index';
import Table from '../../src/Table/index';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  title: 'List',
  decorators: [withKnobs],
};

export const list = () => {
  const theme1 = select('style1', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');
  const theme2 = select('style2', ['darkTheme', 'mediumTheme', 'lightTheme'], 'lightTheme');

  return (
    <List
      theme1={theme1}
      theme2={theme2}
      title1={text('Text1', 'CampusIDOnline')}
      title2={text('Text2', 'Règlages')}
      title3={text('Text3', 'Notes')}
      title4={text('Text4', 'Planning')}
    />
  );
};

const rows = [
  ['title1', 'string'],
  ['title2', 'string'],
  ['title3', 'string'],
  ['title4', 'string'],
  ['style1', 'Enum : darkTheme, mediumTheme, lightTheme'],
  ['style2', 'Enum : darkTheme, mediumTheme, lightTheme'],
];

const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const listProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
