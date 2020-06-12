import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Progress from '../../src/Progress';

export default {
  title: 'Progress',
  decorators: [withKnobs],
};
const styles = ['primary', 'dark', 'light'];
const linearVariant = ['determinate', 'indeterminate', 'buffer', 'query'];
export const CircularProgress = () => (
  <div>
    <Progress progressColor={select('Color', styles)} progressType="circular" />
  </div>
);

export const LinearProgress = () => {
  return (
    <div>
      <Progress
        progressType="linear"
        progressColor={select('color', styles)}
        variant={select('Variant', linearVariant)}
      />
    </div>
  );
};
