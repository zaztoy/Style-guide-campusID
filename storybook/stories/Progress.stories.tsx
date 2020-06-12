import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Progress from '../../src/Progress';

export default {
  title: 'Progress',
  decorators: [withKnobs],
};
const linearVariant = select(
  'variant',
  ['determinate', 'indeterminate', 'buffer', 'query'],
  'determinate'
);
const progressColor = select(
  'ProgressColor',
  ['darkTheme', 'mediumTheme', 'lightTheme'],
  'darkTheme'
);
export const CircularProgress = () => (
  <div>
    <Progress progressColor={progressColor} progressType="circular" />
  </div>
);

export const LinearProgress = () => {
  return (
    <div>
      <Progress progressType="linear" progressColor={progressColor} variant={linearVariant} />
    </div>
  );
};
