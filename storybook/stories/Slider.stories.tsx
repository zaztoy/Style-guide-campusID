import React, { useState } from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Slider from '../../src/Slider';
import Table from '../../src/Table/index';

export default {
  title: 'Slider',
  decorators: [withKnobs],
};

export const SliderStory = () => {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([0, 100]);
  const [customValue, setCustomValue] = useState([0, 100]);
  const theme = select('Theme', ['darkTheme', 'lightTheme', 'mediumTheme'], 'darkTheme');
  const onChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeRange = (event, newValue) => {
    setRangeValue(newValue);
  };

  const onChangeCustom = (event, newValue) => {
    setCustomValue(newValue);
  };

  return (
    <div
      style={{
        marginTop: '50px',
        padding: 50,
      }}
    >
      <div>
        <h1>SIMPLE SLIDER</h1>
        <Slider theme={theme} onChange={onChange} value={value} />
      </div>
      <div>
        <h1>RANGE SLIDER</h1>
        <Slider theme={theme} min={0} max={100} value={rangeValue} onChange={onChangeRange} />
      </div>
      <div>
        <h1>RANGE SLIDER WITH VALUE</h1>
        <Slider
          theme={theme}
          withValue
          min={0}
          max={100}
          value={customValue}
          onChange={onChangeCustom}
        />
      </div>
    </div>
  );
};

const rows = [
  ['onChange:', '() => void'],
  ['value:', 'number | number[]'],
];

const headers = ['PROPS', 'TYPE'];

export const SliderProps = () => (
  <>
    <Table rows={rows} headers={headers} align="left" theme="lightTheme" />
  </>
);
