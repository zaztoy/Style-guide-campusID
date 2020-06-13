import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Switch from '../../src/Switche';
import Table from '../../src/Table/index';

export default {
  title: 'Switche',
  decorators: [withKnobs],
};

const styles = ['red', 'green', 'blue'];
const position = ['end', 'start', 'top', 'bottom'];

export const Switche = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      style={select('style', styles)}
      label={text('Text', 'Aloha !')}
      position={select('Postion du label', position, 'top')}
      checked={boolean('Checked', checked)}
    />
  );
};

const rows = [
  ['style', 'Enum : darkTheme, mediumTheme, lightTheme'],
  ['label', 'string'],
  ['position', 'Enum : end, start, top, bottom'],
  ['checked', 'boolean'],
];

const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const switchProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
