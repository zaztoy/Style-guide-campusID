import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Progress from '../../src/Progress';
import Table from '../../src/Table/index';

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

const rows = [
  ['progressType', 'Enum : linear, circular'],
  ['progressColor', 'Enum : primary, dark, light'],
  ['variant', 'Enum : determinate, indeterminate, buffer, query'],
];

const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const progressProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
