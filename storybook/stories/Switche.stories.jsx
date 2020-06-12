import React, { useState } from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import Switch from '../../src/Switche';

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
