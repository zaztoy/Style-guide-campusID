import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Progress from '../../src/Progress';
import Table from '../../src/Table';

export default {
  title: 'Progress',
  decorators: [withKnobs],
};

export const CircularProgressStory = () => {
  const progressColor = select(
    'ProgressColor',
    ['darkTheme', 'mediumTheme', 'lightTheme'],
    'darkTheme'
  );
  return (
    <div>
      <Progress progressColor={progressColor} progressType="circular" />
    </div>
  );
};

export const LinearProgressStory = () => {
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
  return (
    <div>
      <Progress progressType="linear" progressColor={progressColor} variant={linearVariant} />
    </div>
  );
};

const rows = [
  ['progressType:', 'linear | circular'],
  ['progressColor:', 'primary | dark | light'],
  ['variant:', 'determinate | indeterminate | buffer | query'],
];

const headers = ['PROPS', 'TYPE'];

export const ProgressProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
