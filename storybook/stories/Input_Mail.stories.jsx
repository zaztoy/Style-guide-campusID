import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import Table from '../../src/Table/index';
import MailInput from '../../src/Inputs/Mail';

export default {
  title: 'Mail Inputs',
  decorator: [withKnobs],
};

export const AllPropsMailInput = () => {
  const styles = ['darkTheme', 'mediumTheme', 'lightTheme'];

  const onChange = (inputValue, isValid) => {
    // Do some stuff here
  };

  const onSuccess = inputValue => {
    // Do some stuff here
  };

  const onError = inputValue => {
    // Do some stuff here
  };

  return (
    <MailInput
      onChange={onChange}
      onSuccess={onSuccess}
      onError={onError}
      style={select('style', styles)}
      label={text('label', 'This is a label')}
      placeholder={text('placeholder', 'This is a placeholder')}
      debounceTime={number('Debounce time', 500)}
    />
  );
};

const rows = [
  ['onChange', 'function'],
  ['onSuccess', 'function'],
  ['onError', 'function'],
  ['label', 'string'],
  ['placeholder', 'string'],
  ['Style', 'Enum : darkTheme, mediumTheme, lightTheme'],
];

const headers = ['PROPS', 'TYPE'];
const align = 'left';
const style = 'lightTheme';

export const mailInputProps = () => (
  <>
    <Table rows={rows} headers={headers} align={align} style={style} />
  </>
);
