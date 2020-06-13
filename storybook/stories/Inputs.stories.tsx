import React from 'react';
import NumberInput from '../../src/Inputs/Number';
import MailInput from '../../src/Inputs/Mail';
import Table from '../../src/Table';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs';

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .add('Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => console.log('Changed')}
        onSuccess={() => console.log('Success')}
        onError={() => console.log('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
      />
    );
  })
  .add('Bounded Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => console.log('Changed')}
        onSuccess={() => console.log('Success')}
        onError={() => console.log('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        upperBound={number('upper bound', 100)}
        lowerBound={number('lower bound', 0)}
      />
    );
  })
  .add('Integer Number Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <NumberInput
        onChange={() => console.log('Changed')}
        onSuccess={() => console.log('Success')}
        onError={() => console.log('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        isInteger={boolean('force integer values', true)}
      />
    );
  })
  .add('Mail Input', () => {
    const theme = select('Theme', ['darkTheme', 'mediumTheme', 'lightTheme'], 'darkTheme');

    return (
      <MailInput
        onChange={() => console.log('Changed')}
        onSuccess={() => console.log('Success')}
        onError={() => console.log('Error')}
        theme={theme}
        label={text('label', 'This is a label')}
        placeholder={text('placeholder', 'This is a placeholder')}
        debounceTime={number('Debounce time', 500)}
      />
    );
  });

const headers = ['PROPS', 'TYPE'];

const NumberInputRows = [
  ['id?:', 'string'],
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
  ['label:', 'string'],
  ['placeholder:', 'string'],
  ['lowerBound:', 'number'],
  ['upperBound:', 'number'],
  ['isInteger:', 'boolean'],
  ['onSuccess:', '() => void'],
  ['onError:', '() => void'],
  ['onChange:', '() => void'],
  ['debounceTime:', 'number'],
];

export const NumberInputProps = () => (
  <>
    <Table rows={NumberInputRows} headers={headers} align="left" theme="lightTheme" />
  </>
);

const mailInputRows = [
  ['theme:', 'darkTheme | mediumTheme | lightTheme'],
  ['label:', 'string'],
  ['placeholder:', 'string'],
  ['onSuccess:', '(value: string) => void'],
  ['onError:', '(value: string) => void'],
  ['onChange:', '(value: string, isValid: boolean) => void'],
  ['debounceTime:', 'number'],
];

export const MailInputProps = () => (
  <>
    <Table rows={mailInputRows} headers={headers} align="left" theme="lightTheme" />
  </>
);
