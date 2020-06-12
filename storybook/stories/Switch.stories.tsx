import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Switch from '../../src/Switch';

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
