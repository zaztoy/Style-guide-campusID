import React, { useState } from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Switch from '../../src/Switch';
import Table from '../../src/Table';

export default {
  title: 'Switch',
  decorators: [withKnobs],
};

export const SwitchStory = () => {
  const [checked, setChecked] = useState(false);

  const color = select('Color', ['red', 'green', 'blue'], 'red');
  const position = select('Postion du label', ['end', 'start', 'top', 'bottom'], 'top');
  const label = text('Text', 'Aloha !');

  return (
    <Switch
      color={color}
      label={label}
      position={position}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

const rows = [
  ['style:', 'darkTheme | mediumTheme | lightTheme'],
  ['label:', 'string'],
  ['position:', 'end | start | top | bottom'],
  ['checked:', 'boolean'],
];

const headers = ['PROPS', 'TYPE'];

export const switchProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
