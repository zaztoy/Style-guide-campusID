import React, { useState } from 'react';
import Slider from '../../src/Slider';
import Table from '../../src/Table/index';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Slider',
  decorators: [withKnobs],
};

export const SliderStory = () => {
  const [value, setValue] = useState(0);
  const [rangeValue, setRangeValue] = useState([0, 100]);
  const [customValue, setCustomValue] = useState([0, 100]);

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
        <Slider onChange={onChange} value={value} />
      </div>
      <div>
        <h1>RANGE SLIDER</h1>
        <Slider min={0} max={100} value={rangeValue} onChange={onChangeRange} />
      </div>
      <div>
        <h1>RANGE SLIDER WITH VALUE</h1>
        <Slider withValue min={0} max={100} value={customValue} onChange={onChangeCustom} />
      </div>
    </div>
  );
};

const rows = [
  ['onChange', 'function'],
  ['onChangeRange', 'function'],
  ['onChangeCustom', 'function'],
  ['value', 'number|number[]'],
];

const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const progressProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
